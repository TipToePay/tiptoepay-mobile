import React from 'react';
import { View } from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import * as Screens from './app/screens';
import {AppLoading, Font} from 'expo';
import {bootstrap} from './app/config/bootstrap';

bootstrap();
const TipToeApp = createStackNavigator(
  {
    Login: Screens.Login,
    SignUp: Screens.SignUp
  },
  {
    initialRouteName: 'Login',
  }
);

export default class App extends React.Component {
  state = {
    loaded: false
  };

  componentWillMount() {
    this._loadAssets();
  }

  _loadAssets = async() => {
    await Font.loadAsync({
      'fontawesome': require('./app/assets/fonts/fontawesome.ttf'),
      'icomoon': require('./app/assets/fonts/icomoon.ttf'),
      'Righteous-Regular': require('./app/assets/fonts/Righteous-Regular.ttf'),
      'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf'),
    });
    this.setState({loaded: true});
  };

  render() {
    if (!this.state.loaded) {
      return <AppLoading />;
    }
  
    return (
      <View style={{flex: 1}}>
        <TipToeApp/>
      </View>
    );
  }
}
