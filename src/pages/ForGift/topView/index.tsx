import React, {useState} from 'react';
import {
  StyledContent1,
  StyledContent2,
  StyledTitle,
  StyledTitle1,
  StyledSubmit,
  StyledSubmitText,
} from './style';
import Button from '../../../components/Button';

import {View} from 'react-native';
// import {NavBar} from '../../component/Nav/bar/'

export const signInTitle = () => {
  return (
    <StyledContent2>
      <StyledTitle>已连续签到</StyledTitle>
      <StyledTitle1>2</StyledTitle1>
      <StyledTitle>天</StyledTitle>
    </StyledContent2>
  );
};

export const submitButton = () => {
  return (
    <Button>
      <StyledSubmit end={{x: 1, y: 0}} colors={['#FF835C', '#FF5648']}>
        <StyledSubmitText>签到领金币</StyledSubmitText>
      </StyledSubmit>
    </Button>
  );
};

export const topView = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
  return (
    <StyledContent1>
      {signInTitle()}
      {submitButton()}
    </StyledContent1>
  );
};
