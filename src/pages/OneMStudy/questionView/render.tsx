import React,{useCallback} from 'react';
import {
  TopImage,
  BoardImage,
  Line,
  Number,
  Sum,
  Question,
  OptionBtn,
  OptionTx,
} from './style'
import {View,ScrollView} from 'react-native'
import { isAbsolute } from 'path';


const data = [
  {
    title:"a",
    answer:["aaa","bbb","ccc"],
    right:1,
  },
  {
    title:"b",
    answer:["aaa","bbb","ccc"],
    right:2,
  },
  {
    title:"c",
    answer:["aaa","bbb","ccc"],
    right:3,
  },
  {
    title:"d",
    answer:["aaa","bbb","ccc"],
    right:4,
  },
  {
    title:"e",
    answer:["aaa","bbb","ccc"],
    right:5,
  }
]
export const page1=()=>{
  const next=()=>{
      let title=data[0].title;
      let answer=data[0].answer;
      let right=data[0].right;
  }
  return(
    <View style={{flex:1}}>
    <TopImage source={require('../../../../source/img/OneMinuteStudy/top.png')}/>
    <BoardImage source={require('../../../../source/img/OneMinuteStudy/bg.png')}>
      <View style={{flexDirection: "row",}}>
        <Line></Line>
        <Number>1</Number>
        <Sum>/5</Sum>
        <Line style={{left:0}}></Line>
      </View>
      <ScrollView>
      <Question>               
        什么是建材保温材料 建材保温材料有哪些？                        
      </Question>
      <OptionBtn underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>选项选项选项选项选项</OptionTx></OptionBtn>
      <OptionBtn style={{marginTop:30}} underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>answer1</OptionTx></OptionBtn>
      <OptionBtn style={{marginTop:30}} underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>answer1</OptionTx></OptionBtn>
      </ScrollView>
    </BoardImage>
    </View>
  );
}