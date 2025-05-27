import { makeAutoObservable } from 'mobx';

class CounterStore {
  // 定义可观察的状态
  count = 0;

  constructor() {
    // 自动将类中的属性和方法转换为 MobX 可观察属性和动作
    makeAutoObservable(this);
  }

  // 定义修改状态的动作
  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

// 创建单例实例
const counterStore = new CounterStore();

export default counterStore;