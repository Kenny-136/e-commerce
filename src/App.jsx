import CardList from './components/ProductList/ProductList'
import { useEffect, useState } from 'react'
import getJeansData from './services/getJeansData'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import ProductPage from './components/ProductPage/ProductPage'
function App() {
  const [jeansData, setJeansData] = useState([]);

  useEffect(() => {
    getJeansData()
    .then(data => setJeansData(data))
  }, [])

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store' element={<CardList data={jeansData}/>}></Route>
        <Route path='store/:id' element={<ProductPage />}></Route>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
