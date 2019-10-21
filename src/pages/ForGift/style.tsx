import styled from 'styled-components/native';
import {SafeAreaView} from 'react-navigation';
import {StatusBarHeight} from '../../components/Nav/bar';
import Button from '../../components/Button';

export const StyledContent = styled.View`
  flex: 1;
  background-color: #f5f6f9;
`;

export const StyledInner = styled.ScrollView`
  flex: 1;
`;

export const StyledText = styled.Text`
  color: #333333;
  font-size: 14;
  width: 100;
`;

export const StyledTop = styled.ImageBackground`
  width: 100%;
  height: 197;
  flex-direction: column-reverse;
`;

export const StyledCoinView = styled(Button)`
  flex-direction: row;
  margin-bottom: ${props => 125 - props.theme.getStatusBarHeight()};
  margin-left: 15;
  align-items: center;
  max-width: 150;
`;

export const StyledCoinText = styled.Text`
  color: white;
  font-size: 16;
`;

interface StyledCoinArrowProps {
  color?: string;
}
export const StyledCoinArrow = styled.View<StyledCoinArrowProps>`
  border-bottom-width: ${props => props.theme.hairlineWidth * 5};
  border-right-width: ${props => props.theme.hairlineWidth * 5};
  border-color: ${props => props.color || 'white'};
  transform: rotate(-45deg);
  width: 6;
  height: 6;
  left: 5;
`;
