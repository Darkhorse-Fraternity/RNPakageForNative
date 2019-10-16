import React, {useState} from 'react';
import {StyledContent, StyledTop, StyledText} from './style';
import {StatusBar} from 'react-native';

const NavBar = () => {};

const render = () => {
  const [value, setValue] = useState(0);
  // const value = 0;
  return (
    <StyledContent>
      <StatusBar backgroundColor="white" barStyle="light-content" translucent />
      <StyledTop source={require('../../../source/img/forGift/GiftTop.png')} />
    </StyledContent>
  );
};

export default render;
