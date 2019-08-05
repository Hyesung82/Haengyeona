import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import NaverMapViewProps from 'react-native-nmap';
export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='md-home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={StyleSheet.container}>
            <NaverMapViewProps 
            style={{width:'100%', height:'100%'}}
            onCameraChange={{latitue:129.103138, longitude:35.134248, zoom:1}}>
                
            </NaverMapViewProps>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }
});