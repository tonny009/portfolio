import React from 'react';
import MainImage from '../assets/heroImage.jpg'
import github from '../assets/social/github.png'
import linkedin from '../assets/social/linkedin (1).png'
import facebook from '../assets/social/facebook.png'


const Footer = () => {
    return (
        <div>

            <footer class="p-4 bg-blue-900  sm:p-6 text-white ">
                <div class="md:flex md:justify-between justify-center ml-10 md:ml-10 ">
                    <div class="mb-6 md:mb-0">
                        <div className='flex'>

                            <img src={MainImage} class="mr-3 h-8 rounded-full" alt="FlowBite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-400">Tabassum Islam</span>
                        </div>
                        <h6 className='ml-10'>Tokyo,Japan</h6>
                    </div>
                    <div class="sm:flex sm:items-center sm:justify-ceter">
                        <div class="flex mt-4 space-x-6 sm:mt-0">
                            <a href="https://github.com/tonny009" target="_blank" class="text-gray-500 hover:text-white dark:hover:text-white">
                                <img src={github} className='w-16' alt="" />
                                <span class="sr-only">Github page</span>
                            </a>
                            <a href="https://www.linkedin.com/in/tabassum-islam-671b65215/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <img src={linkedin} className='w-16' alt="" />

                                <span class="sr-only">Linkedin page</span>
                            </a>
                        </div>
                    </div>

                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </footer>

        </div>
    );
};

export default Footer;