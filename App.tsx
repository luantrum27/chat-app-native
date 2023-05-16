import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./src/screens/ChatScreen";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import VerifiAccountScreen from "./src/screens/VerifiAccountScreen";

import { StackNavigationProp } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store, { persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { IConversation } from "./src/models";

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Dashboard: undefined;
  ChatScreen: IConversation;
  VerifiAccountScreen: undefined;
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

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "ChatScreen">;

export type VerifiAccountNavigationProp = StackNavigationProp<
  RootStackParamList,
  "VerifiAccountScreen"
>;

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifiAccountScreen"
              component={VerifiAccountScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
