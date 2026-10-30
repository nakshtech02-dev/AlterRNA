import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] flex justify-between items-center px-30 pt-2 bg-white/17'>
      <Link to="/">
        <img src="/images/logo.png" alt="" className='w-[60px] h-[82px]'/>
      </Link>
      <div className='flex gap-[43px]'>
        <Link to="/about" className='font-medium '>About Us</Link>
        <Link to="/science" className='font-medium ' >Science</Link>
        <Link to="/platform" className='font-medium ' >Platform</Link>
        <Link to="/community" className='font-medium '>Community</Link>
        <Link to="/pipeline" className='font-medium '>Pipeline</Link>
      </div>
      <div className='flex gap-2'>
      <Link to="/contact" className='w-[170px] h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white flex justify-center items-center'>Contact Us</Link>
      <Link to="/signup" className='w-[170px] h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white flex justify-center items-center'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
