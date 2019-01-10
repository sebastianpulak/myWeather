import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
var moment = require('moment');

export default class GameScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      isHidden: true,
      beginTime: moment().valueOf(),
      endTime: moment().valueOf(),
      tempTime: moment().valueOf()
    }
  }


  componentDidMount() {
    setTimeout(() => {
      this.start();
      this.setState({
        isHidden: !this.state.isHidden
      })
    }, 1500);
    let timer = setInterval(() => {
      this.setState({
        counter: this.state.endTime - this.state.beginTime,
        endTime: moment().valueOf()
      })
    }, 10);
    this.setState({timer});
  }

    componentWillUnmount(){
      clearTimeout(this.state.temp);
      clearInterval(this.state.timer);
    }
  
  start() {
    let appearTime = moment().valueOf();
    this.setState({
             beginTime: appearTime
         })
  }
  
  update() {
    let timer = setInterval(() => {
      this.setState({
        counter: this.state.endTime - this.state.beginTime,
        tempTime: endTime,
        endTime: moment().valueOf()
      })
    }, 10);
    this.setState({timer});
  }
  
  
    _onPressButton = () => {
      let clickTime = moment().valueOf();
      this.setState({
        isHidden: !this.state.isHidden,
        tempTime: clickTime,
        counter: 0
      });
      let temp = setTimeout(() => {
        this.setState({
          isHidden: !this.state.isHidden,
        })
        this.update();
        this.start();
        clearInterval(this.state.timer);
    }, 5000);
    this.setState({temp})
    }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.isHidden ? 
          <View style={styles.button}>
          </View>
          :
          <View style={styles.button}>
          <TouchableOpacity onPress={this._onPressButton}>
            <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        
        </View>   
        }
        {
          this.state.isHidden ? 
          <Text style={styles.reactionText}>Your reaction time: {this.state.tempTime - this.state.beginTime}ms </Text>
          :
          <Text style={styles.reactionText}>Your reaction time: {this.state.counter}ms </Text>
        }
        
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
    fontSize: 20,
    color: 'white'
  },
  reactionText: {
    fontSize: 20
  }
});
