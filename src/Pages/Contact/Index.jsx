import React from 'react'

export default function Index() {
    return (
        <>
            <div className='flex flex-row items-center justify-between mt-52 px-28 max-[1200px]:px-0 max-[1200px]:flex-col'>
                <div className='text-2xl'>
                    <div className='mb-5'>
                        <p>Fuad İbrahimbəyov 9B</p>
                    </div>
                    <div className='mb-5'>
                        <p className='mb-3 font-semibold'>Bizə birbaşa e-mail göndərin</p>
                        <p className='text-blue-600 text-xl'>support@xacademy.az</p>
                        <p className='text-blue-600 text-xl'>info@xacademy.az</p>
                    </div>
                    <div className='mb-5'>
                        <p className='mb-3 font-semibold'>Bizə zəng edin</p>
                        <p className='text-blue-600 text-xl'>+(994)51 735 77 86</p>
                    </div>
                </div>
                <div>
                    <p className='text-blue-600 underline mb-2 font-semibold text-xl'>Xəritədə baxın</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.5875983060946!2d4.378383488787579!3d51.09761799881293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f1d875ad3d69%3A0xbfcdadb0be749ef6!2sX-Academy!5e0!3m2!1sen!2saz!4v1728287176621!5m2!1sen!2saz" className='w-[700px] h-[450px] rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='w-auto h-0.5 mx-28 my-28 bg-gray-300'></div>
            <div className='mx-28'>
                <div className='w-80 m-auto text-center'>
                    <p className='text-3xl font-semibold text-logoBlue'>Bizimlə Əlaqə</p>
                </div>
                <div className='flex flex-col gap-4 mt-14'>
                    <div className='flex flex-row items-center justify-between w-px1000 m-auto'>
                        <input placeholder='Ad-soyad*' className='w-px300 border-1 border-gray-500 p-3 rounded-lg bg-ContactGray placeholder:text-logoBlue'/>
                        <input placeholder='E-mail*' className='w-px300 border-1  border-gray-500 p-3 rounded-lg bg-ContactGray placeholder:text-logoBlue'/>
                        <input placeholder='Mövzu*' className='w-px300 border-1  border-gray-500 p-3 rounded-lg bg-ContactGray placeholder:text-logoBlue'/>
                    </div>
                    <div className='flex flex-row items-center justify-between w-px1000 m-auto'>
                        <input placeholder='Mövzu*' className='border-1 border-gray-500 p-3 rounded-lg bg-ContactGray w-px1000 h-px300 text-left placeholder:text-logoBlue'/>
                    </div>
                </div>
            </div>
        </>
    )
}
