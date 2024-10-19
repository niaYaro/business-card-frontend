// src/components/WelcomeTile.tsx
import React from 'react';
import portrait from '../../assets/images/portrait.png';
import style from './WelcomeTile.module.scss';
import Image from '../Image/Image';
import Boat from '../../assets/icons/Boat';

const WelcomeTile: React.FC = () => {
  return (
    <div className={style.welcomeTile}>
      <div className={style.bgPattern}>
        <Boat/>
      </div>

      <Image src={portrait} className={style.imageWrapper} />

      <div>
        <h1>[Ваше Ім'я!!!]</h1>
        <p>

          Спеціаліст з гештальт-терапії

          Про мене: Я сертифікований терапевт з [кількість років] досвіду в гештальт-терапії. Моя практика орієнтована на підтримку людей у пошуку внутрішнього балансу та глибшого розуміння себе. Я вірю, що кожна людина має унікальний потенціал, і моя роль полягає в тому, щоб допомогти вам виявити та реалізувати його. Я використовують індивідуальний підхід до кожного клієнта, враховуючи його особисті потреби та життєві обставини.</p>
      </div>

    </div>
  );
};

export default WelcomeTile;
