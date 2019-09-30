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
    <StyledBtn onPress={()=>{
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
  return (   
    <StyledContent >
       {useCallback(<PageItem pageName="test2" title="测试页面"/>,["pageName"])}
       {useCallback(<PageItem pageName="richText" title="富文本"/>,["pageName"])}
    </StyledContent>
    );
};

export default render;
