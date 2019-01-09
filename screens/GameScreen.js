import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GameScreen extends Component<Props>{

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      timer: null,
      counter: 0
    }
  }

  componentDidMount() {
    this.start();
    setTimeout(() => {
      this.setState({
        isHidden: !this.state.isHidden
      })
  }, 1500);
}
start() {
  var self = this;
  let timer = setInterval(() => {
    this.setState({
      counter: this.state.counter + 1
    })
      var num = Number(this.state.miliseconds) + 1
          
  }, 0);
  this.setState({timer});
}


  _onPressButton = () => {
   
    this.setState({
      isHidden: !this.state.isHidden,
    });
    setTimeout(() => {
      this.setState({
        isHidden: !this.state.isHidden,
      })
  }, 1000);
  }



  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isHidden ? 
          <View></View>
          :
          <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableOpacity> 
        }
        <Text>Your reaction time: {this.state.counter}ms</Text>
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
    width: 150,
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
