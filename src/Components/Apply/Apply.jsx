import React from 'react'
import './Apply.css'

function Apply() {
    return (
        <div className='apply w-full h-80 my-24 text-skyBlue-200 mx-0 flex flex-col justify-center px-28 max-lg:px-20 max-md:h-auto max-md:py-20'>
            <div className='mb-14 max-[570px]:mb-7'>
                <p className='text-white text-4xl font-bold max-[285px]:text-3xl'>Müraciət et</p>
            </div>
            <div className='grid grid-cols-4 justify-between gap-5 max-lg:grid-cols-2 max-sm:!grid-cols-1'>
                <input placeholder='Ad soyadınız' className='py-2 px-4 rounded-md w-auto h-12 max-[570px]:h-10 max-[285]:h-10' />
                <input placeholder='055 000 00 00' className='py-2 px-4 rounded-md w-auto h-12 max-[570px]:h-10 max-[285]:h-10' />
                <input placeholder='Kursu seçin' className='py-2 px-4 rounded-md w-auto h-12 max-[570px]:h-10 max-[285]:h-10' />
                <button className='bg-blue-700 text-white py-2 text-center px-6 rounded-md h-12 w-40 max-[570px]:h-10 max-[570px]:py-1'>Sorğu gündər</button>
            </div>
        </div>
    )
}
export default Apply;
