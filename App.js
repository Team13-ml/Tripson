import React, {Component} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Locations from './screens/LocationsScreen';
import MapContainer from './screens/MapContainer';
import LocationForm from './forms/LocationForm';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import TripInfo from './screens/TripInfo';
import TripForm from './forms/TripForm';

class App extends Component {
  render(){
    return(
          <LoginForm navigation = {this.props.navigation}/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Welcome : App,
  Register : RegisterForm,
  Locations : Locations,
  Maps : MapContainer,
  Form : LocationForm,
  Trips : TripInfo,
  Planner : TripForm,
},
{
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : 'teal',
    },
    headerTintColor : 'white'
  }
});

/*const Tabs = createBottomTabNavigator({
  Settings : SettingsScreen,
  Profile : ProfileScreen,
});*/

export default createAppContainer(AppNavigator);


