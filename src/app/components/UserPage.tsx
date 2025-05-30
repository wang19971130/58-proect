import  {getUserask } from '@/utils/userApi';

const UserPage = () => {
  const fetchUserInfo = async () => {
    try {
      const userInfo = await getUserask({question: "你好"});
      console.log('用户信息:', userInfo);
    } catch (error) {
      console.error('获取用户信息失败:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchUserInfo}>获取用户信息</button>
    </div>
  );
};

export default UserPage;