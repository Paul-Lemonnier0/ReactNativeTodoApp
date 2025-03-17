import { BaseImpact } from "@/constants/Impacts";
import { TAB_BAR_MENUS } from "@/constants/Navigation";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import BottomTabBarButton from "./BottomTabBarButton";
import { useThemeColor } from "@/hooks/useThemeColor";

const CustomBottomTabBar: FC<BottomTabBarProps> = (props) => {

  const { state, navigation } = props;
  const currentScreenIndex = state.index;

  const secondary = useThemeColor({}, "secondary")

  /**
   * Check if the screen is focused based on the index of the screen
   */
  const isScreenFocused = (screenIndex: number) => {
    return currentScreenIndex === screenIndex
  }

  /**
   * Handle the navigation to the screen based on the index of the screen
   */
  const navigate = (screen: string, index: number) => {
    // If the screen is not focused, we trigger the impact (avoiding a wrong impact when the screen is already focused (= no change))
    if (!isScreenFocused(index)) {
      BaseImpact();
    }

    // If the screen is focused and it's not the first screen, we reset the navigation to the screen (going back to the initial state of the screen)
    const isNotFirstScreen = props.state.history.length >= 1;

    if (isScreenFocused(index) && isNotFirstScreen) {
      resetNavigation(screen);
    }

    else navigation.navigate(screen);
  };

  /**
   * Reset the navigation to the main screen of the stack
   * @param screen
   */
  const resetNavigation = (screen: string) => {
    navigation.reset({ index: 0, routes: [{ name: screen }] });
  }

  return(
    <View style={[styles.container, { backgroundColor: secondary }]}>
      {
        TAB_BAR_MENUS.map((menu, index) => (
          <BottomTabBarButton
            key={index}
            icon={menu.icon}
            onPress={() => navigate(menu.screen, index)}
            isFocused={isScreenFocused(index)}
          />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    paddingBottom: 20,
  },
});

export default CustomBottomTabBar