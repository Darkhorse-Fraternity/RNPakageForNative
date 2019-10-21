/* eslint-disable camelcase */
import {methodType} from '.';

// import {LeanCloud_APP_ID,LeanCloud_APP_KEY} from '../configure/leancloud'

export function getQuestionList() {
  return {
    path: 'hybrid/ability/question/list',
    method: methodType.get,
  };
}

export function getSaveLevel(level: number = 1) {
  return {
    path: 'hybrid/ability/save-level',
    method: methodType.get,
    query: {
      level,
    },
  };
}

// export function intelligentMatch({
//   city_list,
//   user_id ,
//   source_from_type = 600,
//   phone = '',
//   require_form = '',
//   tracking_id
// }:{
//   city_list: Array<String>,
//   user_id: String,
//   source_from_type: Number,
//   phone: String,
//   require_form: String,
//   tracking_id:String
// }) {
//   return {
//     path: 'hybrid/find-designer/intelligent-match',
//     method: methodType.post,
//     body: {
//       city_list,
//       user_id,
//       source_from_type,
//       phone,
//       require_form,
//       tracking_id
//     }
//   };
// }

// export const fdUserList = () => ({
//   path: 'hybrid/find-designer/user-list',
//   method: methodType.get,
// });

// export const fdRecommend = (city: string)  => ({
//   path: 'hybrid/find-designer/recommend',
//   method: methodType.get,
//   query: { city }
// });

// export const fdSearch = ({
//   style_list = [],
//   city = [],
//   design_fee_list = [],
//   identity_list = [],
//   page_index = 0,
//   page_size = 50,
// }) => ({
//   path: 'hybrid/find-designer/search',
//   method: methodType.post,
//   body: {
//     style_list,
//     city,
//     design_fee_list,
//     identity_list,
//     page_index,
//     page_size
//   },
//   cache: true, // post 默认没有缓存
// });
