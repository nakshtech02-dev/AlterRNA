import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[90px] flex justify-between items-center px-30 pt-2 bg-white/17'>
      <div>
        <img src="/images/logo.png" alt="" className='w-[60px] h-[82px]'/>
      </div>
      <div className='flex gap-[43px]'>
        <a href="" className='font-medium '>About Us</a>
        <a href="" className='font-medium ' >Science</a>
        <a href="" className='font-medium ' >Platform</a>
        <a href="" className='font-medium '>Community</a>
        <a href="" className='font-medium '>Pipeline</a>
      </div>
      <button className='w-[170px] h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white'>Contact Us</button>
    </div>
  )
}

export default Navbar
