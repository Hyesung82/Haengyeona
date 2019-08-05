/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import firstpage from './First';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RNKakao from 'react-native-kakao';

const KAKAO_BUTTON_IMG = require('./assets/images/kakao_login_btn.png');

export default class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: ''
    };
  }

  kakaoLogin = async () => {
    try {
      const result = await RNKakao.login();
      this.setState({
        userInfo: JSON.stringify(result)
      });
    } catch (e) {
      this.setState({
        userInfo: `Error: ${e}`
      });
    }

  }

  /* 로그아웃 기능
  kakaoLogout = async () => {
    try {
      const result = await RNKakao.logout();
      this.setState({
        userInfo: JSON.stringify(result)
      });
    } catch (e) {
      this.setState({
        userInfo: `Error: ${e}`
      });
    }
  }
  */

  /* 회원정보 기능
  getUserInfo = async () => {
    try {
      const result = await RNKakao.userInfo();
      this.setState({
        userInfo: JSON.stringify(result)
      });
    } catch (e) {
      this.setState({
        userInfo: `Error: ${e}`
      });
    }
  }
  */

  onPressLogin = () => {
    const { navigation } = this.props
    this.kakaoLogin();

    navigation.navigate("Main");
    
  }

  onPressLogout = () => {
    this.kakaoLogout();
  }

  clear = async () => {
    await this.setState({
      userInfo: ''
    });
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        < Image
          style={{
        resizeMode:'contain'}}
          source={require('./assets/images/logo.png')}/>
      </View>
      <View style={styles.kakaoLogin}>
        
        <TouchableOpacity
          style={{ top: 15, alignItems: 'center' }}
          onPress={ this.onPressLogin }>
          <Image
            resizeMode="contain"
            style={styles.kakaoButton}
            source={KAKAO_BUTTON_IMG}
          />
        </TouchableOpacity>
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header:{
    flex:1,
  },
  content : {
    flex:4,
    backgroundColor:'white'
  },

  kakaoButton: {

  },
  
  kakaoLogin : {
    flex:1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white'
  }

});