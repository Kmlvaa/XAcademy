import React from 'react'
import Teacher from '../Assets/teacher1.png'
import Instagram from '../Assets/in.png'
import Youtube from '../Assets/you.png'
import Linkedin from '../Assets/lk.png'
import Facebook from '../Assets/fb.png'

export default function Index() {
    return (
        <>
            <div className='mx-28 border-1 border-blue-600 w-auto mt-44 h-px600 bg-TeacherBG flex flex-row justify-between p-8 items-center'>
                <div className='Left flex flex-col items-center justify-center w-px400'>
                    <div className='w-px300 h-px300 rounded-md'><img src={Teacher} className='w-full h-full object-cover' /></div>
                    <div className='flex flex-row items-center justify-between w-48 mt-3'>
                        <img src={Instagram} width={40} height={40} className="hover:cursor-pointer" />
                        <img src={Linkedin} width={40} height={40} className="hover:cursor-pointer" />
                        <img src={Youtube} width={40} height={40} className="hover:cursor-pointer" />
                        <img src={Facebook} width={40} height={40} className="hover:cursor-pointer" />
                    </div>
                    <div className='flex flex-col '>
                        <button className='text-logoBlue border-1 py-2 px-5 mt-14 cursor-pointer text-base rounded-lg border-logoBlue'>Promo kodu daxil et</button>
                        <button className='text-white border-1 py-2 px-5 mt-2 cursor-pointer text-base rounded-lg bg-logoBlue'>Müraciət et</button>
                    </div>
                </div>
                <div className='Right bg-white w-px800 h-px500 rounded-md px-10 py-12'>
                    <h1 className='text-logoBlue text-4xl font-bold mb-2'>Aygün Şirvanova</h1>
                    <p className='text-orange-600 mb-3'>Təlimçi</p>
                    <p className='mb-3'>Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa.</p>
                    <p className='mb-3'>Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo lectus magna fringilla.</p>
                    <h1 className='text-logoBlue text-2xl font-bold mb-3'>UX/UI Dİzayn təlimi</h1>
                    <p>Kurs müddəti: 48 saat</p>
                    <p>Qiymət: 249 AZN (aylıq)</p>
                    <div className='mt-3'>
                        <p className='text-logoBlue text-2xl font-bold'>249 AZN</p>
                    </div>
                </div>
            </div>
        </>
    )
}
