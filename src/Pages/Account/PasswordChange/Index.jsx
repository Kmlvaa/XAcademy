import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import respImage from '../../../Assets/freepik--Character--inject-8.svg'

export default function Index() {
    return (
        <>
            <div className='max-lg:flex hidden relative -left-60 -top-36 z-10 max-sm:-left-56 max-sm:-top-36'>
                <img src={respImage} className='max-sm:w-px100' />
            </div>
            <div className='shadow-custom2 p-10 w-px450 h-auto rounded-2xl max-lg:absolute'>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold mb-5'>Şifrənin bərpası</h1>
                    <div>
                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input type='email' placeholder='E-mail daxil edin' className='p-4 placeholder:text-sm !border-gray-400 border-2 focus:!border-logoBlue' />
                        </FormControl>
                        <Button className='w-px150 !rounded-xl !bg-logoBlue text-white !font-thin text-sm py-3 mt-10'>Şifrəni bərpa et</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
