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
import {topView} from './topView';
import {giftView} from './giftView';
import {welfare} from './welfare'; //福利页面
import {NavBar} from '../../components/Nav/bar/TSNavBar';

const render = () => {
  const [value, setValue] = useState(0);
  // const value = 0;
  return (
    <StyledContent>
      <NavBar title={'签到好礼'} />
      <StyledTop source={require('../../../source/img/forGift/GiftTop.png')} />
      {topView()}
      {giftView()}
    </StyledContent>
  );
};

export default render;
