// @ts-ignore
/* eslint-disable */
import request from '@request';

/** Check GET /api/check */
export async function check(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: Api.checkParams,
  options?: { [key: string]: any },
) {
  return request<any>('/api/check', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
