import request from '../utils/request';
import { baseUrl } from '../config/index';
import { getSession} from "../utils/utils";

export function getVoteList(page) {
  const url = baseUrl + "/vote/getVoteInfoList";
  const token = getSession('token');
  let pageNo = 1;
  if (page && page.pageNo && '' !== page.pageNo) {
    pageNo = page.pageNo;
  }
  console.log("token: " + token);
  console.log("url: " + url);
  return request.post(url, {token: token, pageNo : pageNo, pageSize : 5});
}

export function getVoteInfo(voteAddress) {
  const url = baseUrl + "/vote/getVoteInfo";
  const token = getSession('token');
  return request.post(url, {token: token, voteAddress: voteAddress});
}
