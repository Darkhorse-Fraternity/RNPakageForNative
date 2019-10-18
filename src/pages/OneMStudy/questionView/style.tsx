import styled from 'styled-components';

export const TopImage = styled.Image`
  align-self: center;
  left:10;
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
export const Question = styled.Text`
  left:19.5;
  width:302px;
  height:97px;
  font-size:20px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:30px;
`;