import React from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Screenshots from './Screenshots';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

const Projectdetails = () => {
    const allData = useLoaderData()
    const sentData = useLocation();
    var id = sentData.state.projectId


    var filteredData = allData.find(project => project.id === id)
    console.log(filteredData);
    const { name, type, client, server, description, images, technologies, details } = filteredData

    return (
        <div className="bg-gradient-to-b from-blue-900  to-indigo-400 text-white md:h-auto">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 pb-10">
                <h1 className='text-center text-6xl font-bold font-signature'>{name}</h1>
                <div className='flex flex-col mt-10 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-9 '>
                        {

                            images?.map(image => <Screenshots image={image}></Screenshots>)

                        }
                    </div>
                    <div className='mx-auto'>
                        <div className=' mt-10 '>
                            <div className='w-64 p-5 rounded-3xl bg-indigo-900 mx-auto mb-9 shadow-xl shadow-blue-300 hover:scale-110'><h2 className='text-2xl text-center  font-extralight font'>{type}</h2></div>
                            <h2 className='text-2xl font-bold  text-slate-900 mb-5'>Technology Used:</h2>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-3  '>
                                {
                                    technologies?.map(technology => <><div>
                                        <div className='bg-slate-900 w-40 p-4 text-center rounded-md opacity-75 hover:scale-110 hover:bg-black'>{technology}</div>
                                    </div></>)
                                }
                            </div>
                            <h2 className='text-2xl font-bold mt-10 mb-5 text-slate-900 '>Details About Project Features</h2>
                            <div>
                                <p>{details}</p>
                            </div>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                <button className="w-full px-2 py-3 m-4 rounded-xl bg-gradient-to-r text-xl from-indigo-500 to-blue-900 cursor-pointer duration-200 hover:scale-110">
                                    <a href={client} target='_blank'>Client Code</a>
                                </button>
                                {
                                    server && <><button className="w-full px-2 py-3 m-4 rounded-xl text-xl bg-gradient-to-r from-indigo-500 to-blue-900 cursor-pointer duration-200 hover:scale-110">
                                        <a href={server} target='_blank'>Server Code</a>
                                    </button></>
                                }

                            </div>
                            <div className='gap-2 bg-gradient-to-r from-indigo-500 to-black w-80 p-5 justify-center items-center rounded mx-auto hover:scale-y-125'>
                                <button><a href="/" className='flex gap-2 pl-8 text-xl'>
                                    <span>
                                        <BsFillArrowLeftSquareFill size={25} className="ml-1" />
                                    </span>Back To HomePage</a></button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projectdetails;