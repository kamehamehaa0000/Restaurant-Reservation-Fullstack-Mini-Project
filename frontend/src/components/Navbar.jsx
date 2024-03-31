import React from 'react'
import './navbar.css'
import { MdRestaurantMenu } from 'react-icons/md'
import { MdOutlineContacts } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
import { GrRestaurant } from 'react-icons/gr'
import { MdRamenDining } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <img src="/logo.JPG" alt="" />
      </div>
      <div className="nav-link-container">
        <a href="#home">
          <span>
            <GrRestaurant />
            Home
          </span>
        </a>
        <a href="#menu">
          <span>
            <MdRestaurantMenu /> Menu
          </span>
        </a>
        <a href="#about">
          <span>
            <GrContact />
            About
          </span>
        </a>
        <a href="">
          <span>
            <MdOutlineContacts />
            Contact
          </span>
        </a>
      </div>
      <div className="nav-reservation">
        <a href="#reservation">
          <span>
            <MdRamenDining />
          </span>
        </a>
      </div>
    </div>
  )
}

export default Navbar
