import styled from 'styled-components/native';
import {StatusBarHeight} from '../../../components/Nav/bar';
import LinearGradient from 'react-native-linear-gradient';



export const StyledContent1 = styled.View`
  /* width: 100%-30px; */
  margin: 15px 15px 0px 15px;
  background-color: white;
  border-radius: 5px;
`;
export const StyledContent2 = styled.View`
  flex-direction: row;
  height: 65;
  /* width: 100%-30px; */
  margin: 0px 21px 0px 21px;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`;
export const StyledContent3 = styled.View`
  flex-direction: row;
  height: 65;
  background-color: white;
  align-items: center;
`;
export const StyledLine = styled.View`
  width: 100%;
  height: 1;
  background-color: 'rgb(236,235,235)';
`;
export const StyledList = styled.View`
  width: 100%;
  height: 227;
`;
export const StyledItem = styled.View`
  flex-direction: column;
  height: 75;
  /* width: 100%-30px; */
  margin: 0px 21px 0px 21px;
  background-color: white;
`;
export const StyledItemTop = styled.View`
  flex-direction: row;
  height: 74;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`;
export const StyledItemLeft = styled.View`
  flex-direction: column;
  height: 75;
  /* width: 100%-30px; */
  padding: 18px 0px 18px 0px;
  background-color: white;
  justify-content: space-between;
`;
export const StyledItemProgress = styled.View`
  flex-direction: row;
  /* width: 100%-30px; */
  background-color: white;
`;
export const StyledTitle = styled.Text`
  color: 'rgb(33,33,33)';
  font-size: 18;
  font-weight: bold;
`;
export const StyledTitle1 = styled.Text`
  color: 'rgb(132,132,148)';
  font-size: 12;
`;
export const StyledTaskName = styled.Text`
  color: 'rgb(33,33,33)';
  font-size: 15;
`;
export const StyledTaskTip = styled.Text`
  color: 'rgb(254,161,66)';
  font-size: 12;
  margin-right: 40px;
`;

export const StyledProgressText = styled.Text`
  color: 'rgb(153,153,153)';
  font-size: 12;
  margin-left: 9px;
`;

export const StyledSubmit = styled(LinearGradient)`
  align-items: center;
  width: ${props => (props.theme.width - 60) / 4};
  height: 38;
  border-radius: 19;
  justify-content: center;
`;

export const StyledSubmitText = styled.Text`
  color: ${props => props.color || '#ffffff'};
  font-size: 12;
`;

export const StyledArrow = styled.View`
  border-bottom-width: ${props => props.theme.hairlineWidth * 2};
  border-right-width: ${props => props.theme.hairlineWidth * 2};
  border-color: ${props => props.color || 'black'};
  transform: rotate(-45deg);
  width: 6;
  height: 6;
  justify-content: flex-end;
`;
export const StyledTop = styled.ImageBackground`
  width: 6;
  height: 10;
  margin-left: 6;
  flex-direction: column-reverse;
`;
