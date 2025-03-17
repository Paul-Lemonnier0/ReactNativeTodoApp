import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigationStack from "./HomeNavigationStack";
import DEFAULT_SCREEN_OPTIONS from "@/constants/Navigation";

export interface RootStackParamsList extends ParamListBase {
  Home: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootNavigationContainer = () => {
  return (
    <RootStack.Navigator initialRouteName={"Home"} screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen name="Home" component={HomeNavigationStack} />
    </RootStack.Navigator>
  );
}

export default RootNavigationContainer;