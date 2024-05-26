import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Stations = () => {
    return (
        <div className='bg-base-200 '>
            <h1 className='text-center font-bold text-4xl text-red-500 mt-9'>KNOW YOUR STATION</h1>
            <div className="flex justify-evenly mt-8">

                <h1> <button className="btn btn-outline">ALL</button></h1>
                <h1> <button className="btn btn-outline">Dhaka</button></h1>
                <h1><button className="btn btn-outline">Chittagong</button></h1>
                <h1><button className="btn btn-outline">Sylhet</button> </h1>
                <h1><button className="btn btn-outline">Khulna</button></h1>
                <h1><button className="btn btn-outline">Mymensingh</button></h1>

            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-full' src="https://www.shutterstock.com/image-photo/october-14-2023-coxs-bazar-600nw-2377056263.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://live.staticflickr.com/3852/14449590945_345cd15acc_b.jpg" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://images.unsplash.com/photo-1592844002373-a55ecd7af140?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcmFpbHdheXxlbnwwfHwwfHx8MA%3D%3D" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://pics.craiyon.com/2023-07-14/e53939cfe61643d0aed6420702995680.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://www.shutterstock.com/image-photo/october-14-2023-coxs-bazar-600nw-2377056263.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-full' src="https://www.shutterstock.com/image-photo/october-14-2023-coxs-bazar-600nw-2377056263.jpg" />
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Stations;



