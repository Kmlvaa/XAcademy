import React, { useState } from 'react'
import banner from '../../Assets/karierbanner.png'
import up from '../../Assets/chevron-up.svg'
import down from '../../Assets/chevron-down.svg'
import { Divider } from '@chakra-ui/react'
import icon from '../../Assets/icon2.png'

export default function Index() {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div className='my-40 mx-28'>
            <div className='flex flex-row items-center justify-between gap-4'>
                <div className='w-px800'>
                    <h1 className='font-bold text-5xl'>Karyera</h1>
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
                            <div onClick={handleClick} className='cursor-pointer transition-transform'>
                                {show ? <img src={up} className='w-10 h-10' />
                                    : <img src={down} className='w-10 h-10' />}
                            </div>
                        </li>
                        <Divider />
                        {show ?
                            <div className='flex flex-row place-items-start justify-start gap-4 ml-10 mt-5 mb-20 transition-all'>
                                <img src={icon} width={60} height={60} />
                                <p className='text-gray-500 font-semibold text-balance'>Kursumuzun karyera dəstəyi, tələbələrə iş dünyasına keçid prosesində bütünlüklə kömək etməyi hədəfləyir. Biz, iştirakçılarımızın fərdi bacarıqlarını və maraqlarını nəzərə alaraq, onlara uyğun peşə sahələri seçməkdə və inkişaf etdirməkdə dəstək veririk. Karyera dəstəyi çərçivəsində CV yazımı, müsahibə hazırlığı və iş axtarış strategiyaları kimi vacib məsələlərdə ətraflı məsləhətlər təqdim edirik. Eyni zamanda, mentorlarımız vasitəsilə şəbəkələşmə imkanları yaradaraq, tələbələrin iş mühitində tanınmalarını və əlaqələr qurmalarını təşviq edirik. Məqsədimiz, tələbələrin potensiallarını maksimum dərəcədə dəyərləndirərək, uğurlu bir karyera yolunda irəliləmələrinə dəstək olmaqdır.</p>
                            </div>
                            : <></>}
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Praktik təcrübə</p>
                            <div>
                                <img src={down} className='w-10 h-10' />
                            </div>
                        </li>
                        <Divider />
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Mentorluq proqramı</p>
                            <div>
                                <img src={down} className='w-10 h-10' />
                            </div>
                        </li>
                        <Divider />
                        <li className='flex flex-row justify-between items-center py-10'>
                            <p className='font-bold text-lg'>Şəxsi inkişaf</p>
                            <div>
                                <img src={down} className='w-10 h-10' />
                            </div>
                        </li>
                        <Divider />
                    </ul>
                </div>
            </div>
        </div>
    )
}
