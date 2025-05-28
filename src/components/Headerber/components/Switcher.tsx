'use client';

import { useEffect, useState } from "react";

import { useRouter } from 'next/navigation';
const Switcher: React.FC = () => {
    useEffect(() => {
         const pathname = window.location.pathname;
         setSelectValue( pathname?.split('/')[1])
         
         console.log('pathname6666', pathname);
      }, []);
  const router = useRouter();
    const [selectValue, setSelectValue] = useState<string>('');
  const switchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const pathname = window.location.pathname;
        
   const newPathname = pathname.replace(/^\/(zh|en)$/, `/${locale}`);
    // 切换语言并跳转
    router.push(newPathname);
    const value = pathname?.split('/')[1]
     setSelectValue(value)
         console.log('pathname6666', value);
  
  };

  return (
    <select
      onChange={switchLanguage}
      value={selectValue}
      className="p-1 border border-gray-300 rounded focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F]"
    >
      <option value="zh">中文</option>
      <option value="en">en</option>
    </select>
  );
};

export default Switcher;