/** @format */

import { Navigation } from "react-native-navigation";
import MainScreen from './screens/MainScreen';
import GameScreen from './screens/GameScreen';
import SideMenu from './screens/SideMenu';
import { Dimensions }   from 'react-native';

Navigation.registerComponent('MainScreen', () => MainScreen);
Navigation.registerComponent('GameScreen', () => GameScreen);
Navigation.registerComponent('SideMenu', () => SideMenu);



const { width } = Dimensions.get('window');
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: true,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'white',
        alignment: 'center'
      },
      background: {
        color: 'transparent'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'SideMenu',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
              {
                component: {
                  name: 'MainScreen',
                }
              },
            ]
          }
        }
      },
    }
  });
});