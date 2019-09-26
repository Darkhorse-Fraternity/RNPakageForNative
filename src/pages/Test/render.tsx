import React,{useCallback} from 'react';
import {StyledContent,StyledBtn,StyledText,StyledArrow} from './style'
import {useNavigation} from 'react-navigation-hooks'


interface PageItemType {
  pageName: string
}


const PageItem = (props:PageItemType)=> {
  const {pageName} = props
  const { navigate } = useNavigation();
  return (
    <StyledBtn onPress={()=>{
      navigate(pageName);         
    }}>
      <StyledText>
        测试页面2
      </StyledText>
      <StyledArrow/>
    </StyledBtn>
  )
}


const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  return (   
    <StyledContent >
       {useCallback(<PageItem pageName="test2"/>,["pageName"])}
    </StyledContent>
    );
};

export default render;
