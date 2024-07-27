// @ts-ignore
/* eslint-disable */
import request from '@request';

/** 获取BQB 获取BQB GET /api/bqb/list */
export async function bqbList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Api.bqbListParams,
  options?: { [key: string]: any },
) {
  return request<Api.SuccessListStr_>('/api/bqb/list', {
    method: 'GET',
    params: {
      // tag has a default value:
      tag: '',
      // size has a default value: 20
      size: '20',
      // page has a default value: 1
      page: '1',
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取随机BQB 获取随机BQB GET /api/bqb/random */
export async function bqbRandom(options?: { [key: string]: any }) {
  return request<Api.Success>('/api/bqb/random', {
    method: 'GET',
    ...(options || {}),
  });
}
