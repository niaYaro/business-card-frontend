// src/components/Layout.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import style from './Header.module.scss';
import Image from '../Image/Image';

const Header: React.FC = () => {
  return (
    <div className={style.headerWrapper}>
      <Image src={logo} className={style.logoWrapper}/>
      <nav className={style.menuWrapper}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/test'}>Test</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
