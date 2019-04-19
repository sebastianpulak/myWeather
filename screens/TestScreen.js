/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry, StyleSheet, ActivityIndicator, TouchableOpacity, Text, View, Platform, TextInput} from 'react-native';
import { green } from 'ansi-colors';





export default class TestScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      inputCity: 'London',
    }
  }
   
   
  componentDidMount() {
   this.callApi();
  }

  callApi(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q='+ this.state.inputCity + '&units=metric&appid=5cacdcffc387b9b5dd7ec2505797e494')
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
   
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
   
          height: .5,
          width: "100%",
          backgroundColor: "#000",
   
        }}
      />
    );
  }

  onPress = () => {
    this.callApi();
  }
   
   
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    
    if(this.state.dataSource.cod===200){
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

        <Text style={styles.textViewContainer} > City: {this.state.dataSource.name}</Text>
        <Text style={styles.textViewContainer} > Temperature: {Math.round(this.state.dataSource.main.temp)}℃</Text>
        <Text style={styles.textViewContainer} > Humidity: {this.state.dataSource.main.humidity}%</Text>
        <Text style={styles.textViewContainer} > Pressure: {this.state.dataSource.main.pressure} hPa</Text>
        <Text style={styles.textViewContainer} > Wind speed: {this.state.dataSource.wind.speed} km/h</Text>
        <Text style={styles.textViewContainer} > Cloudiness: {this.state.dataSource.clouds.all}%</Text>
      </View>
    );
    }
    else {
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
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9bca6',
  },

  button: {
    marginBottom: 25,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    borderRadius: 40
  },
   
  textViewContainer: {
   textAlignVertical:'center', 
   padding:10,
   fontSize: 25,
   color: '#fff',
   
   
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

  AppRegistry.registerComponent('TestScreen', () => TestScreen);