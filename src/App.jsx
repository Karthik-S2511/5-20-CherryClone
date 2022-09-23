import './App.css'
import { useState } from 'react'
import Filters from './Components/Filters'
import Navbar from './Components/Navbar'
import Offers from './Components/Offers'
import Restaurants from './Components/Restaurants'

import userInfo from './Data/userInfo.json'
import offers from './Data/offers.json'
import restaurants from './Data/restaurants.json'

const filters = {
  1: 'Cost High to Low',
  2: 'Cost Low to High',
  3: 'Ratings',
  4: 'Delivery Time',
  5: 'Relevance',
}

function App() {
  const [filterBy, setFilterBy] = useState('')
  const [data, setData] = useState(restaurants)

  const updateFilter = (newFilter) => {
    console.log(newFilter)
    switch (newFilter) {
      case '1': {
        setFilterBy(1)
        data.sort((a, b) => b.costForTwo - a.costForTwo)
        setData([...data])

        break
      }
      case '2': {
        setFilterBy(2)
        data.sort((a, b) => a.costForTwo - b.costForTwo)
        setData([...data])

        break
      }
      default: {
        setData(restaurants)
        break
      }
    }
  }

    return (
      <div>
        Cherry
        <Navbar {...userInfo.location} />
        <Offers offers={offers} />
        <section className='near-you'>
          <Filters
            filters={filters}
            currentFilteredBy={filterBy}
            updateFilter={updateFilter}
          />
          <Restaurants restaurants={data}></Restaurants>
        </section>
      </div>
    )
  }


export default App
