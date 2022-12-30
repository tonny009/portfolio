import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const Screenshots = ({ image }) => {
  return (
    <div className="w-80">
      <PhotoProvider>
        <PhotoView src={image}>
          <figure>
            <img
              className="h-48 rounded-md duration-200  w-full hover:scale-110"
              src={image}
              alt=""
            />
          </figure>
        </PhotoView>
      </PhotoProvider>
    </div>
  )
}

export default Screenshots
