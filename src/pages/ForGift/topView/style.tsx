import styled from 'styled-components';
import {StatusBarHeight} from '../../../components/Nav/bar';
import LinearGradient from 'react-native-linear-gradient';


export const StyledContent1 = styled.View`
  height: 270;
  /* width: 100%-30px; */
  margin: ${StatusBarHeight - 110}px 15px 0px 15px;
  background-color: white;
  border-radius: 5px;
`;
export const StyledContent2 = styled.View`
  flex-direction: row;
  height: 13;
  /* width: 100%-30px; */
  margin: 21px 0px 15px 17px;
  background-color: white;
`;
export const StyledTitle = styled.Text`
  color: 'rgb(33,33,33)';
  font-size: 14;
`;
export const StyledTitle1 = styled.Text`
  color: 'rgb(256,57,48)';
  font-size: 14;
`;

export const StyledSubmit = styled(LinearGradient)`
  align-items: center;
  width: ${props => (props.theme.width - 60) / 2};
  height: 38;
  border-radius: 19;
  justify-content: center;
`;

export const StyledSubmitText = styled.Text`
  color: ${props => props.color || '#ffffff'};
  font-size: 14;
  font-weight: bold;
`;
