import React, { createContext, ReactNode, useState, useContext } from "react";
import * as Localization from 'expo-localization'
import { I18n } from "i18n-js";
import { en } from "@/localizations/localizations_en";
import { fr } from "@/localizations/localizations_fr";
import { BASE_FALLBACK_LOCALE } from "@/constants/Language";
import { useColorScheme } from "react-native";

/**
 * Defines the structure of the context type (what will be provided by the context)
 */
interface AppContextType {
  locale: string,
  theme: "light" | "dark",
  setTheme: (theme: "light" | "dark") => void,
  setLocale: (locale: string) => void,
  i18n: I18n,
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

/**
 * Provides the App context to child components.
 * Handles base variables initialization and management, needed in the hole app.
 *
 * @param children - The child components that will have access to the context
 * @returns - The App context provider
 */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme()

  const [theme, setTheme] = useState<"light"| "dark">(colorScheme ?? "light")
  const [locale, setLocale] = useState<string>(Localization.getLocales()[0].languageCode ?? BASE_FALLBACK_LOCALE);
  const i18n = new I18n({en, fr});

  i18n.locale = locale;
  i18n.defaultLocale = BASE_FALLBACK_LOCALE;
  i18n.enableFallback = true;

  return (
    <AppContext.Provider value={{ i18n, locale, setLocale, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook to access the TodoList context.
 * Throws an error if used outside a AppProvider.
 */
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
