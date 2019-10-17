import React from 'react';
import {StyledNavbar, StyledArrow, StyledTitle} from './style';
import {
  StatusBar,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
// const NavBar = title => {
//   return <StyledNavbar />;
// };

interface PropsNavBar {
  title: String;
  renderLeftView?: (props: PropsNavBar) => Element;
  renderRightView?: (props: PropsNavBar) => Element;
  onBackPress?: (event: GestureResponderEvent) => void;
}

const onDefaultBackPress = (event: GestureResponderEvent) => {};

const renderDefaultLeftView = (props: PropsNavBar) => {
  const {goBack} = useNavigation();
  const go = () => goBack();
  const {onBackPress = go} = props;
  return (
    <TouchableOpacity
      onPress={onBackPress}
      hitSlop={{top: 30, left: 20, bottom: 20, right: 50}}>
      <StyledArrow />
    </TouchableOpacity>
  );
};

const renderDefaultRightView = (props: PropsNavBar) => {
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
        {renderLeftView(props)}
        <StyledTitle>{title}</StyledTitle>
        {renderRightView(props)}
      </StyledNavbar>
    </>
  );
};
