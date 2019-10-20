import {Dimensions, StyleSheet} from 'react-native';
import {getStatusBarHeight} from '../src/components/Nav/bar';
// import baseStyled, {ReactNativeStyledInterface} from 'styled-components/native';
const {height, width} = Dimensions.get('window');

const theme = {
  width,
  height,
  widthProportion: width / 375, // 用于高度根据长度进行缩放
  hairlineWidth: StyleSheet.hairlineWidth,
  hairlineColor: 'rgb(200,200,200)',
  getStatusBarHeight: getStatusBarHeight,
};

export {theme};

export type ThemeInterface = typeof theme;
// export default baseStyled as ReactNativeStyledInterface<Theme>;
declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
