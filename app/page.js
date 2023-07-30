"use client";

import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import doggocomputer from '../public/doggocomputer.png'

import designicon from '../public/designicon.png'
import bootstrapicon from '../public/bootstrapicon.png'
import tailwindicon from '../public/tailwindicon.png'

import databaseicon from '../public/databaseicon.png'
import firebaseicon from '../public/firebaseicon.png'
import mysqlicon from '../public/mysqlicon.png'

import handshakeicon from '../public/handshakeicon.png'

import { useState } from 'react'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
      
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl dark:text-white'>LunaDeveloper</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl dark:text-yellow-400' onClick={() => setDarkMode(!darkMode)}/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-800 text-white px-4 py-2 rounded-md ml-8' href='#'>
                Resume</a>
              </li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          
          <h2 className='text-5xl py-2 text-teal-700 font-medium md:text-6xl dark:text-teal-500'>Gavin Miguel Luna</h2>

          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Freelance Web Developer</h3>
          <p className='text-md py-5 leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>
            Here to provide you Web development services that suites your content needs. Let's ride this journey and create your website now!
          </p>
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96'>
              <Image src={doggocomputer} layout='fill' objectFit='cover'/>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-teal-500'>
          <AiFillTwitterCircle className='transition-transform transform hover:scale-110'/>
          <AiFillLinkedin className='transition-transform transform hover:scale-110'/>
          <AiFillYoutube className='transition-transform transform hover:scale-110'/>
        </div>

      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 underline dark:text-white'>Offered Services</h3>

          <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
            Back when I was still a student, I've done quite a number of school projects for other students
            and done quite a progress on my skills as well. What I can offer you is only <span className='text-teal-700'>Web Development</span>.
          </p>

          <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
            I'm delighted to offer my services as a web developer specializing in <span className='text-teal-700'>PHP including (Laravel)</span>, <span className='text-teal-700'>Javascript (React, Next)</span>, and even with robust backends, I am very familiar with <span className='text-teal-700'>Firebase</span> and <span className='text-teal-700'>MySQL</span>.
          </p>

          <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
            It would be my pleasure to develop your website whether its purpose is for <span className='text-teal-700'>Personal</span>, <span className='text-teal-700'>Academic</span> or <span className='text-teal-700'>Business</span> use.
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-950'>
            <Image className='mx-auto transition-transform transform hover:scale-110' src={designicon} width={100} height={100} />

            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Care for a Design?</h3>
            <p className='py-2 dark:text-white'>
            I take immense pride in crafting websites that not only function seamlessly but also leave a lasting visual impact. With a keen eye for aesthetics and a passion for design, I specialize in creating captivating and beautiful websites.
            </p>

            <h4 className='py-4 text-teal-600 dark:text-teal-500'>CSS frameworks used</h4>

            <a href='https://getbootstrap.com/docs/5.3/getting-started/introduction/'><Image className='mx-auto py-2 transition-transform transform hover:scale-110' src={bootstrapicon} width={50} height={50}/></a>
            <a href='https://tailwindcss.com/docs/installation'><Image className='mx-auto rounded-full transition-transform transform hover:scale-110' src={tailwindicon} width={50} height={50}/></a>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-950'>
            <Image className='mx-auto transition-transform transform hover:scale-110' src={databaseicon} width={100} height={100} />

            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Need a Database?</h3>
            <p className='py-2 dark:text-white'>
            I can create robust and scalable solutions tailored to your specific needs. I'm dedicated to delivering high-quality websites that enhance your online presence and engage your users effectively.
            </p>

            <h4 className='py-4 text-teal-600 dark:text-teal-500'>Familiar Database</h4>

            <a href='https://firebase.google.com'><Image className='mx-auto py-2 transition-transform transform hover:scale-110' src={firebaseicon} width={50} height={50}/></a>
            <a href='https://www.mysql.com'><Image className='mx-auto rounded-full transition-transform transform hover:scale-110' src={mysqlicon} width={50} height={50}/></a>
          </div>



          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-teal-950'>
            <Image className='mx-auto transition-transform transform hover:scale-110' src={handshakeicon} width={100} height={100} />

            <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>For what purpose?</h3>
            <p className='py-2 dark:text-white'>
            I take great pride in offering my web development services to cater to various purposes, whether it's for businesses, schools, or personal projects. With a diverse skill set and extensive experience, I can create custom websites that meet your unique requirements and objectives.
            </p>

          </div>
        
        </div>

      </section>

      <section>
        <div>
        <h3 className='text-3xl py-1 underline dark:text-white'>My Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
            Quite a journey I must say, these are my works so far. I am thrilled to share my journey as a passionate <span className='text-teal-700 dark:text-teal-500'>Web Developer</span> and showcase the projects that reflect my skills and dedication. 
            With a strong foundation in frontend and backend technologies, I have crafted a <span className='text-teal-700 dark:text-teal-500'>diverse</span> range of captivating Web applications and responsive designs.
          </p>
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
          </div>

        </div>
      </section>

    </main>
    </div>
  )
}
