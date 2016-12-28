/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Button } from './Components/Button'
import { ButtonGroup } from './Components/ButtonGroup'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class MyReactNativeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonGroup></ButtonGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MyReactNativeProject', () => MyReactNativeProject);
