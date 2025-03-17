import { BASE_FALLBACK_LOCALE } from "@/constants/Language";

/**
 * Get the date string of the todo in order to display it (format: mer. 12 févr. 2025)
 * @param date - The date to convert to a string
 * @returns - The date string
 */
function getTodoDateString(date: Date, locale?: Intl.LocalesArgument): string {

  const dateString = new Date(date).toLocaleDateString(locale ?? BASE_FALLBACK_LOCALE, {
    year: "numeric",
    month: 'short',
    weekday: 'short',
    day: 'numeric'
  })

  return dateString;
}

export {
  getTodoDateString
}