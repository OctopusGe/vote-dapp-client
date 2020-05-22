import request from '../utils/request';
import { baseUrl } from '../config/index';

export function register({ account, password, nickName }) {
  const url = baseUrl + "/user/register";
  return request.post(url, {
    account, password, nickName
  })
}
export function login({ account, password }) {
  const url = baseUrl + "/user/login";
  console.log(url);
  return request.post(url, {
    account, password
  })
}
