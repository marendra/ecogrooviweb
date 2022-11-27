import Image from 'next/image'
export default function EcogrooviBackground() {
    return (
        <>
            <section className='lg:bg-eco lg:h-[1200px] lg:flex justify-center items-center hidden -scroll-mt-60' id='background'>
                <div className='w-6/12 md:bg-emerald-600 md:px-10 md:rounded-[50px] md:shadow-xl m-5 p-5 xl:hidden'>
                    <h1 className='text-6xl text-white font-bold '>
                        Ecogroovi Background
                    </h1>
                    <p className='text-white text-2xl leading-loose'>
                        Ecogroovi is focused on supporting activities related to the environment,
                        either environmental conservation or reforestation. The background for making this
                        application is so that the community has a place as well as a means to be able to channel
                        their interest in protecting the environment and also of course with this application it is hoped
                        that the Ecogroovi application can help increase public awareness to be able to carry out positive
                        activities that have a positive impact on the environment.
                    </p>
                </div>
                <div className='w-6/12 pt-20 lg:hidden xl:block'>
                    <h1 className='text-6xl text-white font-bold '>
                        Ecogroovi Background
                    </h1>
                    <p className='text-white text-2xl leading-loose'>
                        Ecogroovi is focused on supporting activities related to the environment,
                        either environmental conservation or reforestation. The background for making this
                        application is so that the community has a place as well as a means to be able to channel
                        their interest in protecting the environment and also of course with this application it is hoped
                        that the Ecogroovi application can help increase public awareness to be able to carry out positive
                        activities that have a positive impact on the environment.
                    </p>
                </div>

                <Image
                    src={'/eco1.png'}
                    width="400"
                    height="800"
                    alt='Ecogroovi Logo'
                    className='w-6/12'
                    objectFit="contain"
                />
            </section>

            <section className='lg:hidden mb-10' id='background-mob'>
                <div className='flex justify-center container mx-auto rounded-full md:bg-eco'>
                    <Image
                        src={'/eco1.png'}
                        width="400"
                        height="800"
                        alt='Ecogroovi Logo'
                        objectFit="contain"
                    />
                </div>
                <div className='bg-emerald-400 rounded-[50px] p-10'>
                    <h1 className='text-4xl md:text-6xl text-white font-bold'>
                        Ecogroovi Background
                    </h1>
                    <p className='text-xl text-white md:text-2xl'>
                        Ecogroovi is focused on supporting activities related to the environment,
                        either environmental conservation or reforestation. The background for making this
                        application is so that the community has a place as well as a means to be able to channel
                        their interest in protecting the environment and also of course with this application it is hoped
                        that the Ecogroovi application can help increase public awareness to be able to carry out positive
                        activities that have a positive impact on the environment.
                    </p>
                </div>
            </section>
        </>

    )

}