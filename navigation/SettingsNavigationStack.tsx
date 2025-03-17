import DEFAULT_SCREEN_OPTIONS from "@/constants/Navigation";
import SettingsScreen from "@/screens/settings/settings.screen";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export interface SettingsStackParamsList extends ParamListBase {
  Settings: undefined;
}

const SettingsStack = createNativeStackNavigator<SettingsStackParamsList>();

const SettingsNavigationStack = () => {
  return (
    <SettingsStack.Navigator initialRouteName={"SettingsScreen"} screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigationStack;