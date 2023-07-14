import React from 'react';
import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function WhyMe() {
    const swiperRef = useRef();

    return (
        <section className="why-me">
            <div className="container">
                <h2 className="why-me__s-title s-title">Почему именно мы</h2>
                <div className="why-me__main-wrap">
                    <div className="why-me__sl-arrows sl-arrows">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="sl-arrows__arrow sl-arrows__arrow--prev"></div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="sl-arrows__arrow sl-arrows__arrow--next"></div>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        spaceBetween={50}
                        slidesPerView={3}

                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            960: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        <SwiperSlide className="why-me__slide">
                            <div className="why-me__slide-body">
                                <div className="why-me__ico">
                                    <img src="./images/svg/ico-why-me-1.svg" alt="" />
                                </div>
                                <div className="why-me__desc">
                                    Высокая и оперативная скорость обработки заявки
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="why-me__slide">
                            <div className="why-me__slide-body">
                                <div className="why-me__ico">
                                    <img src="./images/svg/ico-why-me-2.svg" alt="" />
                                </div>
                                <div className="why-me__desc">
                                    Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="why-me__slide">
                            <div className="why-me__slide-body">
                                <div className="why-me__ico">
                                    <img src="./images/svg/ico-why-me-3.svg" alt="" />
                                </div>
                                <div className="why-me__desc">
                                    Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="why-me__slide">
                            <div className="why-me__slide-body">
                                <div className="why-me__ico">
                                    <img src="./images/svg/ico-why-me-3.svg" alt="" />
                                </div>
                                <div className="why-me__desc">
                                    Тестовый слайд 
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="why-me__bg"></div>
            </div>
        </section >
    )
}