import React from 'react';
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/html.png'
import './Progress.css'

const Skills = () => {
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
        <div>
            <h1>React Progress Bar</h1>
            <Progress done="60" />
        </div>
    );
};

export default Skills;