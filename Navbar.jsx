// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
// eslint-disable-next-line no-unused-vars
import logo from '../../assets/logo.png'


const Navbar = () => {
  return (
    <nav className='container'>
  <img src={logo} alt='' className='logo'/>
     <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Program</li>
      <li>Campus</li>
      <li>Testimonials</li>
      <li><button className='btn'>Contact Us</button></li>
     
     </ul>
    </nav>
  )
}

export default Navbar
