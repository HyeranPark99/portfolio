// app/page.tsx
"use client";
import { useState } from "react"
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function nav(){
     const [darkMode, setDarkMode] = useState(false);

    return(
        
        <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 ">
            
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className='text-xl font-burtons'>developedbyhr</h1>
            <ul className='flex items-center'>
              {/* <li className="pr-8">
                <BsFillMoonStarsFill onClick= {onClick}
                className='cursor-pointer text-xl dark:fill-slate-50'/>
              </li> */}
              {/* <li>
                  <a 
                    className=' bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8' 
                    href='#'
                  >
                    Resume
                  </a>
                </li>  */}
                
                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden
                    hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                    dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white
                    dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className=" font-bold block py-2 pl-3 pr-4 text-white bg-teal-700 rounded md:bg-transparent md:text-teal-500 md:p-0
                            dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#Skills" className=" font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                            dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Skills</a>
                        </li>
                        <li>
                            <a href="#Projects" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                            dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#Contact" className="font-bold block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                            dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </ul>

            </div>
        </nav>
    );
}