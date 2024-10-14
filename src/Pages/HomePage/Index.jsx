import './index.css'
import icon from '../../Assets/icon.svg'
import youtube from '../../Assets/you.png'
import insta from '../../Assets/in.png'
import linkedin from '../../Assets//lk.png'
import facebook from '../../Assets/fb.png'
import { ArrowRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import Apply from '../../Components/Apply/Apply'
import CourseHome from '../../Components/Courses/CourseHome'

function Index() {

    return (
        <>
            <div className="flex flex-row mt-20">
                <div className="Hero-left p-24 max-w-screen-lg max-[1200px]:pl-5">
                    <div className='Hero-Text'>
                        <p className='text-7xl font-bold'>İndi qoşul</p>
                        <p className='text-7xl font-bold'>Ənənəvi dərslərimiz başladı</p>
                    </div>
                    <div>
                        <button className='text-white border-0 py-2 px-5 mt-14 cursor-pointer text-base rounded-lg bg-logoBlue'>Kurslara keçid edin</button>
                    </div>
                </div>
                <div className="Hero-right flex flex-col justify-center p-12 mr-10 h-auto max-w-xl max-lg:!hidden">
                    <div className='Hero-right-upper flex flex-row items-end justify-end mb-2'>
                        <div className='upper-left w-40 h-40 mr-2 rounded-3xl bg-cubBlue'></div>
                        <div className='upper-right w-56 h-56 rounded-3xl bg-Blue'></div>
                    </div>
                    <div className='Hero-right-lower flex flex-row'>
                        <div className='lower-left w-72 h-56 rounded-3xl mr-3 ml-4 bg-Blue'></div>
                        <div className='lower-right border-0 rounded-2xl pt-1 pl-3 mr-3 w-72 h-16 bg-cubBlue2'>
                            <p className='text-xl font-semibold'>Gələcək bizimdir.</p>
                            <p className='text-xl font-semibold'>Öz əllərimizdə</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-0.5 bg-slate-100 my-16 shadow-md shadow-gray-500'></div>
            <CourseHome />
            <div className="Courses px-28 mt-40 max-lg:px-5">
                <div className='mb-20 flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-3xl flex flex-col'>Kurslarımızı kəşf et</p>
                    </div>
                    <div>
                        <NavLink to='/layout/course'><p className='flex flex-row items-center'><span className='mr-2'>Bütün kurslar</span> <ArrowRight /></p></NavLink>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Swiper breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        450: {
                            slidesPerView: 1.5,
                        },
                        760: {
                            slidesPerView: 2.5,
                        },
                        830: {
                            slidesPerView: 2.7,
                            spaceBetween: 0,
                        },
                        950: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1010: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1300: {
                            slidesPerView: 3.5,
                            spaceBetween: 0
                        },
                        1170: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }
                    }}
                        freeMode={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop
                        pagination={true}
                        grabCursor={true}
                        modules={[FreeMode, Autoplay]}
                    >
                        {courses?.map((course) => {
                            return (
                                <SwiperSlide key={course.id}>
                                    <div className='card max-[1300px]:w-px300 w-px350 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2'>
                                        <div className='flex items-center justify-center w-full '>
                                            <img src={icon} width={250} height={250} />
                                        </div>
                                        <div className='flex flex-col items-start mt-20'>
                                            <NavLink to={`/layout/course/${course.id}`}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>{course.name}</p></NavLink>
                                            <p className='text-sm text-gray-500 group-hover:text-black'>{course.review}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div className="Teachers px-28 mt-40 max-lg:px-5">
                <div className='mb-20 flex flex-row justify-between items-center'>
                    <div>
                        <p className='text-3xl flex flex-col'>Müəllimlərimiz</p>
                    </div>
                    <div>
                        <NavLink to='/layout/teachers'><p className='flex flex-row items-center'><span className='mr-2'>Bütün müəllimlər</span> <ArrowRight /></p></NavLink>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <Swiper breakpoints={{
                         0: {
                            slidesPerView: 1,
                        },
                        450: {
                            slidesPerView: 1.5,
                        },
                        760: {
                            slidesPerView: 2.5,
                        },
                        830: {
                            slidesPerView: 2.7,
                            spaceBetween: 0,
                        },
                        950: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1010: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1300: {
                            slidesPerView: 3.5,
                            spaceBetween: 0
                        },
                        1170: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }
                    }}
                        freeMode={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop
                        navigation={true}
                        grabCursor={true}
                        modules={[FreeMode, Autoplay, Pagination]}
                    >
                        {teachers?.map((teacher) => {
                            return (
                                <SwiperSlide key={teacher.name}>
                                    <div className='card max-[1300px]:w-px300 w-px350 h-[420px] p-8 rounded-md  grou border-gray-200 border-2'>
                                        <div className='flex items-center justify-center w-full '>
                                            <div className='w-[250px] h-[250px] bg-red-300 rounded-md'></div>
                                        </div>
                                        <div className='flex flex-col items-center mt-4'>
                                            <NavLink to={`/layout/teacher/${teacher.id}`}><p className='text-sky-500 font-semibold text-2xl mb-1 cursor-pointer hover:text-blue-700'>{teacher.name}</p></NavLink>
                                            <p className='text-sm text-gray-500'>{teacher.subject}</p>
                                            <div className='flex flex-row items-center gap-2 mt-3'>
                                                <img src={insta} width={20} height={20} className='cursor-pointer' />
                                                <img src={youtube} width={20} height={20} className='cursor-pointer' />
                                                <img src={linkedin} width={20} height={20} className='cursor-pointer' />
                                                <img src={facebook} width={20} height={20} className='cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <Apply />
        </>
    );
}

const teachers = [
    {
        id: 1,
        name: 'İsmət Qədirov1',
        subject: 'Qrafik Dizayner'
    },
    {
        id: 2,
        name: 'Aygün Şirvanova',
        subject: 'Qrafik Dizayner'
    },
    {
        id: 3,
        name: 'Mələk Hacıməmmədova',
        subject: 'C#'
    },
    {
        id: 4,
        name: 'Aynaz Ələkbərli',
        subject: 'Marketinq'
    },
    {
        id: 5,
        name: 'İsmət Qədirov5',
        subject: 'Qrafik Dizayner'
    },
]


const courses = [
    {
        id: 1,
        name: 'Frontend',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum...",
    },
    {
        id: 2,
        name: 'UX/UI Designer',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum...",
    },
    {
        id: 3,
        name: 'Marketing',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum...",
    },
    {
        id: 4,
        name: 'IELTS',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum...",
    },
    {
        id: 5,
        name: 'Backend',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum...",
    },

]

export default Index;