// @ts-ignore
/* eslint-disable */
import request from '@request';

/** 获取Emojis 获取Emojis GET /api/meme/list */
export async function memeList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Api.memeListParams,
  options?: { [key: string]: any },
) {
  return request<Api.SuccessListStr_>('/api/meme/list', {
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

/** 获取随机memes 获取随机memes GET /api/meme/random */
export async function memeRandom(options?: { [key: string]: any }) {
  return request<Api.Success>('/api/meme/random', {
    method: 'GET',
    ...(options || {}),
  });
}
