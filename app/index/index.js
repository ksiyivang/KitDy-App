/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoadingScreen from '../pages/loadingScreen/loadingScreen'
import Login from '../pages/login/login';
import SignUp from '../pages/login/signUp';
import MainMenu from '../pages/menu/mainMenu';

const MainNavigator = createStackNavigator({
  loadingScreen: { screen: LoadingScreen },
  loginScreen: { screen: Login },
  signUpScreen: { screen: SignUp },
  mainMenuScreen: { screen: MainMenu }

},

  {
    headerMode: "none",
    initialRouteName: "signUpScreen"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
