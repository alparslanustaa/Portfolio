import React  from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='fixed w-full h-[80px] flext justify-between items-center px-4 bg-[#252526] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '60px' }} />
      </div>
    </div>
  )
}

export default NavBar