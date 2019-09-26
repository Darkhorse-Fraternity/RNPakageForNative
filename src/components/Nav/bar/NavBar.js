import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StatusBar,
} from 'react-native';

// import Button from '../../Button';
import { HeaderBackImage2 } from '../HeaderBackButton';

const backWidth = Dimensions.get('window').width / 3;

export default class BackTabBar extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: ''
  }

  render() {
    const {
      title,
      barStyle,
      tintColor = 'black',
      backgroundColor,
      style,
      titleColor,
      onBackPress,
      backStyle
    } = this.props;

    const background = TouchableNativeFeedback.SelectableBackgroundBorderless
      && TouchableNativeFeedback.SelectableBackgroundBorderless();
    return (
      <Animated.View style={[styles.tabs, {
        backgroundColor:
        backgroundColor || 'white',
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }, style]}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={barStyle || 'dark-content'}
        />
        <TouchableOpacity
          background={background}
          onPress={() => {
            onBackPress && onBackPress();
          }}
          style={{
            width: backWidth,
            justifyContent: 'center',
          }}
        >
          <HeaderBackImage2 color={tintColor || 'black'} style={[{ marginLeft: 20 }, backStyle]} />
        </TouchableOpacity>
        <View style={[styles.tab, styles.contain]}>
          <Animated.Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={[styles.title, { color: titleColor || tintColor }]}
          >
            {title}
          </Animated.Text>
        </View>
        <View style={{
          width: backWidth,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingRight: 0,
          alignItems: 'center'
        }}
        >
          {this.props.rightView
          && this.props.rightView()}
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingBottom: 10,
    flexDirection: 'row',


  },
  contain: {
    flexDirection: 'row',
  },
  tabs: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'transparent',

  },
  title: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '300',
  }
});
