
import React, { useState } from 'react';
import * as main from './style';
import Button from '../../../components/Button';
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

export const signInPointView = (point: number, day: number) => {
  return (
    <main.signCircleBox key={day}>
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
export const submitButton = () => {
  return (
    <Button>
      <main.StyledSubmit end={{ x: 1, y: 0 }} colors={['#FF835C', '#FF5648']}>
        <main.StyledSubmitText>签到领金币</main.StyledSubmitText>
      </main.StyledSubmit>
    </Button>
  );
};

export const topView = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
  const pointArray = [5, 0, 8, 12, 18, 26, 0]
  const pointViewArray = []
  // for (let index = 0; index < 7; index++) {
  //   pointViewArray.push(signInPointView(pointArray[index], index + 1))
  // }

  return (

    <main.mainView>

      {signInTitle()}
      <main.signCircleBoxListView>
        {pointArray.map((item, index) => signInPointView(item, index + 1))}
      </main.signCircleBoxListView>
      {/* <DashLine lineWidth={2} /> */}
      {submitButton()}


    </main.mainView >
  );
};
