import React, {lazy} from 'react';
import {Text} from 'react-native';

// import render from './render'
import {toLazyExoticComponent} from '../toLazyExoticComponent'
const render = lazy(() => import('./render'));

const title = '1分钟检验装修力';

const navigationOptions = (props: any) => ({
  title: title,
});

//转为懒加载对象并导出类对象，导出类对象是为了支持react-navigation
export default toLazyExoticComponent({
  render,
  navigationOptions}
);
