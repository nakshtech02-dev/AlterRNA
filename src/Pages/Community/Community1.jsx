import React from 'react'

const Community1 = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className='w-[1200px]   flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[36px] text-[#084191] mt-[68px]'>Collaborative RNA Therapeutics, Built Together</h1>
            <p className='text-[#2F3542] text-[18px] mt-[6px]'>A secure platform connecting science, medicine, and innovation</p>
            <div className='mt-[22px] flex gap-2'>
                <button className=' bg-gradient-to-r from-[#084191] to-[#65C322] px-5 py-2 rounded-[100px] text-white'>Explore Collobration Model</button>
                <button className='px-5 py-2 rounded-[100px] bg-white text-[#1E304A]'>Join as Research Partner</button>
            </div>

            <div className='w-[800px] h-auto rounded-[20px]  mt-[40px] mb-[40px]'>
                    <img src="/images/communityHome.png" alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Community1
