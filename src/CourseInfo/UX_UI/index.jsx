import React from 'react'
import Photo from '../../Assets/html.png'
import icon1 from '../../Assets/front-icon.png'
import icon2 from '../../Assets/icon2.png'
import icon from '../../Assets/icon.svg'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <>
            <div className='flex flex-row items-center justify-between px-28 mt-40'>
                <div className='w-2/3'>
                    <div className='mb-14'>
                        <p className='text-blue-600 text-7xl'>UX/UI dizayn</p>
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
                    <p className='text-3xl font-bold ml-3'>UX/Uİ dizayner kimdir?</p>
                </div>
                <div className='mb-10'>
                    <p className='text-xl text-gray-700'>UX/UI dizayner, istifadəçilərə intuitiv və funksional rəqəmsal təcrübələr yaratmaqla məşğul olan mütəxəssisdir. UX dizayneri, istifadəçi təcrübəsini optimallaşdırmaq məqsədi ilə bir məhsulun strukturunu və funksional axınını qurur, istifadəçinin ehtiyaclarını və davranışlarını nəzərə alaraq proseslər hazırlayır. UI dizayneri isə məhsulun vizual hissəsini, yəni düymələr, menyular, formalar və digər interfeys elementlərini estetik və istifadəyə uyğun şəkildə dizayn edir. UX/UI dizayn birlikdə işləyərək, məhsulun həm vizual olaraq cəlbedici, həm də istifadə baxımından rahat olmasını təmin edir. Bu sahədə əsas məqsəd, istifadəçilərin məhsul və ya veb tətbiqlə rahat və məmnuniyyət verici bir təcrübə yaşamasıdır.</p>
                </div>
                <div className='ml-3'>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30}/>
                        <p className='ml-2'>İstifadəçilərin ehtiyaclarını, davranışlarını və problemlərini araşdıraraq, məhsul və ya xidmət üçün uyğun təcrübə yaratmaq.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>İstifadəçi interfeysinin ilkin versiyalarını (wireframe və prototiplər) yaratmaq, dizayn prosesini başlatmaq və müştəri və ya komanda ilə paylaşmaq.</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>Düymələr, menyular, şriftlər və rəng palitrası kimi vizual elementləri hazırlayaraq məhsulun istifadəyə uyğun və cəlbedici olmasını təmin etmək.</p>
                    </div>
                </div>
            </div>
            <div className='OtherCourses my-20 grid grid-cols-3 gap-4 px-28'>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md border-0  group hover:bg-sky-500 border-gray-200 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-0 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-0 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-0 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-0 shadow-custom2'>
                    <div className='flex items-center justify-center w-full '>
                        <img src={icon} width={250} height={250} />
                    </div>
                    <div className='flex flex-col items-start mt-20'>
                        <NavLink to={'/layout/frontend'}><p className='text-sky-500 font-semibold text-2xl mb-1 group-hover:text-white cursor-pointer'>Frontend Developer</p></NavLink>
                        <p className='text-sm text-gray-500 group-hover:text-black'>Mütəxəssis ol</p>
                    </div>
                </div>
                <div className='card max-[1300px]:w-px300 w-px400 h-px400 p-8 rounded-md  group hover:bg-sky-500 border-gray-200 border-0 shadow-custom2'>
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
