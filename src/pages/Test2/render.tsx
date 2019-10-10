import React,{useState} from 'react';
import {StyledContent,StyledBtn,StyledText} from './style'

const render = () => {

  const [value, setValue] = useState(0);
  // const value = 0;
  return (   
    <StyledContent >

          <StyledText>
            value:{value}
          </StyledText>
        <StyledBtn onPress={()=>{
          setValue(value+1);
          // console.log("111");
        }}>
          <StyledText>
            加+++
          </StyledText>
        </StyledBtn>

        <StyledBtn onPress={()=>{
          setValue(value-1);
          // console.log("111");
        }}>
          <StyledText>
            减----
          </StyledText>
        </StyledBtn>

    </StyledContent>
    );
};

export default render;
