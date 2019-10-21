import React, {useState} from 'react';
import {
  StyledContent,
  StyledTop,
  StyledCoinView,
  StyledCoinText,
  StyledCoinArrow,
} from './style';
import {NativeModules} from 'react-native';
import {View} from 'react-native';
import {topView} from './topView';
import {giftView} from './giftView';
import {welfare} from './welfare'; //福利页面
import {NavBar} from '../../components/Nav/bar/TSNavBar';
const {RouterBridge} = NativeModules;
const coinView = coin => {
  return (
    <StyledCoinView
      onPress={() => {
        RouterBridge.push('zxtt://open/native?params={"url":"task_center"}');
      }}>
      <StyledCoinText>我的齐家币:</StyledCoinText>
      <StyledCoinText
        style={{fontSize: 20, fontWeight: '500', marginBottom: 2}}>
        {coin}
      </StyledCoinText>
      <StyledCoinArrow />
    </StyledCoinView>
  );
};

const render = () => {
  const [value, setValue] = useState(0);
  // const value = 0;
  return (
    <StyledContent>
      {/* <StatusBar translucent={true} backgroundColor='transparent' barStyle="dark-content" /> */}
      <NavBar title={'签到好礼'} />
      <StyledTop source={require('../../../source/img/forGift/GiftTop.png')}>
        {coinView(100)}
      </StyledTop>
      {topView()}
      {/* {giftView()} */}
      {welfare()}
    </StyledContent>
  );
};

export default render;
