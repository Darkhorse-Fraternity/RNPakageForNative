import React, {useState} from 'react';
import {
  StyledContent,
  StyledTop,
  StyledText,
  StyledNavbar,
  StyledArrow,
  StyledTitle,
} from './style';
import {StatusBar} from 'react-native';
import {View} from 'react-native';

const NavBar = () => {
  return (
    <StyledNavbar>
      <StyledArrow />
      <StyledTitle>签到好礼</StyledTitle>
      <View />
    </StyledNavbar>
  );
};

const render = () => {
  const [value, setValue] = useState(0);
  // const value = 0;
  return (
    <StyledContent>
      <StatusBar backgroundColor="white" barStyle="light-content" translucent />
      {NavBar()}
      <StyledTop source={require('../../../source/img/forGift/GiftTop.png')} />
    </StyledContent>
  );
};

export default render;
