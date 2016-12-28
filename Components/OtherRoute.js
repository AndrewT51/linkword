// import AnimalData from '../Data/Animals'
import { Button } from './Button';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper'

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
    this.allSlides = function(){
      return data.map(function(element){
        <View style={styles.slide1}>
          {this.content.bind(this)}
        </View>
      })
    }
    console.log(this.props.route.data)
    return (
      <Swiper style={styles.wrapper}
        showsPagination={false}
        horizontal={false}
        // showsButtons={true}
      >
        <View style={styles.slide1}>
          {this.allSlides.bind(this)}
        </View>
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({

  wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});



// <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
        
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
        
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>