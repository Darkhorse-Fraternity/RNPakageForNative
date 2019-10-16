import React,{useCallback} from 'react';
import {StyledContent,StyledBtn,StyledText,StyledArrow} from './style'
import {useNavigation} from 'react-navigation-hooks'


interface PageItemType {
  pageName: string,
  title: string
}


const PageItem = (props:PageItemType)=> {
  const {pageName,title} = props
  const { navigate } = useNavigation();
  return (
    <StyledBtn key={title} onPress={()=>{
      navigate(pageName);         
    }}>
      <StyledText>
        {title}
      </StyledText>
      <StyledArrow/>
    </StyledBtn>
  )
}


const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  const routesNames =  [
    {pageName:'forGift',title:'签到好礼'},
    {pageName:'test1',title:'测试页面'},
  ];


  return (   
    <StyledContent >
      {routesNames.map(item=>
        useCallback(<PageItem 
        pageName={item.pageName} 
        title={item.title} 
        key={item.title}/>,
        ["pageName"]))}
    </StyledContent>
    );
};

export default render;
