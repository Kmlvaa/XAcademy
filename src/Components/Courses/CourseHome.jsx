import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import ModalHome from '../Modal/ModalHome'
import icon from '../../Assets/icon.svg'
import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'react-bootstrap-icons'


function CourseHome() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [course, setCourse] = useState('');
    const [CourseId, setCourseId] = useState(0);

    function handleClick(name, id) {
        onOpen();
        setCourse(name);
        setCourseId(id)
    }

    return (
        <>
            <div className='PopularCourses flex flex-col px-28 max-lg:px-5'>
                <div className='flex flex-row justify-between items-end mb-14 max-sm:!flex-col max-sm:items-start max-sm:gap-5'>
                    <div className='text-3xl flex flex-col'>
                        <p>Məşhur</p>
                        <p>Kurslarımızı Kəşf Et</p>
                    </div>
                    <div className='text-gray-600 text-sm cursor-pointer hover:text-skyBlue'><NavLink to='/layout/course' className="flex flex-row items-center"><span className='mr-1'>Bütün kursları gör</span> <ArrowRight /></NavLink></div>
                </div>
                <div className='grid grid-cols-3 max-lg:!hidden'>
                    {CourseInfo.map((item) => {
                        return (
                            <div className='border-gray200 border-2 w-auto h-20 mr-5 mb-3 rounded-md flex flex-row group max-md:mr-0 hover:bg-skyBlue hover:cursor-pointer'>
                                <div className='flex items-center p-8'> <img src={icon} width={40} height={40} /> </div>
                                <div className='flex  flex-col justify-center'>
                                    <p className='text-skyBlue font-semibold group-hover:text-white' onClick={() => handleClick(item.Course, item.Id)}>{item.Course}</p>
                                    <p className='text-gray500 text-sm group-hover:text-gray700'>{item.Deskription}</p>
                                </div>
                            </div>
                        )
                    })}
                    <ModalHome onClose={onClose} isOpen={isOpen} Course={course} id={CourseId} />
                </div>
                <div className='grid-cols-4 max-lg:gap-10 hidden max-lg:grid max-md:grid-cols-3 max-sm:grid-cols-2'>
                    {CourseInfo.map((item) => {
                        return (
                            <div className='border-gray-200 border-1 w-auto h-60 rounded-2xl flex flex-col items-center justify-center shadow-inset group'>
                                <div className='flex items-center p-8 mb-3'> <img src={icon} width={120} height={120} /></div>
                                <div>
                                    <p className='text-skyBlue font-semibold text-2xl group-hover:text-blue-600 hover:cursor-pointer' onClick={() => handleClick(item.Course, item.Id)}>{item.Course}</p>
                                </div>
                            </div>
                        )
                    }).slice(0, 8)}
                    <ModalHome onClose={onClose} isOpen={isOpen} Course={course} id={CourseId} />
                </div>
            </div>
        </>
    )
}

const CourseInfo = [
    {
        Id: 1,
        Course: "Marketinq",
        Deskription: "Gələcək burada"
    },
    {
        Id: 2,
        Course: "UX/UI Dizayn",
        Deskription: "Daha gözəl interfeys"
    },
    {
        Id: 3,
        Course: "Qrafik Dizayn",
        Deskription: "İnteraktiv & Görüntü"
    },
    {
        Id: 4,
        Course: "Satış Təlimləri",
        Deskription: "Satışlarını bizimlə artır"
    },
    {
        Id: 5,
        Course: "Frontend",
        Deskription: "Mütəxəssis ol"
    },
    {
        Id: 6,
        Course: "Backend",
        Deskription: "Mühəndis olmağa tələs"
    },
    {
        Id: 7,
        Course: "QA & Manual",
        Deskription: "Problemləri həll et"
    },
    {
        Id: 8,
        Course: "IELTS",
        Deskription: "İngiliscə öyrən"
    },
    {
        Id: 9,
        Course: "Digital Marketinq",
        Deskription: "Rəqəmsal dünyaya addımla"
    },
]

export default CourseHome;
