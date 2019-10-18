
import React, { useState } from 'react';
import * as main from './style';
import Button from '../../../components/Button';
import { View } from 'react-native';
//签到文本
export const signInTitle = () => {
  return (
    <main.titleView>
      <main.titleBlack>已连续签到 </main.titleBlack>
      <main.titleRed>0</main.titleRed>
      <main.titleBlack> 天</main.titleBlack>
    </main.titleView>
  );
};
//登录7天的奖励View
export const signInPointView = (point: number, day: number) => {
  let porinOrGift;
  if (day == 2 || day == 7) {
    porinOrGift = (<main.giftBoxImage source={require('../../../../source/img/forGift/TreasureChest.png')}></main.giftBoxImage>
    )
  } else {
    porinOrGift = (
      <main.signCircleOut>
        <main.signCircleIn>
          <main.titleBC6226>
            +{point}
          </main.titleBC6226>
        </main.signCircleIn>
      </main.signCircleOut>
    )
  }


  return (
    <main.signCircleBox key={day}>
      {porinOrGift}
      <main.titleEBB795>
        {day}天
      </main.titleEBB795>
    </main.signCircleBox>
  );
};
//签到按钮
export const submitButton = () => {
  return (
    <main.ButtonView>
      <Button>
        <main.StyledSubmit end={{ x: 1, y: 0 }} colors={['#FF835C', '#FF5648']}>
          <main.StyledSubmitText>签到领金币</main.StyledSubmitText>
        </main.StyledSubmit>
      </Button>
    </main.ButtonView>

  );
};

export const topView = () => {
  //   const [value, setValue] = useState(0);
  // const value = 0;
  const pointArray = [5, 0, 8, 12, 18, 26, 0]
  const pointViewArray = []

  return (
    <main.mainView>
      {signInTitle()}
      <main.signCircleBoxListView>
        {pointArray.map((item, index) => signInPointView(item, index + 1))}
      </main.signCircleBoxListView>
      {submitButton()}
    </main.mainView >
  );
};
