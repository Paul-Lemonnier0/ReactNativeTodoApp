import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native';
import { TodoListProvider } from '@/context/TodoListContext';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AppProvider } from '@/context/AppContext';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import Navigation from './navigation';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

/**
 * The main component of the application
 * @returns
 */
export default function RootLayout() {

  // Get the device's color scheme
  const colorScheme = useColorScheme();

  // Load the custom font
  const [loaded] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Hide the splash screen when the app is loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // While the font is not loaded, we don't render the app
  if (!loaded) {
    return null;
  }

  // Render the app
  return (
    /* Wraps the app in a gesture handler view, helping us to intercept the user movements (such as closing a bottom sheet) */
    <AppProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* Wraps the app in a navigation container, allowing us to navigate between screens */}
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <View style={{flex: 1}}>
          {/* Wraps the app in a bottom sheet provider, allowing us to use bottom sheets in the app */}
          <BottomSheetModalProvider>
            {/* Wraps the app in a todo list provider, allowing us to manage the todo list state and accessing to the global variables and methods globally in the code */}
            <TodoListProvider>
              {/* Wraps the app in a theme provider, allowing us to use the theme colors and styles in the app */}
                <ThemedView style={{ flex: 1 }}>
                  {/* Renders the main screen of the app */}
                  <Navigation/>
                </ThemedView>
            </TodoListProvider>
          </BottomSheetModalProvider>
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
