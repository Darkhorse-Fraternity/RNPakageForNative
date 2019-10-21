import React, {useState} from 'react';
import {
  StyledContent,
  StyledTop,
  StyledCoinView,
  StyledCoinText,
  StyledCoinArrow,
  StyledInner,
} from './style';
import {NativeModules, Dimensions} from 'react-native';
import {View} from 'react-native';
import {topView} from './topView';
import {giftView} from './giftView';
import {welfare} from './welfare'; //福利页面
import {NavBar} from '../../components/Nav/bar/TSNavBar';
const {height} = Dimensions.get('window');

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
      <StyledTop source={require('../../../source/img/forGift/GiftTop.png')} />
      <StyledInner scrollEnabled={height < 700}>
        {coinView(100)}
        {topView()}
        {/* {giftView()} */}
        {welfare()}
        <View style={{height: 50}} />
      </StyledInner>
    </StyledContent>
  );
};

export default render;
