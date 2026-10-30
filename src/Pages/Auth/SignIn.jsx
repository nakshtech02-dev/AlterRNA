import React from 'react'
import Navbar from '../../components/Navbar'
import {  Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
const SignIn = () => {
  return (
      <>
    <Navbar/>
    <div className="min-h-screen bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">

    <div className='bg-white w-[450px] h-[600px] rounded-[20px] flex flex-col justify-center items-center'>

        <h1  className='font-bold text-[32px] text-[#084191]'>Login</h1>

        <p className='text-[#676969] text-center'>
           <span className='font-semibold text-[18px] text-[#0C1520] '>Welcome back!</span> Please Signin to <br /> your account
        </p>

        <form className=' w-full p-5 px-10'>
            
            <div className='flex flex-col relative mt-[10px]'>
                <label >Email Address</label>             
                <input type="text"  placeholder='Enter email address' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex flex-col relative  mt-[10px]'>
                <label >Password</label>             
                <input type="text"  placeholder='Enter password' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
           
            <div className='flex justify-between mt-[10px] mb-[15px]'>
                <div className='flex gap-2'>
                <input type="checkbox" className='text-green-400' />
                <span>Keep me signed in</span>
                </div>
                <Link to="/forgot" className='text-[#FFA600]'>Forgot Password?</Link>
            </div>
            <button className='w-full h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white rounded-[100px]'>Sign In</button>
        </form>

        <span>Or login with</span>
        <div className='w-full px-10'>

            <button className='w-full h-[50px] bg-[#F8F8F8] text-black rounded-[100px] border border-[#DDDDDD] flex justify-center items-center gap-2 mt-[10px]' ><FaGoogle />Google</button>
            </div>

        <h1 className='mt-[10px]'>Dont have an account? <Link to="/signup" className='text-[#65C322] font-semibold'>Signup</Link></h1>
    </div>
      
    </div>
    </>
  )
}

export default SignIn
