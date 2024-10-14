import React, { useEffect, useState } from 'react'
import Photo from '../../Assets/pngegg 1.png'
import icon1 from '../../Assets/front-icon.png'
import icon2 from '../../Assets/icon2.png'
import icon from '../../Assets/icon.svg'
import { NavLink, useParams } from 'react-router-dom'

export default function Index() {

    const params = useParams()

    const details = courses.filter(course =>
        course.id == params.id
    )
    console.log(details)

    const filteredCourses = courses.filter(course =>
        course.id != params.id
    )

    return (
        <div className='mx-28 mt-20 max-lg:mx-5'>
            <div className='flex flex-row items-center justify-between rounded-3xl max-md:!flex-col max-md:bg-gray-200 max-md:text-center '>
                <div className='w-2/3'>
                    <div className='mb-14 mt-3'>
                        <p className='text-blue-600 text-7xl max-md:text-4xl'>{details?.[0].title}</p>
                    </div>
                    <div className='mb-14 text-xl max-w-2xl max-md:text-md max-md:w-auto'>
                        <p>{details?.[0].review}</p>
                    </div>
                    <button className='bg-blue-700 text-white px-5 py-2 border-0 rounded-md'>Indi təlimə qoşul</button>
                </div>
                <div>
                    <img src={Photo} width={500} height={500} className='max-md:w-px400 max-md:h-px300 mt-5'/>
                </div>
            </div>
            <div className='w-auto h-0.5 my-28 bg-gray-300'></div>
            <div className='flex flex-col items-start'>
                <div className='mb-10 flex flex-row items-center'>
                    <img src={icon1} width={50} height={50} />
                    <p className='text-3xl font-bold ml-3'>Frontend Developer kimdir?</p>
                </div>
                <div className='mb-10'>
                    <p className='text-xl text-gray-700'>Front-end developer, veb səhifələrin görünən və istifadəçi qarşılıqlı əlaqəsində olan hissələrini kodlaşdıran mütəxəssisdir. Onlar HTML, CSS və JavaScript kimi texnologiyalardan istifadə edərək veb saytları və tətbiqləri inkişaf etdirir, istifadəçilərə estetik və funksional təcrübə təqdim edirlər. Front-end developerin əsas vəzifəsi saytların müxtəlif cihaz və brauzerlərdə düzgün işləməsini və sürətli yüklənməsini təmin etməkdir. Müasir dövrdə React, Vue və Angular kimi framework-lər front-end işini daha dinamik və çevik hala gətirir. Bu peşə həm texniki bilik, həm də dizayn anlayışı tələb edir.</p>
                </div>
                <div className='ml-3'>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30} />
                        <p className='ml-2'>UX/UI dizaynları HTML, CSS və JavaScript vasitəsilə funksional veb səhifələrə çevirmək.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30} />
                        <p className='ml-2'>Veb səhifələrin müxtəlif ekran ölçülərinə uyğun olaraq düzgün və gözəl görünməsini təmin etmək.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30} />
                        <p className='ml-2'>Veb saytın yüklənmə sürətini və performansını artırmaq üçün lazımi tədbirlər görmək.</p>
                    </div>
                </div>
            </div>
            <div className='OtherCourses my-20 grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {filteredCourses.map((course) => {
                    return (
                        <div className='card w-auto h-auto p-8 rounded-lg border-0  group hover:bg-sky-500 shadow-custom2'>
                            <div className='flex items-center justify-center w-full '>
                                <img src={icon} width={250} height={250} />
                            </div>
                            <div className='flex flex-col items-start mt-20'>
                                <NavLink to={`/layout/course/${course.id}`}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>{course.title}</p></NavLink>
                                <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                            </div>
                        </div>
                    )
                }).slice(0, 6)}
            </div>
        </div>
    )
}

const courses = [
    {
        id: 1,
        title: 'Frontend Developer',
        image: { icon },
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 2,
        title: 'UX/UI Designer',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 3,
        title: 'Marketing',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 4,
        title: 'IELTS',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 5,
        title: 'Backend Developer',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 6,
        title: 'Backend Developer1',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 7,
        title: 'Backend Developer3',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
    {
        id: 8,
        title: 'Backend Developer2',
        image: "../Assets/icon.svg",
        review: "Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.",
    },
]