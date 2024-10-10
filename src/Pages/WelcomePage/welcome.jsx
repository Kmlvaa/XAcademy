import './welcome.css';
import Photo from '../../Assets/course.webp'
import { NavLink } from 'react-router-dom';

function Welcome() {
    return (
        <div className='flex items-center justify-center bg-blue950 h-screen m-0 max-[1060px]:py-14'>
            <div className='Main z-10 flex items-center justify-center max-[1060px]:flex-col text-center'>
                <div className='px-10 max-w-2xl mr-40 max-[1230px]:m-auto max-[1060px]:text-center max-[1060px]:mb-14'>
                    <div className='Text text-white text-7xl leading-tight max-[1060px]:text-6xl max-[480px]:text-5xl max-[408px]:text-3xl'><span className='px-5 rounded mb-10 bg-blue600'>X Academy</span>-ə xoş gəldiniz </div>
                    <div className='mt-12'>
                        <button className='Btn border-0 rounded-md mr-10 mb-3 text-lg text-white cursor-pointer bg-blue600 px-5 py-2.5 max-[480px]:px-3 max-[480px]:py-2 max-[480px]:mr-5 max-[405px]:mr-2'>Online Courses</button>
                        <button className='Btn border-0 rounded-md text-lg text-white cursor-pointer bg-red600 px-5 py-2.5 max-[1060px]:bg-yellow-600 max-[480px]:px-3 max-[480px]:py-2'><NavLink to='/layout/home' className="text-white no-underline">Ənənəvi kurslar</NavLink></button>
                    </div>
                </div>
                <div className='Photo max-[1060px]:w-full mr-20'>
                    <img src={Photo} className='w-max h-full max-[1060px]:w-full max-[1060px]:h-80 object-cover max-[1060px]:!shadow-none'/>
                </div>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Welcome;