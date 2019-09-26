/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import {NativeModules} from 'react-native';

const {Tool} = NativeModules;
const getLocationNative = Tool.getLocation;
const getUerInfoNative = Tool.getUerInfo;

let user = {};

Tool.hideLoading();

export default Tool;
export const getLocation = async () => {
  const res = await getLocationNative();
  const {province, city, area} = res;
  if (province === city) {
    res.locations = [city, area];
  } else {
    res.locations = [province, city];
  }

  return res;
};

export const getUserInfoFromNative = async () => {
  const res = await getUerInfoNative();

  user = {...user, ...res};
  return res;
};

export const setUserInfo = info => {
  user = {...user, ...info};
};

export const getUserInfo = () => ({...user});

export const getRequireForm = ({
  city_list = '',
  area = 0,
  fitTime = '',
  style = '',
  budget = '',
  nickname = '',
  phone = '',
}) => {
  const info = {
    basicInfo0: {
      所在城市: city_list,
      面积: area,
      开始装修时间: fitTime,
      装修风格: style,
      装修预算: budget,
      称呼: nickname,
      手机号码: phone,
    },
  };
  return JSON.stringify(info);
};
