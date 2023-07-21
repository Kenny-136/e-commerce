import React from 'react'

const CarouselSlide = ({data}) => {
  return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.desc}</p>
            <img src={data.img} alt="" />
        </div>
  )
}

export default CarouselSlide