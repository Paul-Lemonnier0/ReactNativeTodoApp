import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsNavigationStack from "./SettingsNavigationStack";
import HomeNavigationStack from "./HomeNavigationStack";
import CustomBottomTabBar from "@/components/navigation/CustomBottomTabBar";

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
}

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

const BottomTabBarNavigator = () => {
  return(
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: false,
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <CustomBottomTabBar {...props}/>}
    >
      <BottomTab.Screen name="Home" component={HomeNavigationStack}/>
      <BottomTab.Screen name="Settings" component={SettingsNavigationStack}/>
    </BottomTab.Navigator>
  )
}

export default BottomTabBarNavigator