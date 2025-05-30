'use client'
import React from 'react';
import '@/styles/globals.css';
import HomePage from '@/components/HomePage';
import Header from '@/components/Headerber/Header';
import Footer from '@/components/Footer';
import UserPage from '../components/UserPage';


const Page: React.FC = () => {

  return (
    <div>
            <UserPage/>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Page;