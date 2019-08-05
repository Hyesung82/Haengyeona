import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import firstpage from './First';
import MainScreen from './Components/MainScreen';

const App = createStackNavigator(

    {     
        Home: {screen:firstpage},
        Main: {screen:MainScreen}
    },    
    {initialRouteName: 'Home', headerMode: 'none'}
);

export default createAppContainer(App);