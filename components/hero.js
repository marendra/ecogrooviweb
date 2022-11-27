import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
    return (
        <section className='xl:h-[600px] xl:flex xl:bg-hero xl:py-10'>
            <div className='container mx-auto'>
                <div className='justify-center items-center hidden xl:flex'>
                    <Image
                        src={'/logo.png'}
                        width="350"
                        height="350"
                        alt='Ecogroovi Logo'
                        className='w-6/12'
                        // layout="fill"
                        objectFit="contain"
                    />
                    <div className='w-6/12 '>
                        <h1 className='text-6xl text-white font-bold font-sans'>
                            What&apos;s Ecogroovi ?
                        </h1>
                        <p className='text-2xl text-white mb-8'>
                            Ecogroovi is a name formed from two words,
                            namely Eco which means environmentally friendly and Groovy which means fun.
                            The philosophy of naming Ecogroovi illustrates that the Ecogroovi
                            Application is an application that is a place for users to be able to
                            carry out fun environmentally friendly activities.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-emerald-400 xl:hidden p-10 rounded-b-[50px] shadow-lg'>
                <div className='flex justify-center'>
                    <Image
                        src={'/logo.png'}
                        width="350"
                        height="350"
                        alt='Ecogroovi Logo'
                        className=''
                        // layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className=''>
                    <h1 className='text-4xl text-white font-bold md:text-6xl'>
                        What&apos;s Ecogroovi ?
                    </h1>
                    <p className='text-xl text-white md:text-2xl mb-5'>
                        Ecogroovi is a name formed from two words,
                        namely Eco which means environmentally friendly and Groovy which means fun.
                        The philosophy of naming Ecogroovi illustrates that the Ecogroovi
                        Application is an application that is a place for users to be able to
                        carry out fun environmentally friendly activities.
                    </p>
                </div>
            </div>
        </section>
    )
}