import React,{useState} from 'react';
import {
  StyledContent,
  StyledTop,
  StyledText
}from './style'



const render = () => {

  const [value, setValue] = useState(0);
  // const value = 0;
  return (   
    <StyledContent >
      <StyledTop/>


    </StyledContent>
    );
};

export default render;
