import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  width,
  height,
  widthProportion: width / 375, // 用于高度根据长度进行缩放
  hairlineWidth: StyleSheet.hairlineWidth,
  hairlineColor: 'rgb(200,200,200)',
};
