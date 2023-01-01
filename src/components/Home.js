import React from 'react'
import MainImage from '../assets/heroImage.jpg'
import secondImage from '../assets/second.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import resume from '../assets/mernStackResume.pdf'

import * as Scroll from 'react-scroll'
let Link = Scroll.Link

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full pb-7 bg-gradient-to-b from-blue-900  to-indigo-400 text-white pt-40 md:pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-3xl md:text-6xl font-bold text-white">
            Hi, I'm
          </h2>
          <h2 className=" text-3xl md:text-6xl font-bold text-white ">
            Tabassum Islam
          </h2>
          <h2 className=" text-2xl md:text-4xl font-bold text-white mt-5">
            MERN Stack Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            As a CSE graduate my career is mainly based on building and
            desgining software. Currently, I love to work on web application as
            a MERN stack developer having 6 months hand on experience using
            powerful web technologies.
          </p>
          <div className="flex flex-col md:flex-row ">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group ml-5 md:ml-0 text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer shadow-xl shadow-zinc-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <button className="group ml-5 shadow-xl shadow-zinc-300 text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer">
              <a href={resume} download>
                Get Resume
              </a>
            </button>
          </div>
        </div>
        <div>
          <img
            // src={MainImage}
            src={secondImage}
            alt="my profile"
            className="rounded-full w-64 md:w-96 "
          />
        </div>
      </div>
    </div>
  )
}

export default Home
