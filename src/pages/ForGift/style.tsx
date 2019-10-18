import styled from 'styled-components';
import {SafeAreaView} from 'react-navigation';
import {StatusBarHeight} from '../../components/Nav/bar';

export const StyledContent = styled.View`
  flex: 1;
  background-color: #f5f6f9;
`;

export const StyledText = styled.Text`
  color: #333333;
  font-size: 14;
  width: 100;
`;

export const StyledBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const StyledTop = styled.ImageBackground`
  width: 100%;
  height: 197;
  flex-direction: column-reverse;
`;

export const StyledCoinView = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: ${125 - StatusBarHeight};
  margin-left: 15;
  align-items: center;
`;

export const StyledCoinText = styled.Text`
  color: white;
  font-size: 16;
`;

export const StyledCoinArrow = styled.View`
  border-bottom-width: ${props => props.theme.hairlineWidth * 5};
  border-right-width: ${props => props.theme.hairlineWidth * 5};
  border-color: ${props => props.color || 'white'};
  transform: rotate(-45deg);
  width: 6;
  height: 6;
  left: 5;
`;
