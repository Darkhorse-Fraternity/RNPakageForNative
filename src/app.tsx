import React,{ PureComponent } from 'react';
import {StatusBar} from 'react-native'
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import  {creactAppContainer}  from './pages';
// import { setUserInfo } from './help/tool';
// import {setConfigNative, setTrackingId} from './configure/reqConfigs'
import { Platform } from 'react-native'
import codePush from 'react-native-code-push';
require('./configure/jsExceptionHandle');

interface PropsApp {
  readonly user: Object,
  readonly config: Object,
  readonly tracking_id: string,
  readonly api_html_host: string,
  readonly initialRouteName: string,
  readonly openBaseRouteBackBtn: boolean,
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

const AppView = (props: PropsApp)=>{
  const {initialRouteName, openBaseRouteBackBtn} = props;
  const AppContainer = creactAppContainer(initialRouteName, openBaseRouteBackBtn)
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppContainer/>
    </ThemeProvider>
  );
}


export const  AppMemo = (props: PropsApp)=> {
    // setNativeConfig(props);
    return AppView(props);
}




@codePush()
export  class App extends PureComponent {
  render() {
    const {props} = this;
    return AppMemo(props);
  }
}

