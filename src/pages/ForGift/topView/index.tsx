import React, { useState } from 'react';
import { StyledContent1,StyledContent2, StyledTitle, StyledTitle1 } from './style';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
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
export const topView = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
  return <StyledContent1>{signInTitle()}</StyledContent1>;
};
