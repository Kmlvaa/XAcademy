import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import Apply from '../../Components/Apply/Apply';

export default function course() {
  return (
    <>
      <div className='Course text-center mt-40 mb-16'>
        <p className='text-5xl font-bold'>Kurslarımız</p>
      </div>
      <div className='grid grid-cols-3 gap-5 justify-center px-24 py-10 max-[550px]:px-10 max-[1200px]:grid-cols-2 max-md:grid-cols-1 items-center max-sm:px-5'>
        {Data?.map((item) => {
          return (
            <div className='max-[1400px]:w-auto max-[1400px]:h-auto w-px400 h-px450 mb-10 rounded-md shadow-shadowCustom1 p-4'>
              <div className='border-2 bg-blue-600 h-px300 rounded-md max-[1400px]:h-px270'></div>
              <div className='flex flex-col justify-start'>
                <div className='pt-7 pb-3'>
                 <p className='text-blue-700 font-bold text-2xl cursor-pointer hover:underline'>{item.Course}</p>
                </div>
                <div className='flex flex-row justify-between items-center text-sm text-gray-500 max-sm:!flex-col max-sm:!items-start'>
                  <NavLink to={`/layout/teacher/${item.TeacherID}`}><p className='hover:text-orange-700'>Təlimçi: {item.Teacher}</p></NavLink>
                  <p><NavLink to={`/layout/course/${item.ID}`} className="flex flex-row items-center hover:text-blue-700"><span className='mr-1'>Daha çox </span> <ArrowRight /></NavLink></p>
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
    Course: "Frontend",
    Teacher: "Aygün Şirvanova",
    TeacherID: 1,
  },
  {
    ID: "2",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
    TeacherID: 2,
  },
  {
    ID: "3",
    Course: "Marketing",
    Teacher: "Aygün Şirvanova",
    TeacherID: 3,
  },
  {
    ID: "4",
    Course: "IELTS",
    Teacher: "Aygün Şirvanova",
    TeacherID: 4,
  },
  {
    ID: "5",
    Course: "Backend",
    Teacher: "Aygün Şirvanova",
    TeacherID: 5,
  },
  {
    ID: "6",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
    TeacherID: 1,
  },
  {
    ID: "7",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
    TeacherID: 1,
  },
  {
    ID: "8",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
    TeacherID: 1,
  },
  {
    ID: "9",
    Course: "UX/UI dizayn təlimi",
    Teacher: "Aygün Şirvanova",
    TeacherID: 1,
  },

]
