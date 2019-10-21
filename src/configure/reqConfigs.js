/* @flow */
import {NativeModules} from 'react-native';
import {Platform} from 'react-native';
const {Tool} = NativeModules;
// const {getUerInfo} = Tool;

// import DeviceInfo from 'react-native-device-info'
import DeviceInfo from 'react-native-device-info';
// import { appChannel } from '../../helps/util';

export const apiHost = !__DEV__
  ? /* release */ 'tuku-wap.m.jia.com/'
  : // /* release */ ? 'wap.zmzx.qa.qeeka.com'
    // /* debug */ : '192.168.254.80:80';
    /* debug */ 'wap.zmzx.qa.qeeka.com/';

export let apiHostNative = '';

let config = {};
export const setConfigNative = nConfig => {
  config = nConfig;
  if (Platform.OS !== 'ios') {
    const networkConfig = JSON.parse(config.networkConfig);
    const headerConfig = JSON.parse(networkConfig.headerConfig);
    config.networkConfig = networkConfig;
    config.networkConfig.headerConfig = headerConfig;
  }
  apiHostNative = config.networkConfig.host;
};

let trackingId;
export const setTrackingId = id => {
  trackingId = id;
};

export const getTrackingId = () => {
  const id = trackingId;
  return id;
};

export function httpHeaders() {
  // const appVersion = DeviceInfo.getVersion();
  // const uniqueId = DeviceInfo.getUniqueID();
  // const user = getUerInfo();
  // const header = {
  //   'Content-Type': 'application/json; charset=utf-8',
  //   'app-version': appVersion,
  //   'source-from': 'zmzx-app',
  //   'device-id': uniqueId,
  //   platform: 'ios',
  //   sign: user.sign,
  //   channel: 'AppStore',

  //   // appChannel
  // };
  // config.headerConfig
  // console.log('header', header);

  // console.log('LeanCloud_APP_Session', LeanCloud_APP_Session);

  return config.networkConfig.headerConfig;
}
