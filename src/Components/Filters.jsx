import React from 'react'

const Filters = ({ filters, currentFilteredBy, updateFilter }) => {
  return (
    <div className='container restaurants'>
      <h1>50 restaurants</h1>
      <div className='restaurant-options'>
        {Object.entries(filters).map(([key, value]) => (
          <div
            key={key}
            className='restaurant-option'
            onClick={() => updateFilter(key)}
          >
            {value}
          </div>
        ))}

        {/* <div className='restaurant-option'>Cost High to Low</div>
        <div className='restaurant-option'>Cost Low to High</div>
        <div className='restaurant-option'>Ratings</div>
        <div className='restaurant-option'>Delivery Time</div>
        <div className='restaurant-option'>Relevance</div> */}
      </div>
    </div>
  )
}

export default Filters
