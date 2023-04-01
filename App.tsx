import { AppRegistry, StyleSheet } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
const switchNavigator = createSwitchNavigator({

  // signupStack: {
  //   screen: createStackNavigator(
  //     {
  //       Signup: SignUpScreen,
  //     },
  //     {
  //       defaultNavigationOptions: {
  //         headerShown: false,
  //       },
  //     }
  //   ),
  // },
  // loginStack: {
  //   screen: createStackNavigator(
  //     {
  //       Login: LoginScreen,
  //     },
  //     {
  //       defaultNavigationOptions: {
  //         headerShown: false,
  //       },
  //     }
  //   ),
  // },
  dashboard: {
    screen: createStackNavigator(
      {
        dashboard: Dashboard,
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      }
    ),
  },
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return <AppNavigation />;
}
