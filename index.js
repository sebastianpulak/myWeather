/** @format */

import { Navigation } from "react-native-navigation";
import MainScreen from './screens/MainScreen';
import SideMenu from './screens/SideMenu';
import TestScreen from './screens/TestScreen';
import HourlyScreen from './screens/HourlyScreen';

import { Dimensions }   from 'react-native';

Navigation.registerComponent('MainScreen', () => MainScreen);
Navigation.registerComponent('SideMenu', () => SideMenu);
Navigation.registerComponent('TestScreen', () => TestScreen);
Navigation.registerComponent('HourlyScreen', () => HourlyScreen);



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