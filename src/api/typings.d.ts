declare namespace Api {
  type bqbListParams = {
    /** 名称 */
    name?: string;
    /** 类型 */
    type?: string;
    /** 标签 */
    tag?: string[];
    /** 页面记录数量 */
    size?: number;
    /** 页码数 */
    page?: number;
  };

  type checkParams = {
    word: string;
  };

  type emojiListParams = {
    /** 名称 */
    name?: string;
    /** 类型 */
    type?: string;
    /** 标签 */
    tag?: string[];
    /** 页面记录数量 */
    size?: number;
    /** 页码数 */
    page?: number;
  };

  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type memeListParams = {
    /** 名称 */
    name?: string;
    /** 类型 */
    type?: string;
    /** 标签 */
    tag?: string[];
    /** 页面记录数量 */
    size?: number;
    /** 页码数 */
    page?: number;
  };

  type Success = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: any | any[] | string | null;
  };

  type SuccessListStr_ = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: string[] | any[] | string | null;
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
