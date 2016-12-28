/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Button } from './Components/Button'
import { App } from './Components/App'
import { ButtonGroup } from './Components/ButtonGroup'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class MyReactNativeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'Initial Scene'
        }} 
        style={{flex: 1}}
      />
    );
  }
}


AppRegistry.registerComponent('MyReactNativeProject', () => MyReactNativeProject);
