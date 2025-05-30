
"use client";
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
import { useTranslations } from 'next-intl';
import Switcher from './components/Switcher';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const t = useTranslations('HomePage');
   const n = useTranslations('navItems');

   const navItems = [ n('housing'), n('recruitment'), n('usedCars'),n('secondHandMarket')];
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex  justify-between items-center py-4">
           {/* 语言切换组件 */}
           <div className=" md:block hidden  mr-2 ">
            <Switcher />
          </div>
          {/* Logo */}
          <div className=" w-auto whitespace-nowrap flex items-center">
            <Link href="/" className="text-xl font-bold text-[#FF5A5F]">
              {t('homeTitle')}
            </Link>
          </div>
      
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-700 hover:text-[#FF5A5F]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden md:block relative w-1/3">
            <input
              type="text"
              placeholder={t('searchHousing')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {/* Desktop Login and Register Buttons */}
          <div className=" md:flex hidden space-x-4 text-center items-center">
            <Link
              href="/"
              className="text-gray-700 py-2 px-4 rounded-full  hover:text-white  hover:bg-[#FF5A5F] font-medium"
            >
              {t('login')}
            </Link>
            <Link
              href="/"
              className=" bg-amber-200   text-[#000] px-4 py-2 rounded-full hover:text-white  hover:bg-[#e6494d] font-medium"
            >
            {t('register')}
            </Link>
          </div>
        </div>
      </div>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
      {/* Mobile Menu */}
    </header>
  );
};

export default Header;