import React,{useCallback} from 'react';
import {
  StyledContent,
  StyledBtn,
  StyledText,
  StyledArrow,
  TopImage,
  BoardImage,
  Line,
  Number,
  Sum,
  Question,
  Option
} from './style'
import {View,ImageBackground,Image,Text  } from 'react-native'


const data = [
  {
    title:"",
    answer:["aaa","bbb","ccc"],
    right:1,
  },
  {
    title:"",
    answer:["aaa","bbb","ccc"],
    right:2,
  },
  {
    title:"",
    answer:["aaa","bbb","ccc"],
    right:3,
  },
  {
    title:"",
    answer:["aaa","bbb","ccc"],
    right:4,
  },
  {
    title:"",
    answer:["aaa","bbb","ccc"],
    right:5,
  }
]
const page1=()=>{
  return(
    <View>
    <TopImage source={require('../../../source/img/OneMinuteStudy/top.png')}></TopImage>
    <BoardImage source={require('../../../source/img/OneMinuteStudy/bg.png')}>
      <View style={{flexDirection: "row",}}>
        <Line></Line>
        <Number>1</Number>
        <Sum>/5</Sum>
        <Line style={{left:59.5}}></Line>
      </View>
      <Question>               
      什么是建材保温材料 建材保温材料有哪些？                        
      </Question>
      <Option title={'Answer1'}></Option>
      <Option style={{top:30}} title={'Answer1'}></Option>
      <Option title={'Answer1'}></Option>
    </BoardImage>
    </View>
  );
}

const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  return (
        <StyledContent source={require('../../../source/img/OneMinuteStudy/back.png')}>
          {page1()}   
        </StyledContent>
    );  
};

export default render;
