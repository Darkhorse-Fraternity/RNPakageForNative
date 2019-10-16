import styled from 'styled-components';
import {SafeAreaView} from 'react-navigation';

export const StyledContent = styled(SafeAreaView)`
  flex: 1;
`;

export const StyledText = styled.Text`
  color:#333333;
  font-size:14;
  width:100;
`;

export const StyledBtn = styled.TouchableOpacity`
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin:20px;
`;

export const StyledTop = styled.ImageBackground`
  width:100%;
`