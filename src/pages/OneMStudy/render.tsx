import React, {useState, useCallback, useEffect} from 'react';
import {Background} from './style';
import {page1} from './questionView/render';
import {page2} from './resultView/render';
import {isAbsolute} from 'path';
import {useFetch} from '../../request/useReq';

import {getQuestionList, getSaveLevel} from '../../request/api';
import {req} from '../../request';

const questionListResDefault = {
  number: 0,
  question_list: [],
};

const fetch = <T extends {}>(params, defaultValue: T): T => {
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    // Update the document title using the browser API
    const fetchData = async () => {
      const res = await req(params);
      setData(res);
    };
    fetchData();
  }, []);
  return data;
};

const render = () => {
  // 使用 useCallback 将PageItem转为记忆函数提高性能。
  const getQuestionListParams = getQuestionList();
  const {error, pending, result} = useFetch(getQuestionListParams);
  console.log('error', error);
  console.log('pending', pending);
  console.log('result', result);
  // const {pending, error, result, abort} = useReq(getQuestionListParams);
  return (
    <Background source={require('../../../source/img/OneMinuteStudy/back.png')}>
      {page1()}
      {/* {page2()} */}
    </Background>
  );
};

export default render;
