import React from 'react'
import AboutImage from '../Assets/haqqimizda.jpeg'
import Check from '../Assets/check.png'
import './Index.css'
import Girl from '../Assets/girl.jpeg'
import Terefdas from '../Assets/terefdas.png'

export default function Index() {
    return (
        <>
            <div className='mt-48 px-28 flex flex-row items-center justify-between'>
                <div className='Left w-[550px] '>
                    <h1 className='text-6xl font-bold mb-4 leading-snug'>X Academy ilə Məqsədlərinə Çat</h1>
                    <p className='text-CustomGray font-semibold mb-10'>Hədəfləri itirdin, cəfəngiyat, şayiə, söhbətlər. Yoldaş, boş-boş vaxt itirmək, heç bir şey etməmək. Yaxşı bir söhbət etmək üçün əla fürsət, atışma, zarafat.</p>
                    <div className='ml-8'>
                        <div className='flex flex-row items-center mb-3 text-xl'>
                            <img src={Check} className='mr-2 w-5 h-5' />
                            <p>Təşkilatınızı inkişaf etdirin</p>
                        </div>
                        <div className='flex flex-row items-center mb-3 text-xl'>
                            <img src={Check} className='mr-2 w-5 h-5' />
                            <p>100 mindən çox onlayn kurslara çıxış.</p>
                        </div>
                        <div className='flex flex-row items-center mb-3 text-xl'>
                            <img src={Check} className='mr-2 w-5 h-5' />
                            <p>Ən son bacarıqları öyrənin</p>
                        </div>
                    </div>
                    <button className='text-white border-0 py-2 px-3 mt-14 cursor-pointer text-base rounded-lg bg-logoBlue'>İndi müraciət et</button>
                </div>

                <div className='Right w-[410px] h-[500px]'>
                    <div className='RightUpper flex flex-col-reverse '>
                        <p className='mt-3 text-gray-700 text-xl'>8,200+ beş ulduzlu rəylər</p>
                        <img src={AboutImage} className='rounded-l-3xl rounded-br-3xl w-[400px] h-[500px]' />
                    </div>
                    <div className='flex flex-col items-end mt-4'>
                        <div className='flex flex-row absolute w-40'>
                            <img src={Girl} className='w-[50px] h-[50px] rounded-full relative -right-14'/>
                            <img src={Girl} className='w-[50px] h-[50px] rounded-full relative -right-10'/>
                            <img src={Girl} className='w-[50px] h-[50px] rounded-full relative -right-5'/>
                        </div>
                        <p className='mt-14'>4000+ tələbəyə qoşul</p>
                    </div>
                </div>
            </div>
                <div className='mt-56'>
                    <img src={Terefdas} className='w-full'/>
                </div>
        </>
    )
}
