import { request } from "@/utils/service"

export interface ILoginRequestData {
  /** admin 或 editor */
  username: "admin" | "editor"
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
  rkey: string
}

type LoginCodeResponseData = IApiResponseData<{ code: string; base64: string; rkey: string }>
type LoginResponseData = IApiResponseData<{ id: string; token: string }>
type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<LoginCodeResponseData>({
    url: "captcha",
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data: ILoginRequestData) {
  return request<LoginResponseData>({
    url: "login",
    method: "post",
    data
  })
}
/** 获取用户详情 */
export function getUserInfoApi(id: string) {
  return request<UserInfoResponseData>({
    url: `info/${id}`,
    method: "get"
  })
}
