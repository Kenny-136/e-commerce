import React from 'react'

const Card = ({item}) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      {item.variants.map(variant => (
        <img key={variant.id} src={variant.imageUrl} alt=""  />
      ))}
    </div>
  )
}

export default Card