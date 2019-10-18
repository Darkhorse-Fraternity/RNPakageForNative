import React,{useCallback} from 'react';
import {
  Background,
  StyledBtn,
  StyledText,
  StyledArrow,
  TopImage,
  TopImage1,
  BoardImage,
  Line,
  Number,
  Sum,
  Question,
  OptionBtn,
  OptionTx,
  Percent,
  Star,
  Power,
  Suggest,
  Line1,
  Remind,
} from './style'
import {View,TouchableOpacity,Image} from 'react-native'
import { isAbsolute } from 'path';


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
  const next=()=>{
      var title=data[0].title;
      var answer=data[0].answer;
      var right=data[0].right;
  }
  return(
    <View style={{flex:1}}>
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
      <OptionBtn underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>选项选项选项选项选项</OptionTx></OptionBtn>
      <OptionBtn style={{marginTop:30}} underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>answer1</OptionTx></OptionBtn>
      <OptionBtn style={{marginTop:30}} underlayColor={'#FFC853'} onPress={()=>{}}><OptionTx>answer1</OptionTx></OptionBtn>
    </BoardImage>
    </View>
  );
}
const word=(a)=>{
  switch(a){
    case(0):
    case(1):return({a:1,b:'35%',c:'装修知识有点缺哦，萌小白是在说你吧？赶快学起来！'});
    case(2):
    case(3):return({a:2,b:'53%',c:'新人级宝宝一枚，多学多看多问，装修难不倒你！'});
    case(4):return({a:3,b:'77%',c:'进阶型潜力股，大坑可躲，小坑难防，学习让你变更强！'});
    case(5):return({a:4,b:'91%',c:'装修知识很丰富嘛，据说好学努力的能力者会更迷人！'});
  }      
}
const showstar=(a)=>{
  switch(a){
    case(1):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(2):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(3):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(4):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../source/img/OneMinuteStudy/star.png')}/></View>);
  }    
}
const page2=()=>{
  var n=3 ;//答对题的个数
  var a=word(n).a;
  var b=word(n).b;
  var c=word(n).c;
  return(
    <TopImage1 source={require('../../../source/img/OneMinuteStudy/top1.png')}>
      <Percent>恭喜您！超越了齐家{b}的业主用户</Percent>
      <View style={{flexDirection: "row",alignSelf:"center"}}><Power>装修力：</Power>{showstar(a)}</View>
      <Suggest>{c}</Suggest>
      <View style={{flexDirection: "row",marginTop:60,alignSelf:"center"}}>
        <Line1></Line1>
        <Remind>齐家为您准备一份开工礼</Remind>
        <Line1 style={{left:0}}></Line1>
      </View>
      <TouchableOpacity style={{marginTop:20,alignSelf:"center"}} onPress={()=>{}}>
          <Image source={require('../../../source/img/OneMinuteStudy/study.png')}/>
      </TouchableOpacity>
    </TopImage1>
  );
}
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
