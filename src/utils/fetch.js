import axios from 'axios';
import store from '../store';
import { baseURL } from "./config";
// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 15000
});

// request拦截器
service.interceptors.request.use(config => {
  if ( store.getters.token ) {
    config.headers['X-Token'] = "linxiaoshun";
  }
  return config;
}, error => {
  console.log("request-> error", error );
  Promise.reject(error);
})


service.interceptors.response.use( response => {
  /**
   * code为非20000是抛错 可结合自己业务进行修改
   */
  const res = response.data;
  const code = res.code;
  if ( code !== 20000 ) {
    if ( code === 50008 || code === 50012 || code === 50014 ) {
      console.log("你已被登出，可以取消继续留在该页面，或者重新登录");
      setTimeout(() => {
        location.reload();
      }, 2000)
    }
    return Promise.reject('error');
  } else {
    return res;
  }
}, error => {
  console.log("reponse=> error", error );
  return Promise.reject( error );
});

export default service;