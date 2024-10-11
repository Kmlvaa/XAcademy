import React, { useState } from 'react'
import banner from '../../Assets/karierbanner.png'
import up from '../../Assets/chevron-up.svg'
import down from '../../Assets/chevron-down.svg'
import { Divider } from '@chakra-ui/react'
import icon from '../../Assets/icon2.png'
import coworker1 from '../../Assets/cworking.jpeg'
import coworker2 from '../../Assets/cworking2.jpeg'
import Mezun from '../../Assets/mezun.jpeg'

export default function Index() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleClick = () => 
        setShow(!show);

    const handleClick2 = () => 
        setShow2(!show2);

    const handleClick3 = () => 
        setShow3(!show3);

    const handleClick4 = () => 
        setShow4(!show4);

    return (
        <div className='my-40 mx-28'>
            <div className='flex flex-row items-center justify-between gap-4'>
                <div className='w-px800'>
                    <h1 className='font-bold text-5xl mb-4'>Karyera</h1>
                    <p className='text-gray-500'>Academy X-də yaradılan Karyera Planlama Mərkəzi, məzunlarımızın potensiallarını gerçəkləşdirmələri və iş həyatına uğurla atılmaları üçün dəstək verən xüsusi bir bölmədir.</p>
                </div>
                <div>
                    <img src={banner} width={500} height={500} />
                </div>
            </div>
            <div className='mt-32'>
                <h1 className='font-bold text-5xl mb-20'>Karyera yönləndirmə</h1>
                <div>
                    <ul>
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Akademik məsləhət</p>
                            <div onClick={handleClick} className='cursor-pointer'>
                                {show ? <img src={up} className='w-10 h-10' />
                                    : <img src={down} className='w-10 h-10' />}
                            </div>
                        </li>
                        <Divider />
                        {show ?
                            <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 Transition'>
                                <img src={icon} width={60} height={60} />
                                <p className='text-gray-500 font-semibold text-balance'>Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.</p>
                            </div>
                            : <></>}
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Praktik təcrübə</p>
                            <div onClick={handleClick2} className='cursor-pointer'>
                                {show2 ? <img src={up} className='w-10 h-10' />
                                    : <img src={down} className='w-10 h-10' />}
                            </div>
                        </li>
                        <Divider />
                        {show2 ?
                            <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 Transition'>
                                <img src={icon} width={60} height={60} />
                                <p className='text-gray-500 font-semibold text-balance'>Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.</p>
                            </div>
                            : <></>}
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Mentorluq proqramı</p>
                            <div onClick={handleClick3} className='cursor-pointer'>
                                {show3 ? <img src={up} className='w-10 h-10' />
                                    : <img src={down} className='w-10 h-10' />}
                            </div>
                        </li>
                        <Divider />
                        {show3 ?
                            <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 Transition'>
                                <img src={icon} width={60} height={60} />
                                <p className='text-gray-500 font-semibold text-balance'>Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.</p>
                            </div>
                            : <></>}
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Şəxsi inkişaf</p>
                            <div onClick={handleClick4} className='cursor-pointer'>
                                {show4 ? <img src={up} className='w-10 h-10' />
                                    : <img src={down} className='w-10 h-10' />}
                            </div>
                        </li>
                        <Divider />
                        {show4 ?
                            <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 Transition'>
                                <img src={icon} width={60} height={60} />
                                <p className='text-gray-500 font-semibold text-balance'>Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.</p>
                            </div>
                            : <></>}
                    </ul>
                </div>
            </div>
            <div className='mt-56'>
                <div className='flex flex-row items-start mb-20 gap-10'>
                    <div>
                        <h1 className='font-bold text-4xl mb-5'>Müsahibəyə hazırlıq</h1>
                        <p className='text-gray-500'>İş müsahibələrinə hazırlıq prosesi, sınaq müsahibələri keçirməklə və strateji məsləhətlər təqdim etməklə tələbələrin öz bacarıqlarını artırmalarına kömək edir.</p>
                    </div>
                    <div>
                        <img src={coworker1} className='w-px1000 h-px400 rounded-xl'/>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-10'>
                    <div>
                        <img src={coworker2} className='w-px1000 h-px400 rounded-xl'/>
                    </div>
                    <div className='mr-10 text-end'>
                        <h1 className='font-bold text-4xl mb-5'>Müsahibəyə hazırlıq</h1>
                        <p className='text-gray-500'>Karyera planlaması, fərdin peşə məqsədlərini müəyyənləşdirərək, bacarıqlarını inkişaf etdirmək və uğur qazanmaq üçün strategiyalar hazırlama prosesidir.</p>
                    </div>
                </div>
            </div>
            <div className='mt-40 text-center mx-40'>
                <div className='mb-20'>
                    <p className='font-semibold text-4xl'>Məzunlarımız</p>
                </div>
                <div className='grid grid-cols-6 items-center justify-items-center mb-14 gap-20 max-[1200px]:grid-cols-4'>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                    <img src={Mezun} className='w-px100 h-px100 rounded-full'/>
                </div>
            </div>
        </div>
    )
}
