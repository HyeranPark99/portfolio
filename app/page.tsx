// app/page.tsx
"use client";
import { useState } from "react"
import Footer from "./footer";
import Nav from "./nav"; 
import Contact from "./contact";
import Head from 'next/head'
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { FaChevronRight } from "react-icons/fa";
import hyeran from '../public/avatar.jpg'
import code from '../public/code.png'
import design from '../public/design.png'
import aidl from '../public/aidl.png'
import framework from '../public/framework2.png'
import collab from '../public/collaborative.png'
import resume from '../public/resume-image2.png'
import weather from '../public/weather-ranger.png'
import regime from '../public/regime-detection.png'
import Link from 'next/link';




export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  
  const handleMode = () => {
    setDarkMode(currnetMode => {
      return !currnetMode
    })
  }

  return (
    <div className={darkMode ? 'dark': ''} >
      <Head>
        <title>Hyeran Park Portfolio</title>
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
        
          {/* <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyhr</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                className='cursor-pointer text-xl dark:fill-slate-50'/>
              </li>
              <li>
                  <a 
                    className=' bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' 
                    href='#'
                  >
                    Resume
                  </a>
                </li> 
            </ul>
          </nav> */}
          <Nav />

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Hyeran Park</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer and artist</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>  
            I identify myself as a curious and self driven developer. 
            <br />With my differnet career path in the past, I believe I can deliver innovative results and soultions. 
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <Link href='https://www.linkedin.com/in/hyeran-park/' rel='noopener noreferrer'
              target='_blank' className='cursor-pointer'>
              <AiFillLinkedin /> 
            </Link>
           <Link href='https://github.com/HyeranPark99' rel='noopener noreferrer'
              target='_blank'className='cursor-pointer'>
            <AiFillGithub /> 
           </Link>
          </div>
          <div className='mx-auto  rounded-full w-50 h-50 
          relative overflow-hidden mt-20 md:h-60 md:w-60 mb-10'>
            <Image 
              src={hyeran} 
              alt='porfile photo'
            />
          </div>
        

        <section>
        <div className=' rounded-md shadow-md'> 
          <div className=' text-center justify-center '>
            <h3 id='Skills' className='text-2xl font-bold  text-gray-600 py-10'>SKILLS</h3>
          </div>
          <div className='flex flex-wrap justify-center  gap-3 py-10'>
              <div className=' basis-1/3 flex flex-col justify-center items-center rounded-lg 
              shadow-md w-full m-3 overflow-hidden sm:w-30  bg-slate-100 dark:bg-white'>
              <Image src={code} alt='string' className='  w-20 m-6 '/>

              <h2 className='text-center font-bold text-teal-600 px-2'> Web Development</h2>
              <p className='text-center font-medium  text-gray-600 hover:text-teal-500 px-2 pb-3'> 
                CSS 
                <br /> HTML 
                <br /> JS 
                <br />Typescript
                <br /> Java </p>
              </div>

              <div className=' basis-1/3  flex flex-col justify-center items-center bg-slate-100 rounded-lg 
              shadow-md w-full m-3 overflow-hidden sm:w-60 '>
              <Image src={design} alt='string' className='  w-20 m-6 '/>

              <h2 className='text-center font-bold text-teal-600 px-2'> Web Design</h2>
              <p className='text-center font-medium text-gray-600 hover:text-teal-500 px-2  pb-3'> 
                Figma 
                <br /> Tailwind  
                <br /> Bootstrap </p>
              </div>

              <div className='basis-1/3  flex flex-col justify-center items-center bg-slate-100 rounded-lg 
              shadow-md w-full m-3 overflow-hidden sm:w-60'>
              <Image src={framework} alt='string' className='  w-20 m-6 '/>

              <h2 className='text-center font-bold text-teal-600 px-2'> Framework/DB</h2>
              <p className='text-center font-medium text-gray-600 hover:text-teal-500 px-2  pb-3'> 
                Node.js 
                <br /> React 
                <br /> PostgreSQL </p>
              </div>

              <div className='basis-1/3 flex flex-col justify-center items-center bg-slate-100 rounded-lg 
              shadow-md w-full m-3 overflow-hidden sm:w-60'>
              <Image src={aidl} alt='string' className='  w-20 m-6 '/>

              <h2 className='text-center font-bold text-teal-600 px-2'> ML</h2>
              <p className='text-center font-medium text-gray-600 hover:text-teal-500 px-2  pb-3'> 
               Pyton 
               <br />Tensorflow 
              </p>
              </div>
            </div>
        </div>  
        </section>

        <section id='Projects' className='projects'>
          <div className=' text-center p-8 justify-center '>
              <h4 className='text-l font-bold  text-gray-600 pt-20'>PORTFORLIO</h4>
              <h3 className='text-2xl font-bold text-gray-800 py-30'> My Projects</h3>
          </div>
        
          <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center py-10 gap-8 '>

          <div className=' basis-1/3 flex-1 h-78 w-96  rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 
            duration-300 hover:-translate-y-2 mx-auto' x-for = '(post, index) in posts'
            >
              <figure>
                <Image src={collab} alt='image' className='rounded-t object-cover'/>
                <figcaption className='p-4 '>
                  <p className='text-lg mb-4 font-bold leading-relaxed  text-gray-800 dark:text-gray-300'
                  x-text= "post.title">
                    Building a Movie Recommendation System
                  </p>
                  <small className='leading-5 text-gray-500 dark:text-gray-400' x-text='post.description'>
                    Algorithm that predicts ratings of movies matched with various users. Implemented cosign similarity and colloaborative filtering to predict ratings. 
                  </small>
                  <Link href='/movie' className='cursor-pointer'>
                    <div className='flex align-middle py-4'>
                      <p>
                        Read More  
                      </p>  
                      <FaChevronRight className='pt-2'/>
                    </div>
                  </Link>
                </figcaption>
              </figure>
            </div>

            <div className=' basis-1/3 flex-1 h-78 w-96  rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 
            duration-300 hover:-translate-y-2 mx-auto' x-for = '(post, index) in posts'
            >
              <figure>
                <Image src={resume} alt='image' className='rounded-t object-cover'/>
                <figcaption className='p-4 '>
                  <p className='text-lg mb-4 font-bold leading-relaxed  text-gray-800 dark:text-gray-300'
                  x-text= "post.title">
                    Building a Movie Recommendation System
                  </p>
                  <small className='leading-5 text-gray-500 dark:text-gray-400' x-text='post.description'>
                    Algorithm that predicts ratings of movies matched with various users. Implemented cosign similarity and colloaborative filtering to predict ratings. 
                  </small>
                  <a href='link' className='cursor-pointer'>
                    <div className='flex align-middle py-4'>
                      <p>
                        Read More  
                      </p>  
                      <FaChevronRight className='pt-2'/>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className=' basis-1/3 flex-1 h-78 w-96  rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 
            duration-300 hover:-translate-y-2 mx-auto' x-for = '(post, index) in posts'
            >
              <figure>
                <Image src={regime} alt='image' className='rounded-t object-cover'/>
                <figcaption className='p-4 '>
                  <p className='text-lg mb-4 font-bold leading-relaxed  text-gray-800 dark:text-gray-300'
                  x-text= "post.title">
                    Building a Movie Recommendation System
                  </p>
                  <small className='leading-5 text-gray-500 dark:text-gray-400' x-text='post.description'>
                    Algorithm that predicts ratings of movies matched with various users. Implemented cosign similarity and colloaborative filtering to predict ratings. 
                  </small>
                  <a href='link' className='cursor-pointer'>
                    <div className='flex align-middle py-4'>
                      <p>
                        Read More  
                      </p>  
                      <FaChevronRight className='pt-2'/>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>

            <div className=' basis-1/3 flex-1 h-78 w-96  rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 
            duration-300 hover:-translate-y-2 mx-auto' x-for = '(post, index) in posts'
            >
              <figure>
                <Image src={weather} alt='image' className='rounded-t object-cover'/>
                <figcaption className='p-4 '>
                  <p className='text-lg mb-4 font-bold leading-relaxed  text-gray-800 dark:text-gray-300'
                  x-text= "post.title">
                    Building a Movie Recommendation System
                  </p>
                  <small className='leading-5 text-gray-500 dark:text-gray-400' x-text='post.description'>
                    Algorithm that predicts ratings of movies matched with various users. Implemented cosign similarity and colloaborative filtering to predict ratings. 
                  </small>
                  <a href='link' className='cursor-pointer'>
                    <div className='flex align-middle py-4'>
                      <p>
                        Read More  
                      </p>  
                      <FaChevronRight className='pt-2'/>
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>  

        </section>

        <section id="Contact" className="contact">
          <Contact  />
        </section>  
        
      
      </main>
      <Footer />

    </div> 
  );
}
