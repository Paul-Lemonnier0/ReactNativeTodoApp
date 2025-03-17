import BaseScreenContainer from "@/components/screens/BaseScreenContainer";
import BaseScreenHeader from "@/components/screens/BaseScreenHeader";
import { ThemedText } from "@/components/ThemedText";
import { BaseImpact } from "@/constants/Impacts";
import { useAppContext } from "@/context/AppContext";
import { SettingsStackParamsList } from "@/navigation/SettingsNavigationStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FC } from "react";
import { View } from "react-native";
import { i18nKeys } from "@/localizations/localizations_keys";
import settingsStyles from "./settings.style";
import useTranslations from "@/hooks/useTranslations";
import ImageRadioButton from "@/components/buttons/ImageRadioButton";
import IconRadioButton from "@/components/buttons/IconRadioButton";

type SettingsScreenProps = NativeStackScreenProps<SettingsStackParamsList, "SettingsScreen">;

/**
 * The settings screen accessible from the bottom tab navigator
 */
const SettingsScreen: FC<SettingsScreenProps> = () => {

  /**
   * Get the theme and locale from the context
   */
  const { locale, setLocale, theme, setTheme } = useAppContext()

  /**
   * Get the translations
   */
  const { getTranslation } = useTranslations()

  /**
   * Handle the selection of a setting by calling the setter function and the launching a base impact (vibration)
   */
  const handleSelection = (handleSelection: (val: any) => void, value: string, initialValue: string) => {
    if(value !== initialValue) {
      BaseImpact()
      handleSelection(value)
    }
  }

  /**
   * Sentences to display on the screen
   */
  const sentences = {
    title: getTranslation(i18nKeys.settingsScreen.title),
    light: getTranslation(i18nKeys.settingsScreen.theme.light),
    dark: getTranslation(i18nKeys.settingsScreen.theme.dark),
    fr: getTranslation(i18nKeys.settingsScreen.language.fr),
    en: getTranslation(i18nKeys.settingsScreen.language.en),
    themeCategoryTitle: getTranslation(i18nKeys.settingsScreen.theme.categoryTitle),
    languageCategoryTitle: getTranslation(i18nKeys.settingsScreen.language.categoryTitle)
  }

  /**
   * Options for the settings (theme)
   */
  const themeOptions: {icon: string, value: 'light' | 'dark', label: string}[] = [
    { icon: "sunny-sharp" , value: "light", label: sentences.light },
    { icon: "moon-sharp", value: "dark", label: sentences.dark }
  ]

  /**
   * Options for the settings (language)
   */
  const languageOptions: {img: string, value: string, label: string}[] = [
    { img: require("../../assets/images/flags/fr.png"), value: "fr", label: sentences.fr },
    { img: require("../../assets/images/flags/en.png"), value: "en", label: sentences.en }
  ]

  return(
    <BaseScreenContainer isScrollable>
      <BaseScreenHeader title={sentences.title}/>
      <SettingsSection title={sentences.themeCategoryTitle}>
        {themeOptions.map(({ icon, value, label }) => (
          <IconRadioButton
            key={value}
            onPress={() => handleSelection(setTheme, value, theme)}
            isSelected={theme === value}
            icon={icon}
            label={label}
          />
        ))}
      </SettingsSection>

      <SettingsSection title={sentences.languageCategoryTitle}>
        {languageOptions.map(({ img, value, label }) => (
          <ImageRadioButton
            key={value}
            onPress={() => handleSelection(setLocale, value, locale)}
            isSelected={locale === value}
            img={img}
            label={label}
          />
        ))}
      </SettingsSection>
    </BaseScreenContainer>
  )
}

/**
 * Display a section of settings with a title and children
 */
const SettingsSection = ({title, children}: {title: string, children: React.ReactNode}) => {
  return(
    <View style={settingsStyles.settingContainer}>
      <ThemedText type="medium">{title}</ThemedText>
      <View style={settingsStyles.settingBodyContainer}>
        {children}
      </View>
    </View>
  )
}

export default SettingsScreen;