import React,{useCallback} from 'react';
import {
  TopImage1,
  Percent,
  Star,
  Power,
  Suggest,
  Line1,
  Remind,
} from './style'
import {View,TouchableOpacity,Image} from 'react-native'
const word=(number)=>{
  switch(number){
    case(0):
    case(1):return({grade:1,percent:'35%',Tip:'装修知识有点缺哦，萌小白是在说你吧？赶快学起来！'});
    case(2):
    case(3):return({grade:2,percent:'53%',Tip:'新人级宝宝一枚，多学多看多问，装修难不倒你！'});
    case(4):return({grade:3,percent:'77%',Tip:'进阶型潜力股，大坑可躲，小坑难防，学习让你变更强！'});
    case(5):return({grade:4,percent:'91%',Tip:'装修知识很丰富嘛，据说好学努力的能力者会更迷人！'});
  }      
}
const showstar=(a)=>{
  switch(a){
    case(1):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(2):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(3):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/></View>);
    case(4):return(<View style={{flexDirection: "row"}}>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/>
    <Star source={require('../../../../source/img/OneMinuteStudy/star.png')}/></View>);
  }    
}
export const page2=()=>{
  let number=5 ;//答对题的个数
  let grade=word(number).grade;
  let percent=word(number).percent;
  let Tip=word(number).Tip;
  return(
    <TopImage1 source={require('../../../../source/img/OneMinuteStudy/top1.png')}>
      <Percent>恭喜您！超越了齐家{percent}的业主用户</Percent>
      <View style={{flexDirection: "row",alignSelf:"center"}}><Power>装修力：</Power>{showstar(grade)}</View>
      <Suggest>{Tip}</Suggest>
      <View style={{flexDirection: "row",marginTop:60,alignSelf:"center"}}>
        <Line1></Line1>
        <Remind>齐家为您准备一份开工礼</Remind>
        <Line1 style={{left:0}}></Line1>
      </View>
      <TouchableOpacity style={{marginTop:20,alignSelf:"center"}} onPress={()=>{}}>
          <Image source={require('../../../../source/img/OneMinuteStudy/study.png')}/>
      </TouchableOpacity>
    </TopImage1>
  );
}