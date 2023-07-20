import data from './services/mockdata'
import CardList from './components/CardList/CardList'
import { useEffect, useState } from 'react'
import getJeansData from './services/getJeansData'
function App() {
  const [jeansData, setJeansData] = useState([]);

  useEffect(() => {
    getJeansData()
    .then(data => setJeansData(data))
  }, [])

  return (
    <>
      <h1>billie jean</h1>
      <div className="card">
        <h2>
          Michael J favourite denims
        </h2>

        {/* <CardList data={data.data} /> */}
      </div>
    </>
  )
}

export default App
