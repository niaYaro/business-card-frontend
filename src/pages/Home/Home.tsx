import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import style from './Home.module.scss';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import ServiceGaleryTile from '../../components/ServiceGaleryTile/ServiceGaleryTile';
import WelcomeTile from '../../components/WelcomeTile/WelcomeTile';
import individualSessionImg from '../../assets/images/individual_session.png';
import groupSessionImg from '../../assets/images/group_session.png';
import coupleTherapyImg from '../../assets/images/couple_therapy.png';
import onlineTherapyImg from '../../assets/images/online_therapy.png';
import Heading from '../../components/Heading/Heading';
import UList from '../../components/UList/UList';
import Dropdown from '../../components/Dropdown/Dropdown';
import ContactForm from '../../components/ContactForm/ContactForm';




const Home: React.FC = () => {
    return (
        <>
            <WelcomeTile />
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={style.defaultSwiper}>
                    <ServiceGaleryTile img={individualSessionImg}>
                        <h2>Індивідуальні консультації</h2>
                        <p>Під час сесій ми зосередимось на ваших переживаннях, думках і почуттях, щоб краще зрозуміти їх і знайти шляхи для розвитку.</p>
                        <div className={style.buttonWrapper}>
                            <a href="/test" className={style.button}>Детальнише</a>
                        </div>
                    </ServiceGaleryTile>
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceGaleryTile img={groupSessionImg}>
                        <h2>Групові сеанси</h2>
                        <p>Групова терапія надає можливість поділитися досвідом з іншими, що може допомогти у виявленні нових перспектив та підтримці.</p>
                        <div className={style.buttonWrapper}>
                            <a href="/test" className={style.button}>Детальнише</a>
                        </div>
                    </ServiceGaleryTile>
                </SwiperSlide>
                <SwiperSlide className={style.serviceTile}>
                    <ServiceGaleryTile img={coupleTherapyImg}>
                        <h2>Терапія для пар</h2>
                        <p>Я допомагаю парам розвивати здорову комунікацію та розуміння один одного, щоб зміцнити їхні стосунки.</p>
                        <div className={style.buttonWrapper}>
                            <a href="/test" className={style.button}>Детальнише</a>
                        </div>
                    </ServiceGaleryTile>
                </SwiperSlide>
                <SwiperSlide className={style.serviceTile}>
                    <ServiceGaleryTile img={onlineTherapyImg}>
                        <h2>Онлайн-терапія</h2>
                        <p>У сучасному світі важливо мати доступ до підтримки в будь-який час. Я пропоную онлайн-сесії для зручності та доступності.</p>
                        <div className={style.buttonWrapper}>
                            <a href="/test" className={style.button}>Детальнише</a>
                        </div>
                    </ServiceGaleryTile>
                </SwiperSlide>
            </Swiper>
            <div>
                <Heading type='h1'>Чому обрати гештальт-терапію?</Heading>
                <Heading type='h2'>Чому обрати гештальт-терапію?</Heading>
                <Heading type='h3'>Чому обрати гештальт-терапію?</Heading>
                <Heading type='h4'>Чому обрати гештальт-терапію?</Heading>
                <UList>
                    Гештальт-терапія фокусується на вашому "тут і зараз", що дозволяє усвідомити ваші емоції, думки та поведінку в реальному часі. Цей підхід допомагає вам усвідомити, як минулий досвід впливає на ваше теперішнє життя. Завдяки гештальт-терапії ви зможете:
                    <li>Зрозуміти свої потреби та бажання.</li>
                    <li>Підвищити рівень самосвідомості.</li>
                    <li>Поліпшити стосунки з оточуючими.</li>
                    <li>Знайти нові способи подолання стресу та тривоги.</li>
                </UList>
            </div>
            <Dropdown details={'Гештальт-терапія — це психологічний підхід, який фокусується на усвідомленні та прийнятті власних почуттів, думок і поведінки. Це допомагає людям зрозуміти свої переживання в контексті "тут і зараз".'} summary={'Що таке гештальт-терапія?'}></Dropdown>
            <Dropdown details={'Гештальт-терапія може бути корисною при лікуванні тривоги, депресії, стресу, проблем у стосунках, а також для особистісного розвитку і самопізнання.'} summary={'Які проблеми може допомогти вирішити гештальт-терапія?'}></Dropdown>
            <Dropdown details={'Сеанс зазвичай триває від 50 до 90 хвилин. Під час сесії ви матимете можливість відкрито говорити про свої переживання, а я допоможу вам зрозуміти їх та знайти нові рішення.'} summary={'Як проходить сеанс терапії?'}></Dropdown>
            <Dropdown details={'Кількість сеансів варіюється в залежності від ваших потреб і цілей. Деякі люди відвідують терапію лише кілька разів, інші — протягом кількох місяців або навіть років.'} summary={'Скільки сеансів мені знадобиться?'}></Dropdown>
            <Dropdown details={'Так, всі сесії є конфіденційними. Я дотримуюсь етичних стандартів, які гарантують захист вашої приватності.'} summary={'Чи конфіденційні ваші сесії?'}></Dropdown>
            <Dropdown details={'Так, я пропоную онлайн-сесії через зручні для вас платформи, що забезпечує доступність терапії в будь-який час і з будь-якого місця.'} summary={'Чи можу я записатися на онлайн-терапію?'}></Dropdown>
            <Dropdown details={'Ви можете зв\'язатися зі мною за телефоном або електронною поштою, зазначеними на сайті. Я відповім на ваші запитання і допоможу призначити зручний час для сеансу.'} summary={'Як записатися на консультацію?'}></Dropdown>

            <ContactForm />
        </>
    );
};

export default Home;
