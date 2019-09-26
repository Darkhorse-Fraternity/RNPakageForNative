/**
 * Created by lintong on 2018/9/29.
 * @flow
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Image, Platform} from 'react-native';

export default class Avatar extends PureComponent {
  static propTypes = {
    radius: PropTypes.number,
  };

  static defaultProps = {
    radius: 30,
  };

  render(): ReactElement<any> {
    const {uri, radius, style, ...other} = this.props;

    return (
      <Image
        placeholderStyle={[
          {width: radius, height: radius, borderRadius: radius / 2},
        ]}
        style={[
          {
            width: radius,
            height: radius,
            borderRadius: radius / 2,
            resizeMode: Platform.OS === 'ios' ? 'stretch' : 'cover',
          },
          style,
        ]}
        {...other}
        // borderRadius={radius / 2}
        source={{uri, cache: 'force-cache'}}
        defaultSource={require('../../../source/img/default/avatar.png')}
      />
    );
  }
}
