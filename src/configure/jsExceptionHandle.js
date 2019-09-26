// import {setJSExceptionHandler} from 'react-native-exception-handler';
// import {Alert} from 'react-native';

// //=================================================
// // ADVANCED use case:
// const exceptionhandler = (e, isFatal) => {
//   // 发送给服务器
//   if (isFatal) {
//     Alert.alert(
//       '发生错误',
//       `
//         Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
//         `,
//       [
//         {
//           text: '确定',
//           onPress: () => {},
//         },
//       ],
//     );
//   } else {
//     console.log(e); // So that we can see it in the ADB logs in case of Android if needed
//   }
// };
// setJSExceptionHandler(exceptionhandler, false);

if (!__DEV__) {
}
