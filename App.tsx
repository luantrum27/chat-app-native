import { extendTheme, NativeBaseProvider } from 'native-base';
import { AppRegistry, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
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

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
};

// extend the theme
const customTheme = extendTheme({ config });

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {

  return (
    <NativeBaseProvider theme={customTheme}>
      <AppNavigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
