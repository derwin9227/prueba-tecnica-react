import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <nav className='navbar-list'>
        <li className='navbar-list-item'><a href='#count'>Count</a></li>
        <li className='navbar-list-item'><a href='#age'>Age</a></li>
        <li className='navbar-list-item'><a href='#order'>Order</a></li>
        <li className='navbar-list-item'><a href='#fast'>Fastestship</a></li>
        <li className='navbar-list-item'><a href='#planet'>Planet</a></li>
      </nav>
    </div>
  )
}

export default Header