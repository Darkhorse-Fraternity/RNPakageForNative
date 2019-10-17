import React from 'react';
import {StyledNavbar, StyledArrow, StyledTitle} from './style';
import {
  StatusBar,
  View,
  TouchableOpacity,
  GestureResponderEvent,
  NativeModules,
} from 'react-native';
import {useNavigation, useNavigationState} from 'react-navigation-hooks';
const {RouterBridge} = NativeModules;
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
  const {goBack, isFirstRouteInParent} = useNavigation();
  const go = () => goBack();
  const {onBackPress = go} = props;
  if (isFirstRouteInParent()) {
    return <View />;
  }
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
