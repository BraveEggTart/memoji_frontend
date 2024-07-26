// @ts-ignore
/* eslint-disable */
import request from '@request';

/** 获取Emojis 获取Emojis GET /api/emoji/list */
export async function emojiList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Api.emojiListParams,
  options?: { [key: string]: any },
) {
  return request<Api.SuccessListStr_>('/api/emoji/list', {
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

/** 获取随机Emojis 获取随机Emojis GET /api/emoji/random */
export async function emojiRandom(options?: { [key: string]: any }) {
  return request<Api.Success>('/api/emoji/random', {
    method: 'GET',
    ...(options || {}),
  });
}
