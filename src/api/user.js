import request from '@/utils/request';
import { baseUrl } from '@/config';

/**
 * 注册
 */
export function register({ username, password, phone }) {
  const url = baseUrl + "/user/register";
  return request.post(url, {
    username, password, phone
  })
}
/**
 * 登陆
 */
export function login({ phone, password }) {
  const url = baseUrl + "/user/login";
  return request.post(url, {
    phone, password
  })
}
