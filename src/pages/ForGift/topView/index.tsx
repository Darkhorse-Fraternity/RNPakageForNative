import React, { useState } from 'react';
import * as main from './style';
import { StatusBar } from 'react-native';
import { View } from 'react-native';

export const signInTitle = () => {
  return (
    <main.titleView>
      <main.titleBlack>已连续签到 </main.titleBlack>
      <main.titleRed>0</main.titleRed>
      <main.titleBlack> 天</main.titleBlack>
    </main.titleView>
  );
};

export const signInPointView = (point : number,day : number) => {
  return (
    <main.signCircleBox>
      <main.signCircleOut>
        <main.signCircleIn>
          <main.titleBC6226>
            +{point}
        </main.titleBC6226>
        </main.signCircleIn>
      </main.signCircleOut>
      <main.titleEBB795>
      {day}天
      </main.titleEBB795>
    </main.signCircleBox>

  );
};

export const topView = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
   const aa =[]
   for (let index = 0; index < 7; index++) {
     aa.push(signInPointView(6,index))
     
   }

  return (
    
    <main.mainView>
      {signInTitle()}
      {aa}
      
      
    </main.mainView>
  );
};
