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
    this.buttons = details.map((element)=> {
      return (
        <Button 
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
    info: 'Amazing'
  },
   {
    title: 'Menu B',
    info: 'Brilliant'
  },
   {
    title: 'Menu C',
    info: 'Creature'
  },
   {
    title: 'Menu D',
    info: 'Brilliant'
  },
   {
    title: 'Menu E',
    info: 'Creature'
  }

]
