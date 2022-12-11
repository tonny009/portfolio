import React from 'react';

const Screenshots = ({ image }) => {
    return (
        <div className='w-80'>
            <img className='h-48 rounded-md duration-200  w-full hover:scale-110' src={image} alt="" />
        </div>
    );
};

export default Screenshots;