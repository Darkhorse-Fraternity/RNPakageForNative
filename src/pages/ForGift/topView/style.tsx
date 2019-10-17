import styled from 'styled-components';

export const mainView = styled.View`
  height: 270;
  /* width: 100%-30px; */
  margin: -82px 15px 0px 15px;
  background-color: white;
  border-radius: 5px;
`;
export const titleView = styled.View`
  flex-direction:row;
  height: 16;
  /* width: 100%-30px; */
  margin: 21px 0px 15px 17px;
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


export const signCircleBox = styled.View`
  align-items: center;
  justify-content: center;
  height: 35;
  width: 50;
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