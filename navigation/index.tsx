import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabBarNavigator from "./BottomTabBarNavigator";
import NotFoundScreen from "@/screens/notFound/notFound.screen";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

const Navigation = () => {
  return <RootNavigator />;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabBarNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
