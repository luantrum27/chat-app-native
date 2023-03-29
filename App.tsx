import { AppRegistry, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ConversationScreen from './src/screens/ConversationScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const switchNavigator = createSwitchNavigator({

  // signUpStack: {
  //   screen: createStackNavigator({
  //     SignUp: SignUpScreen,
  //   }, {
  //     defaultNavigationOptions: {
  //       headerShown: false
  //     }
  //   }),
  // },
  // loginStack: {
  //   screen: createStackNavigator({
  //     Login: LoginScreen,
  //   }, {
  //     defaultNavigationOptions: {
  //       headerShown: false
  //     }
  //   }),
  // },
  conversationStack: {
    screen: createStackNavigator({
      Conversation: ConversationScreen,
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    }),
  },

});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {

  return (
    <AppNavigation />
  );
}

