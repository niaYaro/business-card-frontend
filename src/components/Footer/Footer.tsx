// src/components/Layout.tsx
import React from 'react';
import style from './Footer.module.scss';
import logo from '../../assets/images/logo.png';
import Image from '../Image/Image';
import Instagram from '../../assets/icons/Instagram';
import WhatsApp from '../../assets/icons/WhatsApp';
import Telegram from '../../assets/icons/Telegram';


const Footer: React.FC = () => {
  return (
    <div className={style.footerWrapper}>
      <div className={style.logoWrapper}>
        <Image src={logo} />
      </div>
      <div className={style.data}>
        <div className={style.contacts}>
          <p>name@gmail.com</p>
          <p>+38 093 111 11 11</p>
        </div>
        <div className={style.socials}>
          <WhatsApp />
          <Instagram />
          <Telegram />
        </div>
      </div>
      <p className={style.copyright}>
        © 2024 Company name
      </p>
    </div>
  );
};

export default Footer;
