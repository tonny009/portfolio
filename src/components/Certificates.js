import React, { useEffect, useState } from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Certificates = () => {
  const [certificate, setCertificates] = useState([])

  useEffect(() => {
    fetch('certificates.json')
      .then((res) => res.json())
      .then((data) => setCertificates(data))
  }, [])
  return (
    <div
      name="certificates"
      className="w-full h-auto pt-10 bg-gradient-to-b from-blue-900  to-indigo-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 pb-10">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            My Activities and Achievements Certificates
          </p>
        </div>

        <div className="grid sm:grid-cols-2  gap-8 px-12 sm:px-0 ">
          {certificate.map(({ id, topic, platform, image }) => (
            <div className="flex flex-col justify-center ali mb-5 bg-black pt-5 pl-10 pb-5 bg-opacity-40 rounded">
              <div className="w-full mb-3 ">
                <PhotoProvider>
                  <PhotoView src={image}>
                    <figure>
                      <img
                        src={image}
                        alt=""
                        className="rounded-md duration-200 h-40 w-60 cursor-pointer hover:scale-105"
                      />
                    </figure>
                  </PhotoView>
                </PhotoProvider>{' '}
              </div>
              <div>
                <h2 className="text-xl font-bold">{topic}</h2>
                <h3>{platform}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates
