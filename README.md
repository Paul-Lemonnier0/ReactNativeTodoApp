# ***React Native*** starter **(TodoList)**

This is the ***React Native*** version of the todolist starter applications.

-- This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). --

## Basic To-Do App Features

This basic To-Do app implements the fundamental tools needed to properly scale an application:

- **API calls** for data fetching and interaction
- **State management** using Services, Context, and Hooks
- **Dynamic theme switching** for light/dark mode
- **Multilingual support** (French & English)
- **Error handling** management of the errors occuring in the app
- **Input error handling** management of the input errors
- **Basic unit tests** to ensure functionality
- **Component testing** (e.g., `src/components/Checkbox`)
- **Basic animations**, such as adding/removing items in a list
- **Navigation system**, including a bottom tab bar and screen transitions
- **Bottom sheet modals** for enhanced UI/UX
- **Reusable UI components**, including text elements, buttons, inputs, modals, and cards
- **Cache management**, used for the theme and language of the application

This setup provides a solid foundation for scaling the app efficiently while maintaining good structure and best practices. 🚀

## Get started

**1.** Edit the **IS_EMULATOR**, **PORT**, **BASE_API_URL** in order to connect with the backend. `(/src/constants/API.ts)`

**2.** Install dependencies

   ```bash
   npm install
   ```

**3.** Start the app

   ```bash
   npm start
   ```

   ***Or***

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

First of all, download the **Expo Go** app. Then, scan the **generated QR Code**. Note that if you can't or don't want to download this app, you will have to use an **emulator** (Xcode, Android Studio).

## Reset the project

If you want to reset the project, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more and documentation

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.