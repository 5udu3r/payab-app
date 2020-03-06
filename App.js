import React, { Component } from 'react';
// import AppContainer from './routes'
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

//components
import { WelcomeStackNavigator, AppDrawerNavigator } from './routes';
import SplashScreen from './src/Components/SplashScreen';


const AppSwitchNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  Welcome: { screen: WelcomeStackNavigator },
  Dashboard: { screen: AppDrawerNavigator },

});

const AppContainer = createAppContainer(AppSwitchNavigator)



export default class App extends Component {

  render() {
    return <AppContainer />;
  }
}



