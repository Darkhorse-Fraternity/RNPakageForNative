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
  OptionBtn,
  OptionTx
} from './style'
import {View,TouchableHighlight,Text } from 'react-native'


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
    <TopImage source={require('../../../source/img/OneMinuteStudy/top.png')}/>
    <BoardImage source={require('../../../source/img/OneMinuteStudy/bg.png')}>
      <View style={{flexDirection: "row",}}>
        <Line></Line>
        <Number>1</Number>
        <Sum>/5</Sum>
        <Line style={{left:0}}></Line>
      </View>
      <Question>               
        什么是建材保温材料 建材保温材料有哪些？                        
      </Question>
      <OptionBtn underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>answer1</OptionTx></OptionBtn>
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
