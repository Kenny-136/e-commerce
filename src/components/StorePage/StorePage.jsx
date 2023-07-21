import React from 'react'
import NavBar from '../NavBar/NavBar'
import ProductList from '../ProductList/ProductList'
const StorePage = ({data}) => {
  return (
    <>
      <NavBar />
      <ProductList data={data}/>
    </>
  )
}

export default StorePage