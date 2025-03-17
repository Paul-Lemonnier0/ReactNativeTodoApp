import DEFAULT_SCREEN_OPTIONS from "@/constants/Navigation";
import HomeScreen from "@/screens/home/home.screen";
import TodoItemDetails from "@/screens/todoItemDetails/todoItemDetails.screen";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export interface HomeStackParamsList extends ParamListBase {
  HomeScreen: undefined;
  TodoItemDetails: {
    id: string
  }
}

const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

const HomeNavigationStack = () => {
  return (
    <HomeStack.Navigator initialRouteName={"HomeScreen"} screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="TodoItemDetails" component={TodoItemDetails} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigationStack;