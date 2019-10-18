import {Dimensions, StyleSheet} from 'react-native';
// import baseStyled, {ReactNativeStyledInterface} from 'styled-components/native';
const {height, width} = Dimensions.get('window');

export const theme = {
  width,
  height,
  widthProportion: width / 375, // 用于高度根据长度进行缩放
  hairlineWidth: StyleSheet.hairlineWidth,
  hairlineColor: 'rgb(200,200,200)',
};
export type ThemeInterface = typeof theme;
// export default baseStyled as ReactNativeStyledInterface<Theme>;
declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
