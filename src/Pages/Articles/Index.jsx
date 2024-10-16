import React from 'react'
import './Index.css'
import Search from '../../Assets/Frame 138.png'
import { Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import CardImage from '../../Assets/cardImage.jpeg'
import { ArrowRight } from 'react-bootstrap-icons';

export default function Index() {
    return (
        <>
            <div className='ArticleBanner w-full h-px300 flex items-center justify-center cursor-pointer'>
                <div className='flex flex-row items-center border-1 border-white pr-2 w-px500'>
                    <input placeholder='Search' className='bg-transparent p-3 w-full placeholder:text-white focus:outline-white' />
                    <img src={Search} className='w-10' />
                </div>
            </div>
            <div className='mx-28'>
                <div>
                    <p className='text-2xl font-semibold my-4'>Kateqoriyalar</p>
                    <div className='flex flex-row gap-3'>
                        {categories?.map((cat) => {
                            return (
                                <button className='p-3 bg-logoBlue text-white rounded-xl'>{cat.name}</button>
                            );
                        })}
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-3 gap-4'>
                    {articles?.map((article) => {
                        return (
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={CardImage}
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Text className='flex flex-row items-center justify-between'>
                                            <Text fontSize='md' color={'orange.600'}>{article.creator}</Text>
                                            <Text fontSize='sm'>{article.date}</Text>
                                        </Text>
                                        <Text fontSize='xl' fontWeight={'semibold'} textDecoration={'underline'} cursor='pointer'>{article.category} haqqında bilməli olduğunuz əsas məlumatlar</Text>
                                        <Text fontSize='sm'>{article.description}</Text>
                                    </Stack>
                                </CardBody>
                                <CardFooter>
                                    <Text fontSize='sm' className='flex flex-row items-center gap-2 text-logoBlue cursor-pointer'>
                                        <Text>Daha çox</Text>
                                        <ArrowRight />
                                    </Text>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

const categories = [
    {
        name: 'Programlasdirma'
    },
    {
        name: 'Ux Ui dizayn'
    },
    {
        name: 'SMM'
    },
    {
        name: 'Programlasdirma'
    },
    {
        name: 'Programlasdirma'
    },
]

const articles = [
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
]
