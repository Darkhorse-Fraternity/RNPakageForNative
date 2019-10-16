import styled from 'styled-components';

// import {SafeAreaView} from 'react-navigation';

export const StyledContent = styled.ImageBackground`
  flex: 1;
  background:rgba(255,91,91,1);
`;

export const StyledText = styled.Text`
  color:#333333;
  font-size:17;
  width:100;
`;

export const StyledBtn = styled.TouchableOpacity`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:15px;
`;

export const StyledArrow = styled.View`
  border-bottom-width: ${props => props.theme.hairlineWidth * 2};
  border-right-width: ${props => props.theme.hairlineWidth * 2};
  border-color: ${props => props.color || 'black'};
  transform: rotate(-45deg);
  width: 10;
  height: 10;
`;
export const TopImage = styled.Image`
  left: 41;
  width: 312;
  height: 120;
`;
export const BoardImage = styled.ImageBackground`
  left: 15.5;
  width: 345;
  height: 408;
`;
export const Line = styled.View`
  left:52.5;
  top:28;
  width:90;
  height:1;
  background:rgba(77,188,252,1);
`;
export const Number = styled.Text`
  left:59.5;
  top:10.5;
  width:14px;
  height:35px;
  font-size:26;
  font-weight:bold;
  color:rgba(255,251,154,1);
  line-height:33px;
`;
export const Sum = styled.Text`
  left:64.5;
  top:8.5;
  width:33px;
  height:31px;
  font-size:18px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:33px;
`;
export const Question = styled.Text`
  left:19.5;
  width:302px;
  height:97px;
  font-size:20px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:60px;
`;
