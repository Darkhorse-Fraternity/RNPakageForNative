import React, {useState, useCallback} from 'react';
import {
  StyledContent1,
  StyledContent2,
  StyledContent3,
  StyledTitle,
  StyledTitle1,
  StyledSubmit,
  StyledSubmitText,
  StyledArrow,
  StyledTop,
  StyledLine,
  StyledItem,
  StyledItemLeft,
  StyledList,
  StyledItemTop,
  StyledTaskName,
  StyledTaskTip,
  StyledItemProgress,
  StyledProgressText,
} from './style';
import {StatusBar, ProgressBarAndroid} from 'react-native';
import {View} from 'react-native';
// import {NavBar} from '../../component/Nav/bar/'
import {useNavigation} from 'react-navigation-hooks'

const NavBar = () => {};

interface PageItemType {
  taskLink: string,
  taskName: string,
  taskTip: string,
  buttonText: string,
  finishedCount: number,
  totalCount: number,
  key:string
}


const PageItem = (props:PageItemType)=> {
  const {taskLink, taskName, taskTip, buttonText, finishedCount, totalCount} = props
  const { navigate } = useNavigation();
  return (
    <StyledItem>
      <StyledItemTop>
        <StyledItemLeft>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledItemProgress>
            <StyledTaskTip>{taskTip}</StyledTaskTip>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} color="#FE8240" />
            <StyledProgressText>{finishedCount}/{totalCount}</StyledProgressText>
          </StyledItemProgress>
        </StyledItemLeft>

        <StyledSubmit end={{x: 1, y: 0}} colors={['#FF835C', '#FF5648']}>
          <StyledSubmitText>{buttonText}</StyledSubmitText>
        </StyledSubmit>

      </StyledItemTop>
      <StyledLine/>
    </StyledItem>
  )
}

export const signInTitle = () => {
  return (
    <StyledContent2>
      <StyledTitle>更多福利</StyledTitle>
      <StyledContent3>
        <StyledTitle1>更多</StyledTitle1>
        <StyledTop source={require('../../../../source/img/forGift/arrow.png')} ></StyledTop>
      </StyledContent3>
    </StyledContent2>
  );
};

export const list = () => {
  const routesNames =  [
    {taskLink:'forGift',taskName:'关注装修达人，跟着高手不吃亏', taskTip:'2齐家币/人', buttonText:'去关注', finishedCount:0, totalCount: 10},
    {taskLink:'forGift',taskName:'为喜欢的内容点个赞', taskTip:'1齐家币/次',  buttonText:'赞一个', finishedCount:0, totalCount: 2},
    {taskLink:'forGift',taskName:'发帖，发表我的装修看法', taskTip:'5齐家币/次',  buttonText:'去发表', finishedCount:0, totalCount: 5}
  ];
  return (<StyledList >
    {routesNames.map(item=>
      useCallback(<PageItem 
        taskLink={item.taskLink} 
        taskName={item.taskName} 
        taskTip={item.taskTip} 
        buttonText={item.buttonText} 
        finishedCount={item.finishedCount} 
        totalCount={item.totalCount}/>,
      ["taskName"]))}
  </StyledList>);
};

export const welfare = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
  return <StyledContent1>
  {signInTitle()}
  <StyledLine/>
  {list()}
  </StyledContent1>;
};
