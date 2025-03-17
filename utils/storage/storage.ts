import ERROR_MESSAGES from "@/constants/Errors";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Saves a preference to the device storage
 * @param key - The key to save the preference under
 * @param value - The value of the preference
 */
export const savePreference = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(ERROR_MESSAGES.STORAGE.SET_ERROR, ": ", error);
  }
};

/**
 * Retrieves a preference from the device storage
 * @param key - The key of the preference to retrieve
 * @returns - The value of the preference
 */
export const getPreference = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error(ERROR_MESSAGES.STORAGE.GET_ERROR, ": ", error);
    return null;
  }
};
