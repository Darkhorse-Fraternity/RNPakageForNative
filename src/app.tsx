import React, {PureComponent} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {theme} from '../theme';
import {creactAppContainer} from './pages';
import { setUserInfo } from './help/tool';
import {setConfigNative} from './configure/reqConfigs';

import codePush from 'react-native-code-push';
require('./configure');

interface PropsApp {
  readonly networkConfig: string | Object;
  readonly user?: string | Object;
  readonly common?: string | Object;
  readonly initialRouteName?: string;
  readonly openBaseRouteBackBtn?: boolean;
}

// const setNativeConfig = (props: PropsApp)=>{
//   if(Platform.OS === 'ios'){
//     setUserInfo(props.user);
//     setConfigNative(props.config)
//     setTrackingId(props.tracking_id)
//   }else{
//     setConfigNative({api_html_host: props.api_html_host+'/'})
//     setTrackingId(props.tracking_id)
//   }
// }

const AppView = (props: PropsApp) => {
  const {initialRouteName, openBaseRouteBackBtn = true} = props;
  const AppContainer = creactAppContainer(
    initialRouteName,
    openBaseRouteBackBtn,
  );
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <AppContainer screenProps={{initialRouteName, openBaseRouteBackBtn}} />
    </ThemeProvider>
  );
};

export const AppMemo = (props: PropsApp) => {
  setConfigNative(props);
  return AppView(props);
};

@codePush()
export class App extends PureComponent<PropsApp> {
  render() {
    const {props} = this;
    return AppMemo(props);
  }
}
