import { req as reqFrom } from './index';


export const RESCODE = 'status';
export const SUCCODE = 'success';
export const MSG = 'error';
export const DATA = 'results';


export async function req(params) {
  const response = await reqFrom(params);
  if (response[RESCODE] === SUCCODE) {
    return {
      suc: true,
      data: response
    };
  }
  return {
    suc: false,
    data: response
  };
}

export async function reqList(params) {
  const response = await req(params);
  if (response.suc) {
    response.data = response.data.records;
  }

  return response;
}
