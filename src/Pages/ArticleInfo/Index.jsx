import React from 'react'
import Pin from '../../Assets/pin.png'
import Imagex from '../../Assets/girl.jpeg'
import { ArrowRight } from 'react-bootstrap-icons'
import { Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import CardImage from '../../Assets/cardImage.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode } from 'swiper/modules'
import { NavLink, useParams } from 'react-router-dom';

export default function Index() {

    const params = useParams();

    const details = articleInfo.filter(article =>
        article.id == params.id
    )

    const otherArticles = articles.filter(article =>
        article.id != params.id
    )

    return (
        <div className='mx-28 my-20 max-lg:mx-5'>
            <div className='flex flex-row items-center gap-4'>
                <img src={Pin} className='w-10 h-10' />
                <h1 className='font-bold text-2xl'>{details?.[0].Name} Nədir və Faydaları Nələrdir?</h1>
            </div>
            <div className='w-full h-0.5 bg-gray-300 my-10'></div>
            <div className='my-10 flex felx-row items-center justify-between'>
                <div>
                    <p>{details?.[0].createDate}</p>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <p>{details?.[0].Creater}</p>
                    <img src={Imagex} className='w-16 h-16 rounded-full' />
                </div>
            </div>
            <div className='my-10'>
                <p>
                    Bu gün iş dünyası sürətlə dijitalləşir və bu dəyişikliklərin ən vacib hissələrindən biri dijital marketinqdir.
                    Lakin, dijital marketinq nədir və niyə bu qədər əhəmiyyətlidir? Bu yazıda bu sualların cavablarını və dijital marketinqin
                    təmin etdiyi faydaları ətraflı şəkildə araşdıracağıq. Dijital Marketinq Nədir? Dijital marketinq, məhsul və xidmətlərinizi
                    rəqəmsal kanallar vasitəsilə tanıtmaq və satmaq üçün istifadə olunan strategiyalar və metodlar toplusudur. Bu kanallar adətən
                    internet və mobil cihazlar üzərindədir və sosial media, axtarış motorları, e-poçt, veb saytlar və mobil tətbiqləri kimi müxtəlif
                    platformaları əhatə edir. Dijital marketinq, ənənəvi marketinq üsullarına nisbətən bir çox üstünlük təqdim edir. İnternetin və
                    texnologiyanın inkişafı ilə dijital marketinq, müəssisələrin hədəf auditoriyalarına daha təsirli və ölçülə bilən şəkildə
                    çatmalarını təmin edir. Dijital Marketinqin Faydaları 1. Geniş Auditoriyaya Çatmaq Dijital marketinq, dünya miqyasında
                    geniş bir auditoriyaya çatmaq imkanı təqdim edir. Sosial media platformaları, axtarış motorları və e-poçt kampaniyaları
                    vasitəsilə müəssisələr həm yerli, həm də beynəlxalq səviyyədə potensial müştərilərə müraciət edə bilər. Ənənəvi marketinq
                    üsullarında bu cür geniş çatmaq çətin və bahalı ola bilər. 2. Hədəfləmə və Şəxsi Yanaşma Dijital marketinq, hədəf auditoriyanı
                    müəyyənləşdirmək və onlara xüsusi məzmun təqdim etmək imkanı verir. Məsələn, sosial media platformaları və axtarış motorları, istifadəçilərin davranışlarına və maraqlarına görə reklamları hədəfləyə bilər. Bu, reklamların daha təsirli olmasını təmin edir. 3. Maliyyə Effektivliyi Dijital marketinq, ənənəvi marketinq üsullarına nisbətən adətən daha aşağı maliyyətlərlə həyata keçirilə bilər. Məsələn, sosial media reklamları televiziya reklamlarından çox daha sərfəlidir. Ayrıca, dijital kampaniyaların performansını izləmək və optimallaşdırmaq çox asandır, bu da reklam büdcənizin daha səmərəli istifadə edilməsini təmin edir. 4. Ölçülə Bilən Nəticələr Dijital marketinq kampaniyalarının ən böyük üstünlüklərindən biri, nəticələrin ölçülə bilməsidir. Veb analitika vasitələri sayəsində, kampaniyaların nə qədər təsirli olduğunu, hansı strategiyaların işə yaradığını və hansı sahələrdə inkişaf etməli olduğunuzu müəyyənləşdirmək mümkündür. Bu məlumatlar gələcək kampaniyaların daha uğurlu olmasını təmin edir. 5. Etkiləşim və Geri Bildirim Dijital platformalar müştərilərlə birbaşa əlaqə qurmaq imkanı təqdim edir. Sosial media, e-poçt və veb saytlar vasitəsilə müştərilərlə ünsiyyət qura bilər, onların geri bildirimlərini toplaya bilər və bu geri bildirimləri xidmətlərinizi inkişaf etdirmək üçün istifadə edə bilərsiniz. Bu, müştəri məmnuniyyətini artırır və sadiq müştəri bazası yaratmağa kömək edir. 6. Tez və Elastik Tətbiq Dijital marketinq kampaniyalarını sürətlə başlada və dəyişdirə bilərsiniz. Kampaniya prosesindəki ani dəyişikliklərə tez uyğunlaşma qabiliyyəti, dijital marketinqin böyük üstünlüklərindən biridir. Xüsusilə trend və istifadəçi davranışlarının sürətlə dəyişdiyi dijital dünyada, elastiklik önəmli bir rol oynayır. 7. Rəqabət Üstünlüyü Dijital marketinq strategiyalarını effektiv şəkil
                    də tətbiq edən müəssisələr rəqiblərinin önündə ola bilər. SEO (Axtarış Motoru Optimizasiyası), PPC (Klik Başına Ödəniş) və
                    sosial media strategiyaları kimi dijital marketinq texnikalarını istifadə edərək, sektordakı rəqabət üstünlüyünüzü artıra bilərsiniz. Nəticə Dijital marketinq, müasir müəssisələr üçün ayrılmaz bir vasitədir.
                    Geniş auditoriyaya çatmaq, hədəfləmə və şəxsi yanaşma, maliyyət effektivliyi, ölçülə bilən nəticələr, müştəri etkileşimi və elastiklik kimi üstünlüklər, dijital marketinqin niyə bu qədər populyar olduğunu açıqlayır. Dijital dünyada uğurlu olmaq istəyən müəssisələr, dijital marketinq strategiyalarını effektiv şəkildə tətbiq edərək rəqabət üstünlüyü əldə edə bilər və işlərini böyüdə bilər.
                </p>
            </div>
            <div>
                <div className='flex flex-row items-center justify-between'>
                    <div>
                        <h1>Bunlara da bax</h1>
                    </div>
                    <NavLink to='/layout/articles'>
                        <div className='flex flex-row items-center gap-2'>
                            <p className='cursor-pointer hover:text-logoBlue'>Daha çox</p>
                            <ArrowRight />
                        </div>
                    </NavLink>
                </div>
                <div className='mt-10 items-center justify-center'>
                    <Swiper breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        450: {
                            slidesPerView: 1.8,
                        },
                        760: {
                            slidesPerView: 2,
                        },
                        830: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        950: {
                            slidesPerView: 2.3,
                            spaceBetween: 0,
                        },
                        1010: {
                            slidesPerView: 2.5,
                            spaceBetween: 0,
                        },
                        1300: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        },
                        1170: {
                            slidesPerView: 3,
                            spaceBetween: 12
                        }
                    }}
                        freeMode={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop
                        pagination={true}
                        grabCursor={true}
                        modules={[FreeMode, Autoplay]}
                    >
                        {otherArticles?.map((article) => {
                            return (
                                <SwiperSlide id={article.id}>
                                    <Card maxW='sm'>
                                        <CardBody>
                                            <Stack className='relative'>
                                                <button
                                                    className='py-1 px-3 text-sm bg-logoBlue text-white rounded-md absolute bottom-0 m-2'>
                                                    {article.category}
                                                </button>
                                                <Image
                                                    src={CardImage}
                                                    borderRadius='lg'
                                                />
                                            </Stack>
                                            <Stack mt='6' spacing='3'>
                                                <Text className='flex flex-row items-center justify-between'>
                                                    <Text fontSize='md' color={'orange.600'}>{article.creator}</Text>
                                                    <Text fontSize='sm'>{article.date}</Text>
                                                </Text>
                                                <NavLink to={`/layout/article/${article.id}`}>
                                                    <Text fontSize='xl' fontWeight={'semibold'} textDecoration={'underline'} cursor='pointer'>{article.category} haqqında bilməli olduğunuz əsas məlumatlar</Text>
                                                </NavLink>
                                                <Text fontSize='sm'>{article.description}</Text>
                                            </Stack>
                                        </CardBody>
                                        <CardFooter>
                                            <NavLink to={`/layout/article/${article.id}`}>
                                                <Text fontSize='sm' className='flex flex-row items-center gap-2 text-logoBlue cursor-pointer'>
                                                    <Text>Daha çox</Text>
                                                    <ArrowRight />
                                                </Text>
                                            </NavLink>
                                        </CardFooter>
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const articleInfo = [
    {
        id: 1,
        createDate: "15 Sep 2023",
        Creater: "Admin",
        Name: "UX/UI DIzayn"
    },
    {
        id: 2,
        createDate: "2 Apr 1998",
        Creater: "Admin",
        Name: "Proqramming"
    },
    {
        id: 3,
        createDate: "28 Dec 2020",
        Creater: "Admin",
        Name: "Digital Marketinq"
    },
]

const articles = [
    {
        id: 1,
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        id: 2,
        creator: "admin",
        category: 'Programming',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        id: 3,
        creator: "admin",
        category: 'Digital Marketing',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        id: 4,
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        id: 5,
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
    {
        id: 6,
        creator: "admin",
        category: 'Ix Ui dizayn',
        date: '3 sep 2024',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed delectus quas officia veritatis"
    },
]
