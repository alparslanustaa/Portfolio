import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#252526] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '60px' }} />
      </div>

      {/* Menu */}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      </div>

      {/*hamburger */}
      <div className='hidden'>
        <FaBars />
      </div>


      {/*mobile menu*/}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>


      {/*Social Icons*/}

    </div>
  )
}

export default NavBar