
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import {OtherRoute} from './OtherRoute'


export class Button extends Component{
  _handleNextPress(){
    this.props.navigator.push(this.nextRoute)
    console.log(this.props.info)
  }
  render(){
    this.nextRoute = {
      component: OtherRoute,
      title: this.props.name,
      data: this.props.data
    }
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this._handleNextPress.bind(this)}
        underlayColor='blue'
      >
        <Text style={styles.buttonText}>{this.props.name}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 350,
    height: 35,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    margin: 3
  },
  buttonText: {
    fontSize: 25
  }
});