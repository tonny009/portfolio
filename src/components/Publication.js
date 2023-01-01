import React from 'react'

const Publication = () => {
  return (
    <div
      name="publication"
      className="bg-gradient-to-b from-blue-900  to-indigo-400 text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10 pb-10">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-white">
            Publications
          </p>
          <p className="py-6">Check out my academic publications here</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 px-12 sm:px-0  ">
          {/* <div className="w-full  p-5 rounded bg-gradient-to-b from-black  to-indigo-600 bg-transparent	"> */}
          <div className="w-full shadow-xl shadow-black  p-5 rounded bg-black bg-opacity-40	">
            <h1 className="text-xl font-bold">
              Detecting Bengali Spam SMS Using Recurrent Neural Network
            </h1>
            <p>
              <strong>Technologies:</strong> Machine Learning, Python,Deep
              Learning
            </p>
            <p>
              <button className="w-full px-2 py-3 mt-5 rounded-xl bg-gradient-to-r text-xl from-indigo-500 to-blue-900 cursor-pointer duration-200 hover:scale-110">
                <a
                  href="https://www.researchgate.net/publication/341403043_Detecting_Bengali_Spam_SMS_Using_Recurrent_Neural_Network"
                  target="_blank"
                >
                  Publication link
                </a>
              </button>
            </p>
          </div>

          <div className="w-full shadow-xl shadow-black p-5 rounded bg-black bg-opacity-40 	">
            <h1 className="text-xl font-bold">
              Systematic Analysis of Hateful Text Detection Using Machine
              Learning Classifiers
            </h1>
            <p>
              <strong>Technologies:</strong> Machine Learning, NLP, Python,Deep
              Learning
            </p>
            <p>
              <button className="w-full px-2 py-3 rounded-xl bg-gradient-to-r text-xl from-indigo-500 to-blue-900 cursor-pointer duration-200 hover:scale-110">
                <a
                  href="https://ieeexplore.ieee.org/document/9608010"
                  target="_blank"
                >
                  Publication link
                </a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publication
