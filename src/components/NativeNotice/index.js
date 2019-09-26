import {
  NativeModules,
  NativeEventEmitter,
  DeviceEventEmitter,
} from 'react-native';
const {Notice} = NativeModules;
import {Platform} from 'react-native';

const RouterBridgeEmitter = new NativeEventEmitter(Notice);

const emitter =
  Platform.OS === 'ios' ? RouterBridgeEmitter : DeviceEventEmitter;

export default emitter;

export const NativeLocationChange = 'NativeLocationChange';
