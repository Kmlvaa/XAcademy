import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import fb from '../../../Assets/fb.png'
import apple from '../../../Assets/apple.png'
import google from '../../../Assets/GoogleIcon.png'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import respImage from '../../../Assets/freepik--Character--inject-8.svg'

export default function Login() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <div className='max-lg:flex hidden relative -left-64 -top-48 z-10 max-sm:-left-48 max-sm:-top-52'>
                <img src={respImage} className='max-sm:w-px100'/>
            </div>
            <div className='shadow-custom2 p-10 w-px450 h-auto rounded-2xl mr-4 max-lg:absolute max-lg:bg-LoginFormGray'>
                <div className='text-center'>
                    <h1 className='text-xl font-semibold'>Daxil ol</h1>
                    <div>
                        <FormControl>
                            <FormLabel>İstifadəçi adı</FormLabel>
                            <Input type='text' placeholder='Adı daxil edin' className='p-4 placeholder:text-sm !border-gray-400 border-2 focus:!border-logoBlue' />
                        </FormControl>
                        <FormControl className='mt-3'>
                            <FormLabel>Şifrə</FormLabel>
                            <InputGroup>
                                <Input type={show ? 'text' : 'password'} placeholder='Şifrəni daxil edin' className='p-4 placeholder:text-sm !border-gray-400 border-2 focus:!border-logoBlue' />
                                <InputRightElement width='4.5rem' className='my-1 '>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement></InputGroup>
                        </FormControl>
                        <FormControl className='flex flex-row justify-between items-center mt-3 text-logoBlue'>
                            <Checkbox>Yadda saxla</Checkbox>
                            <NavLink to='/layout/account/layout/passowordChange'><p className='cursor-pointer'>Şifrəmi unutdum</p></NavLink>
                        </FormControl>
                        <Button className='w-full !bg-logoBlue text-white text-sm py-3 mt-4 mb-3'>Daxil ol</Button>
                    </div>
                    <div className='flex flex-row gap-2 justify-center items-center mb-5 max-lg:hidden'>
                        <Button className='!bg-blue-100 !text-blue-600 !text-[12px]'>
                            <img src={google} width={20} height={20} className='mr-2' />
                            <p>Sign in with Google</p>
                        </Button>
                        <Button><img src={fb} width={20} height={20} /></Button>
                        <Button><img src={apple} width={20} height={20} /></Button>
                    </div>
                    <div>
                    
                        <NavLink to='/layout/account/register'><p>Hesabın yoxdur? <span className='text-logoBlue font-semibold text-sm cursor-pointer'>Qeydiyyatdan keç</span></p></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
