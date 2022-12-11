import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [text, setText] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mcu7xa7', 'template_uh07eip', form.current, 'pRUP5M0nvsZdG4z35')
            .then((result) => {
                console.log(result.text);
                console.log('messege sent ');
                toast.success('Your Messege Was Sent Successfully.')
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div name="contact"
            className="w-full h-screen  bg-gradient-to-b  from-blue-900  to-indigo-400 text-white md:h-auto">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-white ">
                        Contact
                    </p>
                    <p className="py-6 text-xl">Submit the form below to get in touch with me</p>
                </div>
                <div className=" flex justify-center items-center">
                    <form ref={form} onSubmit={sendEmail} className=" flex flex-col w-full md:w-1/2">
                        <label className='text-xl'>Name</label>
                        <input required type="text" name="user_name" placeholder="Enter your name"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <label className='text-xl'>Email</label>
                        <input required placeholder="Enter your email"
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" type="email" name="user_email" />
                        <label className='text-xl'>Message</label>
                        <textarea name="message" placeholder="Write your message here ....."
                            className="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />

                        <input type="submit" value="Send" className="text-white text-xl bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;