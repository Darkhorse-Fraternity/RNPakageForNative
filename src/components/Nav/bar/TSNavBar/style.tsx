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
`;

export const StyledNavbar = styled.View`
  width: 100%;
  background-color: transparent;
  z-index: 100;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: ${props => StatusBarHeight + 44};
  padding-top: ${props => StatusBarHeight};
  /* padding-bottom: 15px;  */
  /* background-color: red; */
`;
// eslint-disable-next-line import/prefer-default-export
export const StyledArrow = styled.TouchableOpacity`
  border-bottom-width: ${props => props.theme.hairlineWidth * 5};
  border-right-width: ${props => props.theme.hairlineWidth * 5};
  border-color: ${props => props.color || 'white'};
  transform: rotate(135deg);
  width: 10;
  height: 10;
  left: 20;
`;

export const StyledTitle = styled.Text`
  color: white;
  font-size: 17;
`;
