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
                <h2>Чому обрати гештальт-терапію?</h2>
                <ul>
                    Гештальт-терапія фокусується на вашому "тут і зараз", що дозволяє усвідомити ваші емоції, думки та поведінку в реальному часі. Цей підхід допомагає вам усвідомити, як минулий досвід впливає на ваше теперішнє життя. Завдяки гештальт-терапії ви зможете:
                    <li>Зрозуміти свої потреби та бажання.</li>
                    <li>Підвищити рівень самосвідомості.</li>
                    <li>Поліпшити стосунки з оточуючими.</li>
                    <li>Знайти нові способи подолання стресу та тривоги.</li>
                </ul>
            </div>
        </>
    );
};

export default Home;
