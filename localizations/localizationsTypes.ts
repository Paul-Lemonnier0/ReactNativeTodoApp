interface LocalizationType{
  appName: string,
  addTodoListBottomSheet: {
    title: string,
    add: string
    titleInputPlaceholder: string,
    emptyTitleErrorMessage: string
  },
  taskDetailsScreen: {
    title: string,
    remove: string,
  },
  editTodoItemBottomSheet: {
    title: string,
    edit: string,
    titleInputPlaceholder: string,
    emptyTitleErrorMessage: string
  },
  settingsScreen: {
    title: string,
    theme: {
      categoryTitle: string,
      light: string,
      dark: string
    },
    language: {
      categoryTitle: string,
      fr: string,
      en: string
    }
  }
  notFoundScreen: {
    title: string,
    link: string
  }
}