import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export const creatAppNavigator = () => {
  const SwitchNavigator = createSwitchNavigator(
    {
      // Auth: AuthStack,
      // ...route,
      // WebView: {screen: WebView}
    },
    {
      // mode:'modal',
      // headerMode: 'none',
      initialRouteName: 'AuthLoading',
    },
  );

  return createAppContainer(SwitchNavigator);
};
