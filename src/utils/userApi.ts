import service from '../utils/api';

// 获取用户信息接口
export const getUserInfo = () => {
  return service.get('/api/user/info');
};
// 测试接口
export const getUserask = (data: { question: string; }) => {
  return service.post('/ask',data);
};

// 登录接口
export const login = (data: { username: string; password: string }) => {
  return service.post('/api/login', data);
};