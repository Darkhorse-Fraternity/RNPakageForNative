/* @flow */
import React, {Component, isValidElement} from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
// import Indicators from '../../Indicators';
import {StyledContent, StyledReportBtn, StyledReportText} from './style';

export const ExceptionType = {
  Loading: 'exceptionTypeLoading',
  NoData: 'exceptionTypeNoData',
  NetError: 'exceptionTypeError',
};

export default class ExceptionView extends Component {
  static propTypes = {
    exceptionType: PropTypes.string,
    prompt: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    image: PropTypes.number,
    otherTips: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onRefresh: PropTypes.func,
    tipBtnText: PropTypes.string,
  };

  static defaultProps = {
    exceptionType: ExceptionType.Loading,
    prompt: '暂无数据',
  };

  constructor(props: Object) {
    super(props);
  }

  renderPrompt() {
    if (isValidElement(this.props.prompt)) {
      return this.props.prompt;
    }
    const text = this.getPromptText(this.props.exceptionType);
    if (text) {
      return <Text style={styles.text}>{text}</Text>;
    }
  }

  renderPromptImage(promptImage) {
    const {prompIamgeStyle} = this.props;
    return (
      <Image source={promptImage} style={[styles.image, prompIamgeStyle]} />
    );
  }

  renderOtherTips() {
    const {otherTips} = this.props;
    if (isValidElement(otherTips)) {
      return otherTips;
    }
    return <Text style={styles.otherTips}>{otherTips}</Text>;
  }

  getPromptText(type: string): string {
    let {prompt} = this.props;
    if (prompt) {
      return prompt;
    }
    switch (type) {
      case ExceptionType.Loading:
        prompt = '正在加载';
        break;
      case ExceptionType.NoData:
        prompt = '';
        break;
      case ExceptionType.NetError:
        prompt = '网络异常';
        break;
      default:
        break;
    }
    return prompt;
  }

  renderTipButton = () =>
    this.props.tipBtnText ? (
      <StyledReportBtn
        onPress={() => {
          this.props.onRefresh && this.props.onRefresh();
        }}>
        <StyledReportText>{this.props.tipBtnText}</StyledReportText>
      </StyledReportBtn>
    ) : null;

  // _renderPromptIndicator = (type: string) => {
  //   switch (type) {
  //     case ExceptionType.Loading:
  //       return (
  //         <Indicators size="large" />
  //       );
  //     case ExceptionType.NoData:
  //     case ExceptionType.NetError:
  //       return (
  //         <Indicators size="large" animated={false} />
  //       );
  //     default:
  //       break;
  //   }
  // };

  render() {
    // let prompt = this.getPromptText(this.props.exceptionType);
    // console.log('test:', this.props.styles);
    // const style = {height:300,... this.props.styles}
    // console.log('test:', style);
    const {
      otherTips,
      // onRefresh,
      // refresh,
      style,
      styles,
      exceptionType,
      promptImage,
    } = this.props;

    // console.log('exceptionType', exceptionType);

    return (
      <StyledContent style={[style, styles]}>
        {/* {this._renderPromptIndicator(exceptionType)} */}
        {/* {this.renderPrompt()} */}

        {exceptionType === 'exceptionTypeNoData' &&
          promptImage &&
          this.renderPromptImage(promptImage)}
        {exceptionType === 'exceptionTypeNoData' && this.renderPrompt()}

        {this.renderTipButton()}
        {/* style={} */}
        {/* onPress={() => { */}
        {/* this.props.onRefresh && this.props.onRefresh() */}
        {/* }}> */}

        {/**/}
      </StyledContent>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // position:'absolute',
    width: 100,
    height: 100,
    marginTop: -100,
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center',
  },
  otherTips: {
    marginTop: 27,
    marginLeft: 43,
    marginRight: 43,
    fontSize: 13,
    color: '#9e9e9e',
    lineHeight: 26,
  },
});
