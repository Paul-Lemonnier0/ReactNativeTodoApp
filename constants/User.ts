import { UserPreferences } from "@/types/UserType";
import * as Localization from 'expo-localization'
import { BASE_FALLBACK_LOCALE } from "./Language";

const BASE_USER_PREFERENCES: UserPreferences = {
  theme: "light",
  locale: Localization.getLocales()[0].languageCode ?? BASE_FALLBACK_LOCALE
}

export {
  BASE_USER_PREFERENCES
}
