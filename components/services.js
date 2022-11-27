import Image from 'next/image'
function Services() {
    return (
        <section id='services' className='mb-20'>
            <h1 className='text-4xl md:text-6xl font-bold font-sans text-emerald-400 text-center my-20'>
                Other Services on Ecogroovi
            </h1>
            <div className='lg:flex lg:flex-row lg:justify-center lg:my-4 lg:gap-4 hidden'>
                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 w-3/12 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s1.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto '
                        />
                        <h2 className='text-4xl font-bold text-center text-white'>
                            Green Gift
                        </h2>
                    </div>
                    <p className='my-2 text-white font-semibold text-center'>
                        Ecogroovi provides green gifts in the form of T-shirts,
                        jackets and dolls that have attractive designs and shapes.
                        This green gift can be used as a gift for friends and relatives and become
                        a symbol to be able to carry out activities to protect the environment.
                    </p>
                </div>

                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 w-3/12 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s2.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto '
                        />
                        <h2 className='text-4xl font-bold text-center text-white'>
                            E-Commerce
                        </h2>
                    </div>
                    <p className='my-2 text-white font-semibold text-center'>
                        Ecogroovi provides e-commerce containing environmentally friendly
                        goods that can be purchased by users, for example in the form of
                        goods from recycle, or goods that are useful in an effort to protect the environment.
                    </p>
                </div>

                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 w-3/12 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s3.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto '
                        />
                        <h2 className='text-4xl font-bold text-center text-white'>
                            Ecogroovi for Business
                        </h2>
                    </div>
                    <p className='my-2 text-white font-semibold text-center'>
                        Ecogroovi provides services for companies to carry out
                        CSR programs for social and environment and also media
                        handling to improve the company&apos;s reputation.
                    </p>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 m-5 gap-4 lg:hidden'>
                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s1.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto'
                        />
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                            Green Gift
                        </h2>
                    </div>
                    <p className='my-2 text-white font-semibold text-center'>
                        Ecogroovi provides e-commerce containing environmentally friendly
                        goods that can be purchased by users, for example in the form of
                        goods from recycle, or goods that are useful in an effort to protect the environment.
                    </p>
                </div>

                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s2.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto '
                        />
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                            E-Commerce
                        </h2>
                    </div>
                    <p className='my-2 text-white md:font-semibold text-center'>
                        Ecogroovi provides green gifts in the form of T-shirts,
                        jackets and dolls that have attractive designs and shapes.
                        This green gift can be used as a gift for friends and relatives and become
                        a symbol to be able to carry out activities to protect the environment.
                    </p>
                </div>

                <div className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-3xl p-5 shadow-md transform transition duration-500 hover:scale-95'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src={'/s3.png'}
                            width="130"
                            height="130"
                            alt='Good deeds'
                            objectFit="cover"
                            className='mx-auto '
                        />
                        <h2 className='text-2xl md:text-4xl font-bold text-center text-white'>
                            Ecogroovi for Business
                        </h2>
                    </div>
                    <p className='my-2 text-white font-semibold text-center'>
                        Ecogroovi provides services for companies to carry out
                        CSR programs for social and environment and also media
                        handling to improve the company&apos;s reputation.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services