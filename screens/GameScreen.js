import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GameScreen extends Component{

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  componentDidMount() {
      setTimeout(() => {
    }, 10000);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Here</Text>
          </View>
        </TouchableOpacity> 
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBF00',
  },
  button: {
    marginBottom: 25,
    width: 100,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    borderRadius: 40
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
