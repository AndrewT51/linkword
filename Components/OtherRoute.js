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
    console.log(this.props.route.data)
    return (
      <View>
        <Text>Success</Text>
      </View>
    )
  }
}