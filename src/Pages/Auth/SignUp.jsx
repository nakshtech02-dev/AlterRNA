import React from 'react'
import Navbar from '../../components/Navbar'
import {  Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">

    <div className='bg-white w-[450px] h-[600px] rounded-[20px] flex flex-col justify-center items-center'>

        <h1  className='font-bold text-[32px] text-[#084191]'>Sign up</h1>

        <p className='text-[#676969] text-center'>
           <span className='font-semibold text-[18px] text-[#0C1520] '>Welcome back!</span> Please Signin to <br /> your account
        </p>

        <form className=' w-full p-5 px-10'>
            <div className='flex flex-col relative'>
                <label >Username</label>             
                <input type="text"  placeholder='Enter Username' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex flex-col relative mt-[10px]'>
                <label >Email Address</label>             
                <input type="text"  placeholder='Enter email address' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex flex-col relative  mt-[10px]'>
                <label >Password</label>             
                <input type="text"  placeholder='Enter password' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex flex-col relative mt-[10px]'>
                <label >Confirm Password</label>             
                <input type="text"  placeholder='Enter password' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex gap-2 mt-[10px] mb-[10px]'>
                <input type="checkbox" />
                <span>I agree to the terms and conditions</span>
            </div>
            <button className='w-full h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white rounded-[100px]'>Sign Up</button>
        </form>

        <h1>Already have an account? <Link to="/signin" className='font-semibold text-[#65C322]'>Sign In</Link></h1>

    </div>
      
    </div>
    </>
  )
}

export default SignUp
