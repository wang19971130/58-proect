import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// 创建 axios 实例
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://your-api-base-url.com', // 替换为实际的 API 基础 URL
  timeout: 10000, // 请求超时时间，单位毫秒
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use((config:InternalAxiosRequestConfig<unknown>) => {
    // 在发送请求之前做些什么，例如添加认证 token
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
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 处理响应错误
    console.error('响应错误:', error);
    if (error.response) {
      // 请求已发出，但服务器响应状态码不在 2xx 范围内
      switch (error.response.status) {
        case 401:
          // 处理未授权情况，例如跳转到登录页
          console.log('未授权，请重新登录');
          break;
        case 403:
          // 处理禁止访问情况
          console.log('禁止访问');
          break;
        case 404:
          // 处理资源未找到情况
          console.log('请求的资源不存在');
          break;
        default:
          console.log('请求失败，请稍后重试');
      }
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.log('没有收到服务器响应，请检查网络连接');
    } else {
      // 在设置请求时发生了一些事情，触发了错误
      console.log('请求设置出错:', error.message);
    }
    return Promise.reject(error);
  }
);

// 定义常用的 API 请求方法
const api = {
  /**
   * 发送 GET 请求
   * @param url 请求的 URL
   * @param config 请求配置
   * @returns Promise
   */
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return apiClient.get(url, config);
  },

  /**
   * 发送 POST 请求
   * @param url 请求的 URL
   * @param data 请求的数据
   * @param config 请求配置
   * @returns Promise
   */
  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return apiClient.post(url, data, config);
  },

  /**
   * 发送 PUT 请求
   * @param url 请求的 URL
   * @param data 请求的数据
   * @param config 请求配置
   * @returns Promise
   */
  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return apiClient.put(url, data, config);
  },

  /**
   * 发送 DELETE 请求
   * @param url 请求的 URL
   * @param config 请求配置
   * @returns Promise
   */
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return apiClient.delete(url, config);
  },
};

export default api;