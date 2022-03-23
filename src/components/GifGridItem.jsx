import React from 'react'

//styles
import './styles/GifGridItem.css'
const GifGridItem = ({title, images, }) => {
  return (
    <div  >
      <div >
      <img   src={images} alt='img'/>
        <p  >{title}</p>
      </div>
    </div>
  )
}

export default GifGridItem
