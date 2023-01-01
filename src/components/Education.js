import React from 'react'
import image from '../assets/portfolio-final.png'

const Education = () => {
  return (
    <div
      name="about"
      className="w-full h-auto  md:h-screen pt-10 bg-gradient-to-b from-blue-900  to-indigo-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            My educational Background
          </p>
        </div>
        {/* Picture vs education */}
        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0">
          <div>
            <img
              src={image}
              alt="my profile"
              className="rounded-full w-64 md:w-96 "
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-full bg-black bg-opacity-75 p-5 rounded mb-4">
              <h1 className="font-extrabold">
                BSc in Computer Science and Engineering{' '}
              </h1>
              <p>East West University, Dhaka</p>
              <p>CGPA: 3.83 out of 4.00</p>
              <p>Graduation Year: 2021</p>
            </div>
            <div className="w-full bg-black bg-opacity-75 p-5 rounded mb-4">
              <h1 className="font-extrabold">Higer Secondary Certificate </h1>
              <p>New Govt. Degree College , Rajshahi</p>
              <p>GPA: 5 out of 5</p>
              <p>Year: 2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
