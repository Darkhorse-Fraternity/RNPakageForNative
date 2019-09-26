import styled from 'styled-components';
import {Animated} from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const StyledArrow = styled(Animated.View)`
  border-bottom-width: ${props => props.theme.hairlineWidth * 5};
  border-right-width: ${props => props.theme.hairlineWidth * 5};
  border-color: ${props => props.color || 'black'};
  transform: rotate(135deg);
  width: 10;
  height: 10;
`;

export const StyledArrow2 = styled(Animated.View)`
  border-bottom-width: ${props => props.theme.hairlineWidth * 2};
  border-right-width: ${props => props.theme.hairlineWidth * 2};
  border-color: ${props => props.color || 'black'};
  transform: rotate(135deg);
  width: 10;
  height: 10;
`;

export const StyledButton = styled.TouchableOpacity`
  margin-left: 20;
`;
