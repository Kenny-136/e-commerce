import React from 'react'
import NavBar from '../NavBar/NavBar'
import ProductList from '../ProductList/ProductList'
import styles from './StorePage.module.scss'
const StorePage = ({data}) => {
  return (
    <main>
      <NavBar />
      <section className={styles.wrapper}>
        <ProductList data={data}/>
      </section>
    </main>
  )
}

export default StorePage