import styled from 'styled-components';

// import {SafeAreaView} from 'react-navigation';

export const Background = styled.ImageBackground`
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
  margin-left: 41;
`;
export const TopImage1 = styled.ImageBackground`
  align-self: center;
  width:352.5;
  height:188.5;
`;
export const BoardImage = styled.ImageBackground`
  align-self: center;
  width:345;
  height:408;
`;
export const Line = styled.View`
  left:52.5;
  margin-top:28;
  width:90;
  height:1;
  background:rgba(77,188,252,1);
`;
export const Line1 = styled.View`
  align-self: center;
  margin-right:10;  
  margin-left:10;
  width:40px;
  height:1px;
  background:rgba(255,255,255,1);
`;
export const Number = styled.Text`
  margin-left:65.5;
  margin-top:10.5;
  width:14px;
  height:35px;
  font-size:24;
  font-weight:bold;
  color:rgba(255,251,154,1);
  line-height:33px;
`;
export const Remind = styled.Text`
  font-size:16px;
  font-weight:bold;
  color:rgba(255,255,255,1);
`;
export const Sum = styled.Text`
  margin-left:5.5;
  margin-top:10.5;
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
  line-height:30px;
`;
export const OptionBtn = styled.TouchableHighlight`
  align-self: center;
  width:291.5px;
  height:55px;
  background-color:rgba(255,251,154,1);
  border:5px solid rgba(67,67,67,1);
  border-radius:55px; 
`;
export const OptionTx = styled.Text`
  margin-top:6;
  align-self:center;
  font-size:20px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:30px;
`;
export const Percent = styled.Text`
  align-self:center;
  margin-top:63.5;
  font-size:18px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:27px;
`;
export const Power = styled.Text`
  margin-top:16;
  font-size:18px;
  font-weight:bold;
  color:rgba(51,51,51,1);
  line-height:25px;
`;
export const Star = styled.Image`
  margin-top:19;
  width:22.5;
  height:20;
`;
export const Suggest = styled.Text`
  margin-top:20;
  align-self:center;
  font-size:14px;
  font-weight:500;
  color:rgba(132,132,148,1);
  line-height:21px;
`;