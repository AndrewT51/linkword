import { Button } from './Button';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export class ButtonGroup extends Component{
  render(){
    this.buttons = details.map((element,index)=> {
      return (
        <Button 
          navigator={this.props.navigator}
          key={index}
          name={element.title}
          info ={element.info}
        ></Button>
      )
    })
    return (
      <View>
        {this.buttons}
      </View>
    )
  }
}

var details = [
  {
    title: 'Menu A',
    info: 'Amazing',
    page: 1
  },
   {
    title: 'Menu B',
    info: 'Brilliant',
    page: 2
  },
   {
    title: 'Menu C',
    info: 'Creature',
    page: 3 
  },
   {
    title: 'Menu D',
    info: 'Brilliant',
    page: 4
  },
   {
    title: 'Menu E',
    info: 'Creature',
    page: 5
  }

]
