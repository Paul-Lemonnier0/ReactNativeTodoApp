import ERROR_MESSAGES from "@/constants/Errors";
import { BASE_USER_PREFERENCES } from "@/constants/User";
import { UserPreferences } from "@/types/UserType";
import AsyncStorage from "@react-native-async-storage/async-storage";

class UserService {
  private storageKey = "user_preferences";

  /**
   * Fetches the user preferences from the cache storage
   * @returns - The user preferences
   */
  async getCachedPreferences(colorScheme?: "light" | "dark" | null): Promise<UserPreferences> {

    const baseUserPreferences = colorScheme ? {...BASE_USER_PREFERENCES, theme: colorScheme} : BASE_USER_PREFERENCES;

    try {
      const cachedPreferences = await AsyncStorage.getItem(this.storageKey);
      return cachedPreferences ? JSON.parse(cachedPreferences) : baseUserPreferences;
    }

    catch (error) {
      console.error(ERROR_MESSAGES.STORAGE.GET_ERROR, ": ", error);
    }

    return baseUserPreferences
  }

  async setUserPreferences(preferences: UserPreferences): Promise<void> {
    try {
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(preferences));
    }

    catch (error) {
      console.error(ERROR_MESSAGES.STORAGE.SET_ERROR, ": ", error);
    }
  }
}

export default UserService