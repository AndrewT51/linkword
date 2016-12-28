import { ButtonGroup } from './ButtonGroup'
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export class App extends Component {
  static propTypes = {
      // title: PropTypes.string.isRequired,
      navigator: PropTypes.object.isRequired,
    }

    // _onForward = () => {
    //   this.props.navigator.push({
    //     title: 'Scene ',
    //   });
    // }
  render() {
    return (   
      <View style={styles.container}>
        <ButtonGroup 
          navigator={this.props.navigator}
        ></ButtonGroup>
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