import TabBarMenus from "@/types/navigation/BottomTabBar";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {
    backgroundColor: "tranparent"
  },
  presentation: "card"
}

export const TAB_BAR_MENUS: TabBarMenus[] = [
  {
    icon: "list",
    screen: "Home",
    label: "Accueil",
  },
  {
    icon: "settings-sharp",
    screen: "Settings",
    label: "Paramètres",
  },
];

export default DEFAULT_SCREEN_OPTIONS;