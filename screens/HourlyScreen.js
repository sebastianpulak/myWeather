/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, Image, ScrollView, Dimensions,TextInput} from 'react-native';
import { Navigation } from 'react-native-navigation';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
var moment = require('moment');


export default class HourlyScreen extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      inputCity: 'London',
      cityName: 'London',
      iconUrl: 'http://openweathermap.org/img/w/'
    }
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
    this.setState({
      isLoading: true,
      cityName: this.state.inputCity
    })
    this.callApi();
    
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

    if(this.state.dataSource.cod==200){
    let rowsOfTiles = [];
    let row = [];
    for (let i = 0; i < this.state.dataSource.list.length; i++) {
      row.push(
        <View key={i}>
          <TouchableOpacity style={styles.tile}>
            <Text style={styles.tileTextName}>{moment.unix(this.state.dataSource.list[i].dt).format("DD.MM.YYYY HH:mm")}</Text>
            <Text style={styles.tileTemp}> {Math.round(this.state.dataSource.list[i].main.temp)}℃
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
        <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.buttonViewContainer}
          placeholder="Type in the city you want to check!"
          onChangeText={(inputCity) => this.setState({inputCity})}
        />

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text style={styles.textViewContainer}>Search</Text>
        </TouchableOpacity>
        <Text style={styles.cityText} > {this.state.cityName} </Text>
        {rowsOfTiles} 
      </ScrollView>  
    );
} else {
  return (
    <View style={styles.container}>
  <TextInput
      style={styles.buttonViewContainer}
      placeholder="Type in the city you want to check!"
      onChangeText={(inputCity) => this.setState({inputCity})}
    />

    <TouchableOpacity style={styles.button} onPress={this.onPress}>
    <Text style={styles.textViewContainer}>Search</Text>
    </TouchableOpacity>

    <Text style={styles.textViewContainer}>Incorrect city name</Text>

  </View>
);
}
  } 
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
      },
      tile: {
        width: width,
        height: 100,
        margin: 2,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 0.3,
        borderColor: '#838c99',
        
      },
      rowOfTiles: {
        flex: 1,
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
      tileTemp: {
        fontSize: 30,
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
        
      },
      button: {
        marginBottom: 25,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        borderRadius: 40
      },
      button2: {
        marginBottom: 25,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        justifyContent: 'center',
        borderRadius: 40
      },
       
      textViewContainer: {
       textAlignVertical:'center', 
       padding:10,
       fontSize: 20,
       color: '#053f60',
      },
    
      cityText: {
        textAlignVertical:'center', 
        padding:10,
        fontSize: 40,
        color: '#053f60',
       },
      
      buttonViewContainer: {
       marginBottom: 25,
       textAlignVertical:'center', 
       padding:10,
       fontSize: 20,
       borderRadius: 10,
       backgroundColor: '#2196F3',
        
       }
});