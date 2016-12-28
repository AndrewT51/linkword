import AnimalData from '../Data/Animals'
import HouseData from '../Data/House'

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
          data={element.dataFile}
        ></Button>
      )
    })
    return (
      <View >
        {this.buttons}
      </View>
    )
  }
}

var details = [

  {
    title: 'Animals',
    info: 'Amazing',
    page: 1,
    dataFile: AnimalData
  },
   {
    title: 'Around the house',
    info: 'Brilliant',
    page: 2,
    dataFile: HouseData
  },
   {
    title: 'Menu C',
    info: 'Creature',
    page: 3,
    dataFile: AnimalData
  },
   {
    title: 'Menu D',
    info: 'Brilliant',
    page: 4,
    dataFile: AnimalData
  },
   {
    title: 'Menu E',
    info: 'Creature',
    page: 5,
    dataFile: AnimalData
  }

]
