

function Target() {
    return (
        <>
            <section className='xl:flex xl:h-[600px] xl:justify-center xl:text-center xl:items-center xl:px-40 xl:bg-taget' id="target">
                <div className='hidden px-5 container mx-auto xl:block'>
                    <h1 className='text-6xl font-bold text-white mt-32'>
                        Application Target
                    </h1>
                    <p className='text-2xl leading-loose text-center text-white'>
                        The intended target of making this application is all circles.
                        Because this application is perfect for everyone, groups who have
                        an interest in the environment of all ages.
                    </p>
                </div>

                <div className='xl:hidden bg-emerald-400 p-10 text-center rounded-t-[50px]'>
                    <h1 className=' text-4xl md:text-6xl font-bold text-white'>
                        Aplication Target
                    </h1>
                    <p className='text-xl md:text-2xl text-white'>
                        The intended target of making this application is all circles.
                        Because this application is perfect for everyone, groups who have
                        an interest in the environment of all ages.
                    </p>
                </div>
            </section>

        </>

    )
}

export default Target