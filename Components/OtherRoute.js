// import AnimalData from '../Data/Animals'
import { Button } from './Button';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export class OtherRoute extends Component{
  render(){
    var data = this.props.route.data;

    this.content = function(){
      return data[0].hasOwnProperty('grammar') ? <Text style={styles.welcome}>{data[0].grammar} </Text> : (
          <Text style={styles.welcome}>The Spanish word for {data[0].en} is {data[0].sp} {data[0].desc}</Text>
      )
    }
    console.log(this.props.route.data)
    return (
      <View style={styles.container}
        onStartShouldSetResponder = {function(evt){
          console.log(evt.locationX)
          return true
        }}
        onResponderGrant = {function(){console.log('aaaa')}}
        onResponderMove = {function(){console.log('boooooo')}}
      >
        {this.content()}
      </View>
    )
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