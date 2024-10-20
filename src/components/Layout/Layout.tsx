// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import style from './Layout.module.scss';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#008080',
    },
  },
});

const Layout: React.FC = () => {
  return (
    <ThemeProvider theme={customTheme}>

      <div className={style.layout}>
        <Header />
        <main className={style.mainClass}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
