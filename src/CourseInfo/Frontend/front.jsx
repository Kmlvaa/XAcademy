import React from 'react'
import Photo from '../../Assets/html.png'
import icon1 from '../../Assets/front-icon.png'
import icon2 from '../../Assets/icon2.png'
import icon from '../../Assets/icon.svg'
import { NavLink } from 'react-router-dom'

export default function front() {
    return (
        <>
            <div className='flex flex-row items-center justify-between px-28 mt-40'>
                <div className='w-2/3'>
                    <div className='mb-14'>
                        <p className='text-blue-600 text-7xl'>Frontend Developer</p>
                    </div>
                    <div className='mb-14 text-xl max-w-2xl'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Interdum sed morbi semper euismod odio. Sollicitudin leo fusce lectus tellus adipiscing pellentesque nam. Vitae sed eget interdum non aliquam aliquam velit nec. Amet interdum varius justo donec sit mauris.
                        </p>
                    </div>
                    <button className='bg-blue-700 text-white px-5 py-2 border-0 rounded-md'>Indi təlimə qoşul</button>
                </div>
                <div>
                    <img src={Photo} width={500} height={500} />
                </div>
            </div>
            <div className='w-auto h-0.5 mx-28 my-28 bg-gray-300'></div>
            <div className='flex flex-col items-start px-28'>
                <div className='mb-10 flex flex-row items-center'>
                    <img src={icon1} width={50} height={50} />
                    <p className='text-3xl font-bold ml-3'>Front-End developer kimdir?</p>
                </div>
                <div className='mb-10'>
                    <p className='text-xl text-gray-700'>Front-end developer, veb səhifələrin görünən və istifadəçi qarşılıqlı əlaqəsində olan hissələrini kodlaşdıran mütəxəssisdir. Onlar HTML, CSS və JavaScript kimi texnologiyalardan istifadə edərək veb saytları və tətbiqləri inkişaf etdirir, istifadəçilərə estetik və funksional təcrübə təqdim edirlər. Front-end developerin əsas vəzifəsi saytların müxtəlif cihaz və brauzerlərdə düzgün işləməsini və sürətli yüklənməsini təmin etməkdir. Müasir dövrdə React, Vue və Angular kimi framework-lər front-end işini daha dinamik və çevik hala gətirir. Bu peşə həm texniki bilik, həm də dizayn anlayışı tələb edir.</p>
                </div>
                <div className='ml-3'>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30}/>
                        <p className='ml-2'>UX/UI dizaynları HTML, CSS və JavaScript vasitəsilə funksional veb səhifələrə çevirmək.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>Veb səhifələrin müxtəlif ekran ölçülərinə uyğun olaraq düzgün və gözəl görünməsini təmin etmək.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>Veb saytın yüklənmə sürətini və performansını artırmaq üçün lazımi tədbirlər görmək.</p>
                    </div>
                </div>
            </div>
            <div className='OtherCourses my-20 grid grid-cols-3 gap-4 px-28'>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-2 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>  
            </div>
        </>
    )
}
