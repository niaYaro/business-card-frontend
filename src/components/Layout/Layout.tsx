// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.mainClass}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
