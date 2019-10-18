import styled from 'styled-components';
//import { StatusBarHeight } from '../../../components/Nav/bar';
//import LinearGradient from 'react-native-linear-gradient';


export const mainView = styled.View`
  height: 270;
  /* width: 100%-30px; */
  margin: -81px 15px 0px 15px;
  background-color: white;
  border-radius: 5px;
`;
export const titleView = styled.View`
  flex-direction:row;
  height: 16;
  margin: 21px 0px 0px 17px;
  background-color: white;
`;
export const titleBlack = styled.Text`
  color: 'rgb(33,33,33)';
  font-size: 14;
`;
export const titleRed = styled.Text`
  color: 'rgb(256,57,48)';
  font-size: 14;
`;

//圆圈style

export const signCircleBoxListView = styled.View`
  flex-direction:row;
  height: 50;
  margin: 20px 0 0px 10px;
  background-color: white;
  justify-content: space-around;
`;

export const signCircleBox = styled.View`
  align-items: center;
  justify-content: center;
  height: 50;
  width: 35;
  background-color: white;
`;

export const signCircleIn = styled.View`
  border-radius: 13;
  align-items: center;
  justify-content: center;
  height: 26;
  width: 26;
  background-color: #fee7d8;
`;
export const signCircleOut = styled.View`
  border-radius: 17.5;
  align-items: center;
  justify-content: center;
  height: 35;
  width: 35;
  background-color: #FFF1EB;
`;
export const titleBC6226 = styled.Text`
  color: #BC6226;
  font-size: 10;
  font-weight: bold;
`;

export const titleEBB795 = styled.Text`
  margin-top:5;
  color: #EBB795;
  font-size: 10;
`;

// export const StyledSubmit = styled(LinearGradient)`
//   align-items: center;
//   width: ${props => (props.theme.width - 60) / 2};
//   height: 38;
//   border-radius: 19;
//   justify-content: center;
// `;

export const StyledSubmitText = styled.Text`
  color: ${props => props.color || '#ffffff'};
  font-size: 14;
  font-weight: bold;
`;
