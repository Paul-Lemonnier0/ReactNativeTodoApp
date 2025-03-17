/**
 * This file contains the keys used in the localization files. It is used to avoid typos and to have a better autocompletion when using the translations.
 * The keys are used in other files that needs to access the translations by calling i18nKeys.myField .
 */
export const i18nKeys: LocalizationType = {
  appName: "appName",
  editTodoItemBottomSheet: {
    title: "editTodoItemBottomSheet.title",
    edit: "editTodoItemBottomSheet.edit",
    titleInputPlaceholder: "editTodoItemBottomSheet.titleInputPlaceholder",
    emptyTitleErrorMessage: "editTodoItemBottomSheet.emptyTitleErrorMessage",
  },
  addTodoListBottomSheet: {
    title: "addTodoListBottomSheet.title",
    add: "addTodoListBottomSheet.add",
    titleInputPlaceholder: "addTodoListBottomSheet.titleInputPlaceholder",
    emptyTitleErrorMessage: "addTodoListBottomSheet.emptyTitleErrorMessage",
  },
  taskDetailsScreen: {
    title: "taskDetailsScreen.title",
    remove: "taskDetailsScreen.remove",
  },
  settingsScreen: {
    title: "settingsScreen.title",
    theme: {
      categoryTitle: "settingsScreen.theme.categoryTitle",
      light: "settingsScreen.theme.light",
      dark: "settingsScreen.theme.dark",
    },
    language: {
      categoryTitle: "settingsScreen.language.categoryTitle",
      fr: "settingsScreen.language.fr",
      en: "settingsScreen.language.en",
    },
  },
  notFoundScreen: {
    title: "notFoundScreen.title",
    link: "notFoundScreen.link",
  }
} as const;
