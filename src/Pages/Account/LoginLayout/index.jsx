import React from 'react'
import Image from '../../../Assets/Login-cuate 1.svg'
import chatbot from '../../../Assets/chatboticon.png'
import { Outlet } from 'react-router-dom'

export default function Index() {
    return (
        <>
            <div className='mx-28 mt-20 max-[1200px]:!mx-0 max-lg:my-72'>
                <div className='flex flex-row justify-between items-center max-lg:justify-center'>
                    <div className='max-lg:!hidden'>
                        <img src={Image} className='w-px400 h-px400 max-[850px]:!hidden' />
                    </div>
                    <Outlet />
                </div>
            </div>
            <div className='absolute right-0 top-96 max-lg:hidden'>
                <img src={chatbot} width={100} height={100} className='cursor-pointer' />
            </div>
        </>
    )
}
