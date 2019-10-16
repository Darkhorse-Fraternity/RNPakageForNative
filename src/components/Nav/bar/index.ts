import {NativeModules, Platform, StatusBar} from 'react-native';

const {StatusBarManager} = NativeModules;

// iOS Only
let StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

if (Platform.OS === 'ios') {
  StatusBarManager.getHeight(res => {
    StatusBarHeight = res.height;
  });
}

export {StatusBarHeight};
