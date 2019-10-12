import { createAppContainer,CreateNavigatorConfig} from 'react-navigation';
import {NativeModules, Platform} from 'react-native';
import {createStackNavigator } from 'react-navigation-stack'
// 默认背景色
import {defaultNavigationOptions} from '../components/Nav/navigationOptions';
import {TransitionConfiguration} from '../components/Nav/navigators/TransitionConfiguration';
import {setRouteState} from '../components/Nav/navigators/stateStore';
import {tackerView} from '../components/TjjAnalytics';
import baseRoute from './baseRoute';
import React from 'react';
import {NativeBackButton} from '../components/Nav/HeaderBackButton'
// const {Tool} = NativeModules;
// const {backHandleControl} = Tool;

const cardStyle = {backgroundColor: 'white'};
const stackDefoultConfig:CreateNavigatorConfig = {
  defaultNavigationOptions,
  transitionConfig: TransitionConfiguration,
  cardStyle,
  headerLayoutPreset: 'center',
};

// const baseRoute = {
//   matchingDesigner: {screen: MatchingDesigner},
//   matchingDesignerDetail: {screen: MatchingDesignerDetail},
//   findDesigner: {screen: FindDesigner},
// };

// const initialRouteName = 'findDesigner';

export function creactAppContainer(initialRouteName: string = "testPage",openBaseRouteBackBtn:boolean = true ) {
   // 如果页面headerLeft要重写 则从这边进行判断。
  const  initialRoute = baseRoute[initialRouteName];
  initialRoute.screenProps={openBaseRouteBackBtn}
  if(openBaseRouteBackBtn){
    //是否开启返回按钮
    initialRoute.navigationOptions = {
      headerLeft:(<NativeBackButton color={defaultNavigationOptions.headerTintColor} style={{marginLeft: 30}}/>)
    };
  }
 
  const BaseStack = createStackNavigator(
    {
      ...baseRoute,
    },
    {
      initialRouteName,
      ...stackDefoultConfig,
    },
  );

  const defaultGetStateForAction = BaseStack.router.getStateForAction;
  BaseStack.router.getStateForAction = (action, state) => {
    // console.log('action', action, state);
    // console.log('BaseStack.router', BaseStack.router);

    if (state) {
      // tackerView(state.routes[state.index].routeName);
    } else {
      // tackerView(initialRouteName);
    }

    if (state) {
      const {index, routes} = state;

      // const routesName = routes && routes.map(item=>item.routeName);
      // console.log('state', index,routes);
      if (Platform.OS !== 'ios') {
        // backHandleControl(index !== 0);
      }
      setRouteState(index, routes);
    }

    return defaultGetStateForAction(action, state);
  };

  return createAppContainer(BaseStack);
}
