import React from 'react'
import Teacher from '../../Assets/teacher1.png'
import Instagram from '../../Assets/in.png'
import Youtube from '../../Assets/you.png'
import Linkedin from '../../Assets/lk.png'
import Facebook from '../../Assets/fb.png'
import { useParams } from 'react-router-dom'

export default function Index() {

    const params = useParams();

    const data = teachers.filter((teacher => 
        teacher.id == params.id
    ))

    return (
        <div className='mx-28'>
            <div className='border-1 border-blue-600 w-auto mt-44 h-px600 bg-TeacherBG flex flex-row justify-between p-8 items-center'>
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
                    <h1 className='text-logoBlue text-4xl font-bold mb-2'>{data?.[0].name}</h1>
                    <p className='text-orange-600 mb-3'>Təlimçi</p>
                    <p className='mb-3'>Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa.</p>
                    <p className='mb-3'>Tempor orci dapibus ultrices in iaculis nunc sed augue. Feugiat in ante metus dictum at tempor commodo lectus magna fringilla.</p>
                    <h1 className='text-logoBlue text-2xl font-bold mb-3'>{data?.[0].subject} təlimi</h1>
                    <p>Kurs müddəti: 48 saat</p>
                    <p>Qiymət: 249 AZN (aylıq)</p>
                    <div className='mt-3'>
                        <p className='text-logoBlue text-2xl font-bold'>249 AZN</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h1 className='font-bold text-2xl mb-3'>Kursa baxış</h1>
                <p>UX/UI dizayn kursu həftədə 3 dəfə olmaqla ümumilikdə 16 həftə nəzərdə tutulub. Növbəti 3 ay ərzində siz UX/UI Dizayn əsaslarına yiyələnəcək, ardınca isə biliklərinizi real layihələr üzərində tətbiq etməküçün 1 aylıq təcrübə keçəcəksiniz. Kurs tələbələrə güclü nəzəri baza təmin etməklə istifadəçi təcrübəsi və interfeys dizaynının əsas prinsiplərini öyrədəcək. Həqiqi layihələr üzərində işləməklə tələbələr praktiki dizayn bacarıqlarını inkişaf etdirəcək və peşəkar mühitə hazır olacaqlar.</p>
            </div>
            <div className='my-10'>
                <h1 className='font-bold text-2xl mb-3'>Kursun məqsədi nədir?</h1>
                <p>UX/UI dizayn — istənilən peşəkar keçmişi olan şəxs üçün açıq bir sahədir. UX/UI dizayner olmaq üçün IT sahəsində təcrübəyə malik olmaq vacib deyil — məqsədyönlü olmaq, əldə edilən bilikləri öyrənmək və təkmilləşdirmək üçün kifayət qədər vaxta sahib olmaq yetərlidir.</p>
            </div>
        </div>
    )
}

const teachers = [
    {
        id: 1,
        name: 'İsmət Qədirov1',
        subject: 'Qrafik Dizayner'
    },
    {
        id: 2,
        name: 'Aygün Şirvanova',
        subject: 'Qrafik Dizayner'
    },
    {
        id: 3,
        name: 'Mələk Hacıməmmədova',
        subject: 'C#'
    },
    {
        id: 4,
        name: 'Aynaz Ələkbərli',
        subject: 'Marketinq'
    },
    {
        id: 5,
        name: 'İsmət Qədirov5',
        subject: 'Qrafik Dizayner'
    },
]