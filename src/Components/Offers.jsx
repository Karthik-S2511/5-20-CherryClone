import React from 'react'
// import offer1 from '../assets/offer1.jpeg'
// import offer2 from '../assets/offer2.jpeg'
// import offer3 from '../assets/offer3.jpeg'
// import offer4 from '../assets/offer1.jpeg'

const Offers = ({ offers }) => {
  return (
    <section className='offers'>
      <div className='container'>
        {offers.map((ele, ind) => (
          <img key={ind} className='offer' src={ele} alt='' />
        ))}
        {/* <img className='offer' src={offer1} />
        <img className='offer' src={offer2} />
        <img className='offer' src={offer3} />
        <img className='offer' src={offer4} /> */}
      </div>
    </section>
  )
}

export default Offers
// importing images:
// 1. all the images should be in a single folder (assets), move the assets folder from src to public.
// 2. import the images as above
