import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class GameScreen extends Component<Props>{

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      //timer: null,
      counter: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }, 1500);
    setTimeout(() => {
      this.start();
    },1501);
  }

  componentWillUnmount(){
    clearInterval(this.state.timer);
  }

start() {
  var self = this;
  if(this.state.isHidden === false){
  let timer = setInterval(() => {
    this.setState({
      counter: this.state.counter + 10
    })
  }, 1);
  this.setState({timer});
}
// else{
//   clearInterval();
//   this.setState({
//     counter: 0
//   })
// }
}


  _onPressButton = () => {
    clearInterval(this.state.timer);
    this.setState({
      isHidden: !this.state.isHidden,
    });
    setTimeout(() => {
      this.setState({
        isHidden: !this.state.isHidden,
        counter: 0
      })
      this.start();
  }, 5000);
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
            <Text style={styles.buttonText}>Click me</Text>
          </View>
        </TouchableOpacity>
        
        }
        <Text style={styles.reactionText}>Your reaction time: {this.state.counter}ms</Text>
        
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
