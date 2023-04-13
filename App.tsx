// import { AppRegistry, StyleSheet } from "react-native";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
// import ChatScreen from "./src/screens/ChatScreen";
// const switchNavigator = createSwitchNavigator({
//   // signupStack: {
//   //   screen: createStackNavigator(
//   //     {
//   //       Signup: SignUpScreen,
//   //     },
//   //     {
//   //       defaultNavigationOptions: {
//   //         headerShown: false,
//   //       },
//   //     }
//   //   ),
//   // },
//   // loginStack: {
//   //   screen: createStackNavigator(
//   //     {
//   //       Login: LoginScreen,
//   //     },
//   //     {
//   //       defaultNavigationOptions: {
//   //         headerShown: false,
//   //       },
//   //     }
//   //   ),
//   // },
//   dashboard: {
//     screen: createStackNavigator(
//       {
//         dashboard: Dashboard,
//       },
//       {
//         defaultNavigationOptions: {
//           headerShown: false,
//         },
//       }
//     ),
//   },
//   chatStack: {
//     screen: createStackNavigator(
//       {
//         chatScreen: ChatScreen,
//       },
//       {
//         defaultNavigationOptions: {
//           headerShown: false,
//         },
//       }
//     ),
//   },
// });

// const AppNavigation = createAppContainer(switchNavigator);

// export default function App() {
//   return <AppNavigation />;
// }

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Dashboard: undefined;
  ChatScreen: undefined;
  // ChatRoute: undefined;
};

export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ChatScreen"
>;

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./src/screens/ChatScreen";

// function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate("Profile", { userId: "123" })}
//       />
//     </View>
//   );
// }

// function ProfileScreen({
//   route,
//   navigation,
// }: {
//   route: ProfileScreenRouteProp;
//   navigation: ProfileScreenNavigationProp;
// }) {
//   const { userId } = route.params;
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//       <Text>User ID: {userId}</Text>
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
