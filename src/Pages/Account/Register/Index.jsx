import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightElement
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'
import Image from '../../../Assets/Add User-pana 1.svg'
import chatbot from '../../../Assets/chatboticon.png'

export default function Index() {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            <div className='mx-28 mt-40 flex flex-row justify-between items-center'>
                <div >
                    <img src={Image} className='w-px500 h-px500' />
                </div>
                <div className='shadow-custom2 p-10 w-px450 h-auto rounded-2xl'>
                    <div className='text-center'>
                        <h1 className='text-xl font-semibold'>Daxil ol</h1>
                        <div>
                            <FormControl className='mb-2'>
                                <FormLabel>E-mail</FormLabel>
                                <Input type='email' placeholder='E-mail daxil edin' className='p-4 placeholder:text-sm' />
                            </FormControl>
                            <FormControl className='mb-2'>
                                <FormLabel>İstifadəçi adı</FormLabel>
                                <Input type='text' placeholder='Adı daxil edin' className='p-4 placeholder:text-sm' />
                            </FormControl>
                            <FormControl className='mb-2'>
                                <FormLabel>Telefon nömrəniz</FormLabel>
                                <Input type='text' placeholder='Nömrə daxil edin' className='p-4 placeholder:text-sm' autoComplete='false' />
                            </FormControl>
                            <FormControl className='mt-2'>
                                <FormLabel>Şifrə</FormLabel>
                                <InputGroup>
                                    <Input type={show ? 'text' : 'password'} placeholder='Şifrəni daxil edin' className='p-4 placeholder:text-sm' autoComplete='false'/>
                                    <InputRightElement width='4.5rem' className='my-1 '>
                                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                                            {show ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement></InputGroup>
                            </FormControl>
                            <Button className='w-full !bg-logoBlue text-white text-sm py-3 mt-4 mb-3'>Qeydiyyatdan keç</Button>
                        </div>
                        <div>
                            <NavLink to='/layout/account/layout/login'><p>Hesabın var? <span className='text-logoBlue font-semibold text-sm cursor-pointer'>Daxil ol</span></p></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute right-0 top-96'>
                <img src={chatbot} width={100} height={100} className='cursor-pointer'/>
            </div>
        </>
    )
}
