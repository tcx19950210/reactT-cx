import axios from "./api"; // 倒入 api
/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 此处的数据依然来自 Easy Mock
 */
// https://www.qdskill.com/frames/vue/9281.html © qdskill.com

export const query = params => {
  return axios({
    url: "/query",
    method: "get",
    params
  });
};
export const mock = params => {
  return axios({
    url: "/mock",
    method: "get",
    params
  });
};
export const upload = data => {
  return axios({
    url: "/upload",
    method: "post",
    data
  });
};
// 测试
export const listMokey = data => {
    return axios({
      url: "/catPackage/list",
      method: "get",
      data
    });
  };
