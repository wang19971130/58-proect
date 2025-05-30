import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 创建 axios 实例
const service = axios.create({
//   baseURL: process.env.REACT_APP_API_BASE_URL, // 接口基础地址
  baseURL: "http://192.168.1.58:8002/", // 接口基础地址
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 处理响应错误
    console.error('响应错误:', error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 处理未授权，例如跳转到登录页
          window.location.href = '/login';
          break;
        case 403:
          // 处理禁止访问
          console.error('没有权限访问该资源');
          break;
        case 404:
          // 处理资源未找到
          console.error('请求的资源不存在');
          break;
        default:
          console.error('未知错误');
      }
    }
    return Promise.reject(error);
  }
);

export default service;