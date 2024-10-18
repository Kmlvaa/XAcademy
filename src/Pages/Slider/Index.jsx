import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

import Reklam1 from '../../Assets/reklam1.webp'
import Reklam2 from '../../Assets/reklam2.webp'
import Reklam3 from '../../Assets/reklam3.webp'
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Index() {
    return (
        <div className='mt-14 px-28 flex flex-row items-start justify-evenly max-2xl:!px-0 max-xl:!flex-col'>
            <div className='flex flex-row'>
                <div>
                    {categories?.map((cat) => {
                        return (
                            <div className=''>
                                <div className="btn-group dropright">
                                    <button type="button" className="btn dropdown-toggle" data-toggle="dropright" aria-haspopup="true" aria-expanded="false">
                                        {cat.name}
                                    </button>
                                    <div className="dropdown-menu">
                                        <NavLink>{cat.name}</NavLink>
                                        <NavLink>{cat.name}</NavLink>
                                        <NavLink>{cat.name}</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    className="h-px500 w-px900"
                    freeMode={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false
                    }}
                    loop
                    grabCursor={true}
                    modules={[FreeMode, Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <img src={Reklam1} className='object-cover w-full h-full' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Reklam2} className='object-cover w-full h-full' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Reklam3} className='object-cover w-full h-full' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Reklam2} className='object-cover w-full h-full' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Reklam3} className='object-cover w-full h-full' />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='w-px300 h-px500 flex flex-col justify-between max-xl:flex-row '>
                <div>
                    <img src={Reklam1} className='object-cover w-full h-full' />
                </div>
                <div>
                    <img src={Reklam2} className='object-cover w-full h-full' />
                </div>
                <div>
                    <img src={Reklam3} className='object-cover w-full h-full' />
                </div>
            </div>
        </div>
    );
}

const categories = [
    {
        id: 1,
        name: 'Programming',
    },
    {
        id: 2,
        name: 'UX/UI Dizayn',
    },
    {
        id: 3,
        name: 'SMM',
    },
    {
        id: 4,
        name: 'Qrafik Dizayn',
    },
    {
        id: 5,
        name: 'IELTS',
    },
    {
        id: 4,
        name: 'Qrafik Dizayn',
    },
    {
        id: 5,
        name: 'Front-End',
    },
    {
        id: 4,
        name: 'C#',
    },
    {
        id: 5,
        name: 'Back-End',
    },
]