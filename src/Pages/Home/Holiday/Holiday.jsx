
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Style.css';


import { EffectCoverflow, Pagination } from 'swiper/modules';

const Holiday = () => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-center font-bold text-4xl text-red-500 mt-8'>HOLIDAY</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-full' src="https://blog.flyticket.com.bd/wp-content/uploads/2019/06/sajek-valley-1-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://miro.medium.com/v2/resize:fit:2000/1*vfu6g5V-aNZQn4w68yqQpA.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://pathfriend-bd.com/wp-content/uploads/2019/10/Buddhist-Heritage-in-Bangladesh.gif" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://i.pinimg.com/originals/db/3c/05/db3c05be7c2b804222e13ce5c293073f.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://cdn.educba.com/academy/wp-content/uploads/2023/01/Tourist-Places-in-Bangladesh-4-1.jpg" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Holiday;