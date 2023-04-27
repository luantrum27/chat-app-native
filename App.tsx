import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./src/screens/ChatScreen";
import Dashboard from "./src/screens/Dashboard";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

import { StackNavigationProp } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store, { persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Dashboard: undefined;
  ChatScreen: undefined;
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

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator >
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
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
