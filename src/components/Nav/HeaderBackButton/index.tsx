/**
 * Created by lintong on 2018/9/12.
 * @flow
 */

import React, {Component, useMemo, useCallback} from 'react';
// import {} from ''
// import { default as BaseIcon } from 'react-native-vector-icons/Ionicons';
import {StyledArrow, StyledButton, StyledArrow2} from './style';
import {NativeModules,TouchableOpacityProps} from 'react-native';
const {RouterBridge} = NativeModules;
// export default class HeaderBackButton extends Component {
//   shouldComponentUpdate(nextProps) {
//     return nextProps.color !== this.props.color;
//   }
//   render() {
//     const {color} = this.props;
//     return (
//       <StyledButton
//         hitSlop={{top: 20, left: 20, bottom: 20, right: 40}}
//         {...this.props}>
//         <StyledArrow color={color} />
//       </StyledButton>
//     );
//   }
// }

export const HeaderBackImage = StyledArrow;
export const HeaderBackImage2 = StyledArrow2;


interface PropType extends TouchableOpacityProps{
   color:string|number,
}

export const BackButton = (props:PropType) => {
  const {color, ...other} = props;
  return (
    <StyledButton
      hitSlop={{top: 20, left: 20, bottom: 20, right: 40}}
      {...other}>
      <StyledArrow color={color} />
    </StyledButton>
  );
};

export const NativeBackButton = (props:PropType) => {
  return useCallback(
    <BackButton
      {...props}
      onPress={() => {
        RouterBridge.pop(true);
      }}
    />,
    [props],
  );
};
