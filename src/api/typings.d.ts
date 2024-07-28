declare namespace Api {
  type bqbDislikesParams = {
    /** Key */
    key: string;
  };

  type bqbLikesParams = {
    /** Key */
    key: string;
  };

  type bqbListParams = {
    /** 名称 */
    name?: string;
    /** 页码数 */
    page?: number;
    /** 页面记录数量 */
    size?: number;
  };

  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type Success = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: any | any[] | string | null;
  };

  type ValidationError = {
    /** Location */
    loc: (string | number)[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
  };
}
