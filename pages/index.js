
import Hero from '../components/hero'
import EcogrooviBackground from '../components/ecobackground'
import Target from '../components/target'
import Features from '../components/features'
import Services from '../components/services'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/navbar'

const itemGallery = [
  {
    id: '1',
    img: 'g2.jpg',
    alt: 'Gallery 2'
  },
  {
    id: '2',
    img: 'g3.jpg',
    alt: 'Gallery 3'
  },
  {
    id: '3',
    img: 'g6.jpg',
    alt: 'Gallery 5'
  },
]


export default function Home() {
  return (
    <div className='bg-gray-50'>
      <Head>
        <title>Ecogroovi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <Hero />
      <EcogrooviBackground />
      <Target />

      <Features />
      <Services />
      <section className='bg-gradient-to-tr from-emerald-300 to-emerald-500 md:h-screen rounded-3xl h-[500px] px-5'>
        <div className='max-w-7xl mx-auto h-10'>
          <h3 className='text-3xl md:text-6xl font-bold font-sans text-white text-center py-10'>
            Our Green Movement
          </h3>
          <div className='max-w-4xl mx-auto h-[450px]'>
            <div className='aspect-video'>
              <iframe
                width="100%"
                height="100%"
                 src= "https://iframe.mediadelivery.net/embed/71625/b002f27f-ebe0-429f-9851-5434dfe85391?autoplay=false"
                loading="lazy"
                title="Ecogroovi"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>

            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto mb-20 px-5'>
        <h3 className='text-3xl md:text-6xl font-bold font-sans text-emerald-400 text-center my-10'>
          Gallery
        </h3>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {itemGallery.map((item) => {
            return <div className='hover:scale-110 transform transition duration-500 ' key={item.id}>
              <Image
                src={`/${item.img}`}
                width="150%"
                height="100%"
                layout='responsive'
                className='object-cover w-full rounded-3xl '
                alt={`${item.alt}`}
              />
            </div>
          })}
        </div>
      </section>

      <section className='bg-gradient-to-tr from-emerald-300 to-emerald-500 rounded-t-[50px]  px-20 md:py-10 py-5'>
        <div className='flex md:items-center flex-col md:flex-row md:gap-5 '>
          <div className='md:w-6/12 mb-5 '>
            <h2 className='lg:text-6xl font-bold text-white text-2xl mb-10 text-center md:text-left'>
              Coming Soon Ecogroovi Apps!
            </h2>
            <div className="flex gap-5">
              <div className='flex items-center md:py-3 md:px-8 py-2 px-3 bg-white rounded-xl hover:scale-110 transform transition duration-500'>
                <Image src={'/playstore.png'}
                  width="30"
                  height="30"
                  alt='Playstore Logo'
                  objectFit="cover"
                  className='' />
                <Link href="https://play.google.com/store/apps/details?id=com.ecogroovi">
                  <a className='ml-3 font-bold text-sm text-gray-600'>Google Play</a>
                </Link>
              </div>
              <div className='flex items-center md:py-3 md:px-8 py-2 px-3 bg-white rounded-xl hover:scale-110 transform transition duration-500'>
                <Image src={'/Apple.png'}
                  width="30"
                  height="30"
                  alt='Apple Logo'
                  objectFit="cover"
                  className='' />
                <Link href="https://apps.apple.com/id/app/ecogroovi/id6443890580?l=id">
                  <a className='ml-3 font-bold text-sm text-gray-600'>App Store</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='md:w-6/12 md:justify-center  flex'>
            <Image src={'/app2.png'}
              width="720"
              height="600"
              alt='Apple Logo'
              objectFit="cover"
              className='' />

          </div>
        </div>
      </section>

    </div>
  )
}
