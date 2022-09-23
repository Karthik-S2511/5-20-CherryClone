import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  return (
    <div className='container divider'>
      <div className='cards'>
        {props.restaurants.map((ele) => (
          <Restaurant ele={ele} key={ele.id} />
        ))}
      </div>
    </div>
  )
}

export default Restaurants
