import {debounce} from 'lodash';

import React from 'react';
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const withPreventDoubleClick = WrappedComponent => {
  class PreventDoubleClick extends React.PureComponent {
    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    };

    onPress = debounce(this.debouncedOnPress, 300, {
      leading: true,
      trailing: false,
    });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  return PreventDoubleClick;
};

const ButtonAndroid = props => (
  <TouchableNativeFeedback
    delayPressIn={0}
    background={
      TouchableNativeFeedback.SelectableBackground &&
      TouchableNativeFeedback.SelectableBackground()
    } // eslint-disable-line new-cap
    {...props}>
    {(props.children && props.children.length > 1) || props.style ? (
      <View style={props.style}>{props.children}</View>
    ) : (
      props.children
    )}
  </TouchableNativeFeedback>
);

const button = Platform.OS === 'ios' ? TouchableOpacity : ButtonAndroid;

module.exports = withPreventDoubleClick(button);
