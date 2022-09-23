import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = (props) => {
  const navbarOpt = [
    {
      iconName: 'person_outline',
      label: 'Sign In',
    },
    {
      iconName: 'shopping_bag',
      label: 'Cart',
    },
    {
      iconName: 'support',
      label: 'Help',
    },
    {
      iconName: 'search',
      label: 'Search',
    },
  ]

  return (
    <section className='navbar'>
      <div className='container'>
        <img className='logo' src={logo} alt='' />
        <div className='location'>
          <span className='city'> {props.city}</span>
          <span className='state'>
            {props.state}, {props.country}
          </span>
        </div>
        <div className='navbar-options'>
          {navbarOpt.map((ele) => (
            <div key={ele.iconName} className='navbar-option'>
              <span className='material-icons'> {ele.iconName}</span>{' '}
              {ele.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Navbar
