import React from 'react';
import MainImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume from '../assets/mernStackResume.pdf'

import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

const Home = () => {
    return (
        <div name="home"
            className="h-screen w-full pb-7 bg-gradient-to-b from-blue-900  to-indigo-400 text-white pt-30 md:pt-0">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full" >
                    <h2 className=" text-3xl md:text-7xl font-bold text-white">
                        I'm a MERN Stack Developer
                    </h2>
                    <p className="text-white py-4 max-w-md">
                        Hello, I am Tabassum Islam. As a CSE graduate my career is mainly based on building and desgining software.
                        Currently, I love to work on web application as a MERN stack developer having 6 months hand on experience using powerful web technologies like
                        React, Tailwind, MongoDB, Node JS, Bootstrap,HTML, CSS.
                    </p>
                    <div className='flex flex-col md:flex-row '>
                        <Link
                            to="portfolio"
                            smooth
                            duration={500}
                            className="group ml-5 md:ml-0 text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </Link>
                        <button className="group ml-5 text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer">
                            <a href={resume} download>Get Resume</a>
                        </button>
                    </div>
                </div>
                <div>
                    <img
                        src={MainImage}
                        alt="my profile"
                        className="rounded-full w-64 md:w-96 "
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;