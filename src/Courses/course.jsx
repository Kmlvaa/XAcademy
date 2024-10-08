import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

export default function course() {
  return (
    <>
      <div className='Course text-center mt-40 mb-16'>
        <p className='text-5xl font-bold'>Kurslarımız</p>
      </div>
      <div className='grid grid-cols-3 gap-5 justify-center px-24 py-10 max-[550px]:px-10 max-[1200px]:grid-cols-2 max-[850px]:grid-cols-1 items-center'>
        {Data?.map((item) => {
          return (
            <div className='max-[1400px]:w-auto  max-[1400px]:h-auto w-px400 h-px450 mb-10 rounded-md shadow-shadowCustom1 p-4'>
              <div className='border-2 bg-blue-600 h-px300 rounded-md max-[1400px]:h-px270'></div>
              <div className='flex flex-col justify-start'>
                <div className='pt-7 pb-3'>
                  <NavLink to='/layout/UX_UI'><p className='text-blue-700 font-bold text-2xl cursor-pointer'>{item.Course}</p></NavLink>
                </div>
                <div className='flex flex-row justify-between items-center text-sm text-gray-500'>
                  <p>Təlimçi: {item.Teacher}</p>
                  <p><NavLink to='/layout/frontend' className="flex flex-row items-center hover:text-blue-700"><span className='mr-1'>Daha çox </span> <ArrowRight /></NavLink></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

const Data = [
  {
    ID: "1",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "2",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "3",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "4",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "5",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "6",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "7",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "8",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },
  {
    ID: "9",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
  },

]
