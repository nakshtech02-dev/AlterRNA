import React from 'react'

const Researcher1 = () => {
  return (
     <div className="min-h-screen  bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className='w-[1200px]       mb-[40px] flex flex-col items-center '>

            <h1 className='font-bold text-[36px] text-[#084191] mt-[68px]'>Built for Researcher & Scientists </h1>

            <p className='text-[#2F3542] text-[18px] mt-[6px] text-center' >Join a verified network where groundbreaking research <br /> meets ethical scientific collaboration.</p>

            <div className='mt-[22px] flex gap-5'>
                <button className='w-[230px] h-[50px] rounded-[100px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white'>Register as a Researcher</button>
                <button className='w-[230px] h-[50px] rounded-[100px] bg-white text-[#1E304A]'>Learn How It Works</button>
            </div>

            <div className='flex justify-between mt-5 w-full'>
                <img src="/images/r1.png" alt="" className='w-[280px]' />
                <img src="/images/r2.png" alt="" className='w-[600px] h-[250px] mt-19' />
                <img src="/images/r3.png" alt="" className='w-[280px]' />
            </div>

        </div>
      
    </div>
  )
}

export default Researcher1
