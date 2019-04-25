/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import { Navigation } from 'react-native-navigation';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var moment = require('moment');


export default class HourlyScreen extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      iconUrl: 'http://openweathermap.org/img/w/',
      dateString: moment.unix(1556226000).format("MM/DD/YYYY")
    }
  }
   
  login() {    
    this.props.changeState;
  }
   
  componentDidMount() {
   this.callApi();
  }

  callApi(){
    return fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ this.state.inputCity + '&units=metric&appid=5cacdcffc387b9b5dd7ec2505797e494')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onPress = () => {
    this.callApi();
    this.setState({
      cityName: this.state.inputCity
    })
  }

  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
   
   
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

    let rowsOfTiles = [];
    let row = [];
    for (let i = 0; i < this.state.dataSource.list.length; i++) {
      row.push(
        <View key={i}>
          <TouchableOpacity style={styles.tile}>
            <Text style={styles.tileTextName}>{this.state.dataSource.list[i].dt_txt}      {Math.round(this.state.dataSource.list[i].main.temp)}℃ 
            <Image style={{height: 40, width: 40}} source={{uri: this.state.iconUrl + this.state.dataSource.list[i].weather[0].icon+'.png'}}></Image></Text>
          </TouchableOpacity> 
        </View>
      );
        rowsOfTiles.push(
          <View style={styles.rowOfTiles} key={i}>
            {row}
          </View>
        ); 
        row = [];
      if (i === this.state.dataSource.list.length - 1) {
        rowsOfTiles.push(
          <View style={styles.rowOfTiles} key={i}>
            {row}
          </View>  
        )
      } 
    }


    return (
        <ScrollView style={styles.container}>
        <Text style={styles.tileTextName}>{this.state.cityName}</Text>
        {rowsOfTiles} 
      </ScrollView>  
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      tile: {
        width: width,
        height: 100,
        margin: 2,
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#838c99',
        
      },
      rowOfTiles: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
      tileTextName: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10
      },
      tileIconName: { 
        textAlign: 'center',
        margin: 10
      },
      tileTextPlace: {
        fontSize: 20,
        textAlign: 'center'
      },
      tileTextPlus: {
        fontSize: 96,
        textAlign: 'center',
        color:"#4F8EF7"
        
      },
      tileTextId: { 
        fontSize: 20,
        textAlign: 'center'
      },
      loading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: 20,
        
      }
});