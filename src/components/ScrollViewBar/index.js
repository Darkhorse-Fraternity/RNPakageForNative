import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated, Platform} from 'react-native';
import NavBar from '../Nav/bar/NavBar';
import {StyledContent} from './style';

// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export default class extends PureComponent {
  static propTypes = {
    // ScrollComp: PropTypes.class,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      scrollValue: new Animated.Value(0),
      yStatu: 0,
    };
  }

  setYStatu = statu => {
    const yStatu = this.state;
    if (yStatu !== statu) {
      this.setState({yStatu: statu});
    }
  };

  onScroll = e => {
    const {onScroll} = this.props;
    const {nativeEvent} = e;
    const {contentOffset} = nativeEvent;
    const {y} = contentOffset;
    const animatedValue = new Animated.Value(y);
    this.setState({scrollValue: animatedValue});

    if (y < 64) {
      this.setYStatu(0);
    } else {
      this.setYStatu(1);
    }

    onScroll(e);
  };

  render() {
    const {
      backgroundColor,
      ScrollComp,
      title,
      sc,
      onBackPress,
      scrollEventThrottle = 50,
      ...otherProps
    } = this.props;

    const {yStatu, scrollValue} = this.state;
    const color = scrollValue.interpolate({
      inputRange: [-200, 0, 400],
      outputRange: ['#1e35bf', '#1e35b1', 'white'],
    });
    // console.log('yStatu', yStatu);
    const borderWidth = yStatu !== 1 ? 2 : 0.5;
    const bcColor = yStatu !== 1 ? '#1e35bf' : '#14237E';
    return (
      <StyledContent
        style={{
          backgroundColor: color,
        }}>
        <NavBar
          // style={{
          //   position: 'absolute',
          //   left: 0,
          //   top: 44,
          //   zIndex: 60,
          //   width: 375
          // }}
          tintColor={yStatu !== 1 ? 'white' : 'black'}
          titleColor={yStatu !== 1 ? '#1e35b1' : 'black'}
          barStyle={yStatu === 1 ? 'dark-content' : 'light-content'}
          style={{
            backgroundColor: color,
          }}
          backStyle={{
            borderBottomWidth: borderWidth,
            borderRightWidth: borderWidth,
          }}
          key="nb"
          title={title}
          onBackPress={onBackPress}
        />
        <ScrollComp
          style={{
            backgroundColor: bcColor,
          }}
          key="sc"
          ref={sc}
          {...otherProps}
          onScroll={this.onScroll}
          scrollEventThrottle={scrollEventThrottle}
        />
      </StyledContent>
    );
  }
}
