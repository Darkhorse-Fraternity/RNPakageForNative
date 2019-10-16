import React, {useCallback} from 'react';
import {
  StyledContent,
  StyledBtn,
  StyledText,
  StyledArrow,
  BackGround,
  TopImage,
  BoardImage,
  Line,
  Number,
  Sum,
  Question,
} from './style';
import {View, ImageBackground, Image, Text} from 'react-native';

const data = [
  {
    title: '',
    answer: ['aaa', 'bbb', 'ccc'],
    right: 2,
  },
  {
    title: '',
    answer: ['aaa', 'bbb', 'ccc'],
    right: 3,
  },
  {
    title: '',
    answer: ['aaa', 'bbb', 'ccc'],
    right: 4,
  },
];

const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  return (
    <StyledContent
      source={require('../../../source/img/OneMinuteStudy/back.png')}>
      <TopImage
        source={require('../../../source/img/OneMinuteStudy/top.png')}
      />
      <View>
        <BoardImage
          source={require('../../../source/img/OneMinuteStudy/bg.png')}>
          <View style={{flexDirection: 'row'}}>
            <Line />
            <Number>1</Number>
            <Sum>/5</Sum>
            <Line style={{left: 59.5}} />
          </View>
          <Question>什么是建材保温材料 建材保温材料有哪些？</Question>
        </BoardImage>
      </View>
    </StyledContent>
  );
};

export default render;
