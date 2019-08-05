import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
 import { Icon } from 'native-base';
 import { createMaterialTopTabNavigator , createAppContainer } from 'react-navigation';

 import HomeTab from './AppTabNavigator/HomeTab'
 import BoardTab from './AppTabNavigator/BoardTab'
 import InformationTab from './AppTabNavigator/InformationTab'
 import ProfileTab from './AppTabNavigator/ProfileTab'

 const AppTabNavigator = createMaterialTopTabNavigator({
    Home:{ screen: HomeTab, bounces : true },
    Information:{ screen: InformationTab, bounces : true },
    Board:{ screen: BoardTab, bounces : true },
    Profile:{ screen: ProfileTab, bounces : true }
  }, {
    animationEnabled: true,
    swipeEnabled: false,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios:{
            backgroundColor:'white',
          },
          android : {
            backgroundColor:'white',    
          }
        })
      },
      iconStyle: { height: 25 },
      activeTintColor: '#005aff',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    }
  });

 const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component { 

    render() {
            return <AppTabContainet/>;
    }
}

const style = StyleSheet.create({
    container : {
    
        alignItems : 'center',
        justifyContent : 'center',
    },
})