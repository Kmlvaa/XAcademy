import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import Instagram from '../../Assets/in.png'
import Youtube from '../../Assets/you.png'
import Linkedin from '../../Assets/lk.png'
import Facebook from '../../Assets/fb.png'
import Apply from '../../Components/Apply/Apply'

export default function index() {
  return (
    <>
      <div className='Course text-center mt-40 mb-16'>
        <p className='text-5xl font-bold'>Müəllimlərimiz</p>
      </div>
      <div className='grid grid-cols-3 gap-5 justify-center px-24 py-10 max-[550px]:px-10 max-[1200px]:grid-cols-2 max-[850px]:grid-cols-1 items-center'>
        {Data?.map((item) => {
          return (
            <div className='max-[1400px]:w-auto  max-[1400px]:h-auto w-px400 h-px500 mb-10 rounded-md shadow-shadowCustom1 p-4'>
              <div className='border-2 bg-blue-500 h-px300 rounded-md max-[1400px]:h-px270'></div>
              <div className='flex flex-col justify-start'>
                <div className='pt-7 pb-2'>
                  <NavLink to={`/layout/teacher/${item.ID}`}><p className='text-blue-800 font-bold text-2xl cursor-pointer hover:underline'>{item.FullName}</p></NavLink>
                </div>
                <div className='mb-4'>
                  <p>{item.Profession}</p>
                </div>
                <div className='flex flex-row justify-between items-center text-sm text-gray-500'>
                  <div className='flex flex-row items-center justify-between w-48'>
                    <img src={Instagram} width={40} height={40} className="hover:cursor-pointer" />
                    <img src={Linkedin} width={40} height={40} className="hover:cursor-pointer" />
                    <img src={Youtube} width={40} height={40} className="hover:cursor-pointer" />
                    <img src={Facebook} width={40} height={40} className="hover:cursor-pointer" />
                  </div>
                  <p><NavLink to={`/layout/teacher/${item.ID}`} className="flex flex-row items-center hover:text-blue-700"><span className='mr-1'>Daha çox </span> <ArrowRight /></NavLink></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Apply />
    </>
  )
}

const Data = [
  {
    ID: "1",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "2",
    FullName: "Aygün Sirvanova",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "3",
    FullName: "Mələk Hacıməmmədova",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "4",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "5",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "6",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "7",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "8",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
  {
    ID: "9",
    FullName: "Ismət Qədirov",
    Profession: "Qrafik Dizayner",
  },
]
