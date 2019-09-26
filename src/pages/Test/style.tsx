import styled from 'styled-components';

// import {SafeAreaView} from 'react-navigation';

export const StyledContent = styled.View`
  flex: 1;
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
