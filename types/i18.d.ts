
import 'next-i18next';

declare module 'next-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: {
        homeTitle: string;
        welcome: string;
        housing: string;
        jobs: string;
        secondHand: string;
        localLife: string;
        login: string;
        register: string;
        searchPlaceholder: string;
        navItems: {
          housing: string;
          recruitment: string;
          usedCars: string;
          secondHandMarket: string;
        };
      };
    };
  }
}
// 定义翻译文件的类型
export interface Translation {
  welcome: string;
  changeLanguage: string;
}

