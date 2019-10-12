import {Platform, StatusBar} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import Iconfont from '../../../../source/font/Iconfont'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import React from 'react';
// import { strings } from '../../../../locales/i18n';
import {HeaderBackImage} from './HeaderBackButton';

export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOpacity: 0,
    shadowRadius: 0,
    borderBottomWidth: 0,
    shadowOffset: {
      height: 0,
    },
    borderBottomColor: 'white',
    elevation: 0,
    marginTop: Platform.OS === 'ios' || Platform.Version < 20 ? 0 : 0,
    // headerBackTitle:' '
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '300',
  },
  // headerBackImage: require('../../source/img/bar/back-icon.png'),
  headerBackImage: <HeaderBackImage style={{margin: 15}} />,
  headerBackTitle: null,
  gesturesEnabled: true,
};

// export const tabsOptions = {
//   Punch: {
//     iconName: 'check',
//     size: 27,
//     Icon: Feather

//   },
//   Habit: {
//     iconName: 'sun',
//     size: 27,
//     Icon: Feather
//   },
//   Flag: {
//     iconName: 'flag',
//     size: 27,
//     Icon: Feather
//   },
//   Settings: {
//     iconName: 'more-vertical',
//     size: 27,
//     Icon: Feather
//   }
// };
