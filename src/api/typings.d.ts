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

  type emailCodeParams = {
    email: string;
  };

  type EmailCodeSchema = {
    /** Account 账号 */
    account: string;
    /** Code 验证码 */
    code: string;
  };

  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type JWTOutSchema = {
    /** Access Token */
    access_token: string;
    /** Refresh Token */
    refresh_token: string;
    /** Token Type */
    token_type: string;
  };

  type LoginEmailSchema = {
    /** Email 邮箱地址 */
    email: string;
    /** Code 验证码 */
    code: string;
    /** Remember 自动登录 */
    remember?: boolean;
  };

  type LoginSchema = {
    /** Account 账号 */
    account: string;
    /** Password 登陆密码 */
    password: string;
    /** Captcha 验证码 */
    captcha: string;
    /** Remember 自动登录 */
    remember?: boolean;
  };

  type Success = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: any | any[] | string | null;
  };

  type SuccessBool_ = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: boolean | any[] | string | null;
  };

  type SuccessJWTOutSchema_ = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: JWTOutSchema | any[] | string | null;
  };

  type SuccessStr_ = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: string | any[] | null;
  };

  type SuccessUnionBool_str_ = {
    /** Code */
    code?: number;
    /** Msg */
    msg?: string;
    /** Data */
    data?: boolean | string | any[] | null;
  };

  type validateCaptchaParams = {
    code: string;
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
