/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LinearGradient from 'react-native-linear-gradient';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Drawer from 'react-native-drawer';

class SideMenu extends Component {
    state = {
        names: [
          { 'name': 'Home', 'id': 1, 'test': 'MainScreen' },
          { 'name': 'Test', 'id': 2, 'test': 'TestScreen' },
        ]
      }
    
      static navigationOptions = {
        title: 'Home',
      };

      closeControlPanel = () => {
        this._drawer.close()
      };
    
      goToScreen = (screenName) => {
        Navigation.push('MAIN_STACK', {
          component: {
            name: screenName
          }
        })
      }
    
      render() {
        return (
          <Drawer ref='myDrawer'>
          <View style={styles.welcome}>
          <ScrollView>  
              {
                this.state.names.map((item, index) => (
                  <View key={item.id} style={styles.button}>
                    <TouchableOpacity style={styles.button} onPress={() => {this.goToScreen(item.test), this.refs.myDrawer.close()}}>
                    <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))
              }
          </ScrollView>
          
          </View>
          </Drawer>
        )
      }
    }

export default SideMenu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  
    },
    welcome: {
      borderColor: '#000000',
      borderWidth: 1,
    },
    result: {
      height: 200,
      width: '95%'
    },
    button: {
      marginBottom: 25,
      width: 100,
      alignItems: 'center',
      backgroundColor: '#2196F3',
      justifyContent: 'center',
      borderRadius: 20
    },
    text: {
      padding: 20,
      color: 'white'
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 200,
      margin: 6,
      borderColor: '#2a4944',
      borderWidth: 2,
      backgroundColor: '#FFFFFF'
    },
    text: {
      textAlign: 'center',
      fontSize: 20
    }
  });