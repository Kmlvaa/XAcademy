import React from 'react'
import Image from '../../Assets/Live collaboration-rafiki 1.svg'

export default function Index() {
  return (
    <div className='mx-28 mt-40'>
      <div className='flex flex-row justify-between items-center max-[1000px]:flex-col'>
        <div className='w-px600'>
          <h1 className='font-bold text-5xl mb-10'>Partnyorlar</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat. Tellus praesent cursus pellentesque sapien mauris adipiscing.Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat.</p>
        </div>
        <div>
          <img src={Image} className='w-px400 h-400px' />
        </div>
      </div>
      <div className="bg-black w-full h-px"></div>
      <div className='flex flex-row justify-between my-40 max-[1000px]:flex-col'>
        <div className='w-px600'>
          <h1 className='font-bold text-5xl mb-10'>Kapital Bank</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat. Tellus praesent cursus pellentesque sapien mauris adipiscing.Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat.</p>
        </div>
        <div className='w-px600'>
          <h1 className='font-bold text-5xl mb-10'>Leo Bank</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat. Tellus praesent cursus pellentesque sapien mauris adipiscing.Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat.</p>
        </div>
      </div>
      <div className='flex flex-row justify-between my-40 max-[1000px]:flex-col'>
        <div className='w-px600'>
          <h1 className='font-bold text-5xl mb-10'>Leo Bank</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat. Tellus praesent cursus pellentesque sapien mauris adipiscing.Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat.</p>
        </div>
        <div className='w-px600'>
          <h1 className='font-bold text-5xl mb-10'>Kapital Bank</h1>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat. Tellus praesent cursus pellentesque sapien mauris adipiscing.Lorem ipsum dolor sit amet consectetur. Velit euismod massa mi ultricies mauris bibendum volutpat.</p>
        </div>
      </div>
    </div>
  )
}
