import { Input, Button, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'

export default function Index() {
    return (
        <div className='shadow-custom2 p-10 w-px450 h-auto rounded-2xl'>
            <div className='text-center'>
                <h1 className='text-xl font-semibold mb-5'>Şifrənin bərpası</h1>
                <div>
                    <FormControl>
                        <FormLabel>E-mail</FormLabel>
                        <Input type='email' placeholder='E-mail daxil edin' className='p-4 placeholder:text-sm' />
                    </FormControl>
                    <Button className='w-px150 !rounded-xl !bg-logoBlue text-white !font-thin text-sm py-3 mt-10'>Şifrəni bərpa et</Button>
                </div>
            </div>
        </div>
    )
}
