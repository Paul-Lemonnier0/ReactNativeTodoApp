import { useAppContext } from "@/context/AppContext";

const useTranslations = () => {
  const {
    i18n
  } = useAppContext()

  /**
   * Get the translations for a given key
   * @param key - The key is a string: the list of the available keys is in the localizations_keys file and you can use the i18nKeys object to access them easily
   * @returns - The translation for the given key
   */
  const getTranslation = (key: string) => {
    return i18n.t(key)
  }

  return {
    getTranslation
  }
}

export default useTranslations;