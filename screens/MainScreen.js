/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import { Navigation } from 'react-native-navigation';
import FtreScreen from './FtueScreen';
const names = Platform.select({
  android:
    'Krystian Lisowski\n' +
    'and\n'+
    'Sebastian Pulak'
});


export default class MainScreen extends Component {
  state = {
    names: [
      { 'name': 'Play', 'id': 1, 'test': 'GameScreen' },
    ]
  }

  static navigationOptions = {
    title: 'Home',
  };


  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Image
          style={{width: 100, height: 100}}
          source={{uri: 'http://icons.iconarchive.com/icons/icons8/android/512/Measurement-Units-Time-icon.png'}}
        />
        <Text style={styles.logo}>Response Time App </Text>
        <Text style={styles.create}>Created by: </Text>
        <Text style={styles.names}>{names}</Text>
        <ScrollView>
        <View>
          <FtreScreen pagekey={"uniquekey"} title={"categort title"} description={"topic description"}/>
      </View>
          {
            this.state.names.map((item, index) => (
              <View key={item.id}>
                <TouchableOpacity style={styles.button} onPress={() => this.goToScreen(item.test)}>
                <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
  button: {
    marginBottom: 25,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    borderRadius: 40
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 20,
    color: 'white'
  },
  logo: {
    padding: 10,
    color: 'white',
    fontSize: 25,
  },

  create:{
    padding: 10,
    color: 'white',
    fontSize: 15,
  },
  names:{
    padding: 10,
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }

});