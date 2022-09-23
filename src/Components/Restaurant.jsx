import React from 'react'

const Restaurant = ({ ele }) => {
  return (
    <div className='card'>
      <img width='254' height='160px' src={ele.image} alt='' />
      <div className='restaurant-details'>
        <div className='restaurant-title'>{ele.name}</div>
        <div className='restaurant-subtitle'>{ele.category.join(', ')}</div>
      </div>
      <div className='restaurant-info'>
        <div className='restaurant-ratings'>
          <i className='material-icons star-icon'>star</i> {ele.rating}
        </div>
        .
        <div className='restaurant-delivery-timings'>
          {' '}
          {ele.deliveryTimings}
        </div>{' '}
        .
        <div className='restaurant-cost-for-two'>₹{ele.costForTwo} FOR TWO</div>
      </div>
      <div className='offer-banner'>
        <span className='material-icons'> local_offer </span>
        <span className='offer-text'>{ele.offers.join(' | ')}</span>
      </div>
    </div>
  )
}

export default Restaurant
