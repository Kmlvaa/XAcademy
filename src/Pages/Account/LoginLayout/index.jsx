import React from 'react'
import Image from '../../../Assets/Login-cuate 1.svg'
import chatbot from '../../../Assets/chatboticon.png'
import { Outlet } from 'react-router-dom'

export default function Index() {
    return (
        <>
            <div className='mx-28 mt-40 flex flex-row justify-between items-center max-[1200px]:!mx-0'>
                <div className='max-[850px]:!hidden'>
                    <img src={Image} className='w-px400 h-px400 max-[850px]:!hidden' />
                </div>
                <Outlet />
            </div>
            <div className='absolute right-0 top-96'>
                <img src={chatbot} width={100} height={100} className='cursor-pointer'/>
            </div>
        </>
    )
}
