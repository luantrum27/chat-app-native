import { AppRegistry, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/LoginScreen';
const switchNavigator = createSwitchNavigator({

  homeStack: {
    screen: createStackNavigator({
      Home: HomeScreen,
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

