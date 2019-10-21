import styled from 'styled-components/native';
import Button from '../../components/Button';
// import {SafeAreaView} from 'react-navigation';

export const StyledContent = styled.View`
  flex: 1;
`;

export const StyledText = styled.Text`
  color: #333333;
  font-size: 17;
  width: 100;
`;

export const StyledBtn = styled(Button)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

interface StyledArrowProps {
  color?: string;
}

export const StyledArrow = styled.View<StyledArrowProps>`
  border-bottom-width: ${props => props.theme.hairlineWidth * 2};
  border-right-width: ${props => props.theme.hairlineWidth * 2};
  border-color: ${props => props.color || 'black'};
  transform: rotate(-45deg);
  width: 10;
  height: 10;
`;
