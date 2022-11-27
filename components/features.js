import Image from 'next/image'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";
import { Pagination } from "swiper";

function Features() {
    return (
        <section className='px-4' id='features'>
            <h1 className='text-3xl md:text-6xl font-bold font-sans text-emerald-400 text-center my-20'>
                What&apos;s Features on Ecogroovi ?
            </h1>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={"3"}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper hidden xl:flex"
            >

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[520px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f1.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Good deeds
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-lg text-center'>
                            In the posting feature, users can upload posts that describe activities
                            on the environment that can have a direct impact on environmental goodness,
                            activities that can be uploaded are activities related to planting, pickup trash, recycle,
                            reduce carbon or etc.
                        </p>
                        <p className='text-white font-semibold text-lg text-center'>
                            From every activity that you upload, you will get one star which later
                            when it has been collected according to the target set by the application,
                            you can exchange it and will get a reward from the Ecogroovi application.
                        </p>

                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[520px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f2.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Post anything about environment
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-lg text-center'>
                            Users have the freedom to upload activities or images
                            that for example do not have any impact on the environment.
                            For example, when a user just wants to upload an image of
                            a green landscape or pictures that show respect for the environment.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[520px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f3.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                My Story
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-lg text-center'>
                            In this feature the user can create a text status related to the environment.
                            If the user is the type who is less willing to share their activities using photos,
                            the My story feature is very suitable to be used as a place to tell stories about activities
                            regarding the environment being carried out.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[520px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/community.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Friendship & Community
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-lg text-center'>
                            This feature makes it easier for users to find friends
                            who have the same interests or do activities related to the same environment.
                            With this feature users will be able to follow each other&apos;s accounts.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[520px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f5.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Ecogroovi Creativity
                            </h2>
                        </div>
                        <p className='my-5 text-white font-semibold text-lg text-center'>
                            This feature provides recommendations for Ecogroovi
                            Application users who may also have an interest in being able to play games,
                            Techno Ecology Creative Studio provides game products that
                            are also related to environmental campaigns.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2"}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper hidden md:flex xl:hidden"
            >

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[580px] lg:h-[450px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f1.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Good deeds
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-center'>
                            In the posting feature, users can upload posts that describe activities
                            on the environment that can have a direct impact on environmental goodness,
                            activities that can be uploaded are activities related to planting, pickup trash, recycle,
                            reduce carbon or etc.
                        </p>
                        <p className='text-white font-semibold text-center'>
                            From every activity that you upload, you will get one star which later
                            when it has been collected according to the target set by the application,
                            you can exchange it and will get a reward from the Ecogroovi application.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[580px] lg:h-[450px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f2.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Post anything about environment
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-center'>
                            Users have the freedom to upload activities or images
                            that for example do not have any impact on the environment.
                            For example, when a user just wants to upload an image of
                            a green landscape or pictures that show respect for the environment.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[580px] lg:h-[450px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f3.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                My Story
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-center'>
                            In this feature the user can create a text status related to the environment.
                            If the user is the type who is less willing to share their activities using photos,
                            the My story feature is very suitable to be used as a place to tell stories about activities
                            regarding the environment being carried out.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[580px] lg:h-[450px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/community.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Friendship & Community
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-center'>
                            This feature makes it easier for users to find friends
                            who have the same interests or do activities related to the same environment.
                            With this feature users will be able to follow each other&apos;s accounts.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[580px] lg:h-[450px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f5.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-4xl font-bold text-center text-white'>
                                Ecogroovi Creativity
                            </h2>
                        </div>
                        <p className='my-5 text-white font-semibold text-center'>
                            This feature provides recommendations for Ecogroovi
                            Application users who may also have an interest in being able to play games,
                            Techno Ecology Creative Studio provides game products that
                            are also related to environmental campaigns.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"1"}
                pagination={true}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper md:hidden"
            >

                <SwiperSlide>
                    <div className='from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[450px] sm:h-[400px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f1.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                                Good deeds
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-sm md:text-base text-center'>
                            In the posting feature, users can upload posts that describe activities
                            on the environment that can have a direct impact on environmental goodness,
                            activities that can be uploaded are activities related to planting, pickup trash, recycle,
                            reduce carbon or etc.
                        </p>
                        <p className='text-white font-semibold text-sm md:text-base text-center'>
                            From every activity that you upload, you will get one star which later
                            when it has been collected according to the target set by the application,
                            you can exchange it and will get a reward from the Ecogroovi application.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[450px] sm:h-[400px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f2.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                                Post anything about environment
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-sm md:text-base text-center'>
                            Users have the freedom to upload activities or images
                            that for example do not have any impact on the environment.
                            For example, when a user just wants to upload an image of
                            a green landscape or pictures that show respect for the environment.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-lg h-[450px] sm:h-[400px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f3.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                                My Story
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-sm md:text-base text-center'>
                            In this feature the user can create a text status related to the environment.
                            If the user is the type who is less willing to share their activities using photos,
                            the My story feature is very suitable to be used as a place to tell stories about activities
                            regarding the environment being carried out.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[450px] sm:h-[400px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/community.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                                Friendship & Community
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-sm md:text-base text-center'>
                            This feature makes it easier for users to find friends
                            who have the same interests or do activities related to the same environment.
                            With this feature users will be able to follow each other&apos;s accounts.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md h-[450px] sm:h-[400px] transform transition duration-500 hover:scale-90'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={'/f5.png'}
                                width="150"
                                height="150"
                                alt='Good deeds'
                                objectFit="cover"
                                className='mx-auto '
                            />
                            <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                                Ecogroovi Creativity
                            </h2>
                        </div>
                        <p className='my-2 text-white font-semibold text-sm md:text-base text-center'>
                            This feature provides recommendations for Ecogroovi
                            Application users who may also have an interest in being able to play games,
                            Techno Ecology Creative Studio provides game products that
                            are also related to environmental campaigns.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Features