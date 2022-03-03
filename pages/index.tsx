import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full page slider with tail windcss</title>
        <meta name="description" content="Full page slider with tail windcss" />
      </Head>

      <div className='w-screen h-screen snap-y overflow-y-scroll snap-always snap-mandatory scroll-smooth'>

        <section className='w-full h-full bg-blue-900 flex justify-center items-center snap-start  '>
          <h1 className='text-5xl text-white'>Page 1</h1>
        </section>


        <section className='w-full h-full bg-red-900 flex justify-center items-center snap-start'>
          <h1 className='text-5xl text-white'>Page 2</h1>
        </section>


        <section className='w-full h-full bg-gray-500 flex justify-center items-center snap-start'>
          <h1 className='text-5xl text-white'>Page 3</h1>
        </section>

      </div >
    </>

  )
}

export default Home;
