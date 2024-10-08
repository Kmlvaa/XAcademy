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
                        <p className='text-blue-600 text-7xl'>Q&A manual</p>
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
                    <p className='text-3xl font-bold ml-3'>Q&A mütəxəssisi</p>
                </div>
                <div className='mb-10'>
                    <p className='text-xl text-gray-700'>Keyfiyyətin Təminatı, proqram təminatının keyfiyyətli, etibarlı və düzgün işləməsini təmin etmək üçün həyata keçirilən prosesdir. Q&A mütəxəssisləri, proqramın istənilən funksional və texniki tələblərə cavab verib-vermədiyini yoxlayırlar. Bu prosesdə həm avtomatlaşdırılmış testlər, həm də əl ilə (manual) testlər istifadə olunur. Q&A-nın əsas məqsədi, proqram təminatının mümkün olan səhvlərini aşkar etmək və onları aradan qaldırmaq üçün proqramçılara geri dönüş verməkdir.</p>
                </div>
                <div className='ml-3'>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2} width={30} height={30}/>
                        <p className='ml-2'>Proqram təminatının keyfiyyətini yoxlamaq üçün detallı test planları hazırlamaq, test ssenariləri və test halları yaratmaq</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>Proqram təminatında aşkar edilən səhvləri sənədləşdirmək, proqramçılara geri dönüş verərək səhvlərin düzəldilməsini təmin etmək</p>
                    </div>
                    <div className='text-xl mb-4 flex flex-row items-center'>
                        <img src={icon2}  width={30} height={30}/>
                        <p className='ml-2'>Proqramın funksionallığını, sürətini, stabil işləməsini və istifadəçi tələblərinə cavab verdiyini yoxlamaq üçün müxtəlif test üsullarından istifadə etmək</p>
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
