import React, { useEffect, useState } from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/html.png'
import './Progress.css'

const Skills = () => {
    const [data, setData] = useState()


    useEffect(() => {

        // Create PaymentIntent as soon as the page loads
        fetch('skills.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            }
            );
    }, []);

    const Progress = ({ done }) => {
        const [style, setStyle] = React.useState({});

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }

            setStyle(newStyle);
        }, 200);

        return (
            <div className="progress">
                <div className="progress-done" style={style}>
                    {done}%
                </div>
            </div>
        )
    }


    return (
        <div className=' bg-gradient-to-b from-blue-900  to-indigo-400 text-white md:h-auto pt-10 mx-auto'>
            <div className="pb-8 text-center mb-5">
                <p className="text-4xl font-bold inline border-b-4 border-white">My Skills</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20 pb-10 gap-2'>
                {data?.map(eachdata => {
                    return (<>
                        <div>
                            {console.log(eachdata)}
                            <h1 className='font-semibold'>{eachdata.name}</h1>
                            <Progress done={eachdata.level} />
                        </div>
                    </>)

                })}
            </div>

        </div>
    );
};

export default Skills;