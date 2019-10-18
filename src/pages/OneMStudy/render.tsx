import React,{useCallback} from 'react';
import {
  Background,
} from './style'
import {page1} from'./questionView/render'
import {page2} from'./resultView/render'
import { isAbsolute } from 'path';
const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  return (
        <Background source={require('../../../source/img/OneMinuteStudy/back.png')}>
          {page1()}   
          {/* {page2()} */}
        </Background>
    );  
};

export default render;
