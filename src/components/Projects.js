import React from 'react';
import easybuysell from '../assets/portfolio/phone.webp'
import studio from '../assets/portfolio/camera.jpg'
import elearning from '../assets/portfolio/eLearning.jpeg'
import quiz from '../assets/portfolio/quiz.jpg'

import * as Scroll from 'react-scroll';
import { useNavigate } from 'react-router-dom';
let Link = Scroll.Link;

const Projects = ({ projects }) => {
    const navigate = useNavigate()
    const handleClickDetails = (id) => {
        console.log(id);
        navigate("/projectdetails", {
            state: {
                projectId: id
            }
        })
    }
    return (
        <div name="portfolio"
            className="bg-gradient-to-b from-blue-900  to-indigo-400 text-white md:h-auto"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 pb-10">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-white">
                        Portfolio
                    </p>
                    <p className="py-6">Check out my projects here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, name, type, client, server, live }) => (
                        <div key={id} className="shadow-md shadow-blue-200 bg-blue-900 rounded-lg">

                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 h-48 w-full hover:scale-105"
                            />
                            <div className="flex-col items-center justify-center">
                                <div>
                                    <p className='text-xl p-4'>{name}</p>
                                    <span className='p-4 text-gray-300'>{type}</span>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className="w-1/2 px-2 py-3  m-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer hover:scale-105">
                                        <a href={live} target='_blank'>Live</a>
                                    </button>
                                    <button onClick={() => handleClickDetails(id)} className="w-1/2 px-2 py-3 m-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer duration-200 hover:scale-110">
                                        More Details
                                    </button>
                                    {/* <button className="w-16 px-2 py-3 m-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer duration-200 hover:scale-110">
                                        <a href={client} target='_blank'>Client</a>
                                    </button>
                                    {
                                        server && <><button className="w-16 px-2 py-3 m-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer duration-200 hover:scale-110">
                                            <a href={server} target='_blank'>Server</a>
                                        </button></>
                                    } */}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;