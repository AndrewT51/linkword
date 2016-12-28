import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';


export class Button extends Component{
  render(){
    this.myfunction = function(){
      console.log(this.props.info)
    }
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.myfunction.bind(this)}
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