import React from 'react'
import Card from '../Card/Card'
const CardList = ({data}) => {
  console.log(data)
  return (
    <section>
      {data.map(item => (
      <Card key={item.id} item={item}/>
      ))}
    </section>
  )
}

export default CardList