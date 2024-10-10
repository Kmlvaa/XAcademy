import React from 'react'
import Image from '../../../Assets/Screenshot 2024-10-10 125904.png'
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import fb from '../../../Assets/fb.png'
import google from '../../../Assets/gg.webp'

export default function Login() {
    return (
        <>
            <div className='mx-28 mt-44 flex flex-row justify-between items-center'>
                <div>
                    <img src={Image} className='w-px400 h-px400' />
                </div>
                <div className='shadow-custom2 p-10 w-px450 h-auto rounded-2xl'>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold'>Daxil ol</h1>
                        <div>
                            <FormControl>
                                <FormLabel>İstifadəçi adı</FormLabel>
                                <Input type='email' placeholder='Adı daxil edin' className='p-4 placeholder:text-sm' />
                            </FormControl>
                            <FormControl className='mt-3'>
                                <FormLabel>Şifrə</FormLabel>
                                <Input type='email' placeholder='Şifrəni daxil edin' className='p-4 placeholder:text-sm' />
                            </FormControl>
                            <FormControl className='flex flex-row justify-between items-center mt-3 text-logoBlue'>
                                <Checkbox>Yadda saxla</Checkbox>
                                <p className='cursor-pointer'>Şifrəmi unutdum</p>
                            </FormControl>
                            <Button className='w-full !bg-logoBlue text-white text-sm py-3 mt-10 mb-3'>Daxil ol</Button>
                        </div>
                        <div className='flex flex-row gap-2 justify-center items-center mb-5'>
                            <Button className='!bg-blue-100 !text-blue-600 !text-[10px]'>
                                <img src={google} width={20} height={20}/>
                                <p>Sign in with Google</p>
                            </Button>
                            <Button><img src={fb} width={20} height={20}/></Button>
                            <Button><img src={fb} width={20} height={20}/></Button>
                        </div>
                        <div>
                            <p>Hesabın yoxdur? <span className='text-logoBlue font-semibold text-sm cursor-pointer'>Qeydiyyatdan keç</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
