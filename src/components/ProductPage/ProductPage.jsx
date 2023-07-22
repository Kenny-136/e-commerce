import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getJeansByID, getVariantsByID } from '../../services/getJeansData'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

const ProductPage = () => {
  const {id } = useParams()
  const [jean, setJean] = useState(null)
  const [variants, setVariants] = useState(null)
  const [error, setError] = useState(null)

  useEffect( () => {
    getJeansByID(id)
      .then(data => setJean(data))
      .catch(error => setError(error))
      .finally(getVariantsByID(id)
        .then(data => setVariants(data)))
  }, []);


  return (
    <>
    <NavBar />
    {jean && 
      <section>
        <h1>{jean.name}</h1>
        <p>{jean.desc}</p>
        <img src={jean.img} alt="" />
      </section>
    }
    {variants &&
      variants.map(size => (
        <p key={size.id}>Size: {size.id} Stock: {size.qty}</p>
      ))
    }
    {error && <h2>{error.message}</h2>}
    <Link to={'/store'}>Back</Link>
    </>
  )
}

export default ProductPage