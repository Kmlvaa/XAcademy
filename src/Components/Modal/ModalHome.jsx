import React from 'react'
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalBody } from '@chakra-ui/react'
import { ArrowRight } from 'react-bootstrap-icons';
import Html from '../../Assets/html.png'
import { NavLink } from 'react-router-dom';

export default function ModalHome(props) {
    return (
        <Modal onClose={props.onClose}
            isOpen={props.isOpen} isCentered
            scrollBehavior='inside'
            size={'5xl'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='flex flex-row p-3 gap-10'>
                        <div className='flex flex-col w-px500 py-10'>
                            <h1 className='text-4xl font-bold mb-14'>{props.Course}</h1>
                            <p className='text-xl font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eveniet doloribus dolorem debitis eaque deserunt, architecto dolores perspiciatis sed nemo aperiam, numquam quidem inventore nulla sequi, praesentium facilis officia sit?</p>
                            <button className='text-logoBlue border-1 w-px200 h-12 py-2 pl-4 pr-2 mt-14 cursor-pointer text-base rounded-full border-logoBlue flex flex-row items-center justify-between'>
                                <NavLink to={`/layout/course/${props.id}`}><p>Kursa bax</p></NavLink>
                                <div className='w-9 h-9 bg-logoBlue border-0 rounded-full flex items-center justify-center'>
                                    <ArrowRight color='orange' width={28} height={28} />
                                </div>
                            </button>
                        </div>
                        <div className='PopUpBg w-px400 h-px400 rounded-3xl  absolute right-6'>
                            <img src={Html} />
                            <ModalCloseButton className='relative !rounded-full !text-white !bg-logoBlue' />
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
