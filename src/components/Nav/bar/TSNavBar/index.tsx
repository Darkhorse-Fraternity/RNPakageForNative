import React from 'react';
import {StyledNavbar, StyledArrow, StyledTitle} from './style';
import {StatusBar, View, TouchableOpacity} from 'react-native';

// const NavBar = title => {
//   return <StyledNavbar />;
// };

interface PropsNavBar {
  title: String;
  renderLeftView?: Function;
  renderRightView?: Function;
}

const renderDefaultLeftView = () => {
  return (
    <TouchableOpacity hitSlop={{top: 30, left: 20, bottom: 20, right: 50}}>
      <StyledArrow />
    </TouchableOpacity>
  );
};

const renderDefaultRightView = () => {
  return <View />;
};

export const NavBar = (props: PropsNavBar) => {
  const {
    title,
    renderRightView = renderDefaultRightView,
    renderLeftView = renderDefaultLeftView,
  } = props;
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="light-content" translucent />
      <StyledNavbar>
        {renderLeftView()}
        <StyledTitle>{title}</StyledTitle>
        {renderRightView()}
      </StyledNavbar>
    </>
  );
};
