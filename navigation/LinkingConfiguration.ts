import { LinkingOptions } from "@react-navigation/native";
import { HomeStackParamsList } from "./HomeNavigationStack";
import * as Linking from "expo-linking";

export interface RootStackParamsList {
  Root: undefined;
  Home: HomeStackParamsList;
}

const preffix = Linking.createURL("/");

/**
 * This is the linking configuration for the app.
 * It specifies how to translate a given URL to a screen in the app. (Deep linking)
 */
const LinkingConfiguration: LinkingOptions<RootStackParamsList> = {
  prefixes: [preffix],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: "home",
              TodoItemDetails: "todo-item-details/:id"
            }
          },

          Settings: {
            screens: {
              Settings: "settings"
            }
          }
        }
      }
    }
  }
}

export default LinkingConfiguration;