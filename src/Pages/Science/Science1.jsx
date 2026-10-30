import React from 'react'

const Science1 = () => {
  return (
    <div className="min-h-screen  bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
        <div className='w-[1200px]       mb-[40px] flex flex-col items-center '>

            <h1 className='font-bold text-[36px] text-[#084191] mt-[68px]'>Investor Access to Scientific Innovation</h1>

            <p className='text-[#2F3542] text-[18px] mt-[6px]' >Advancing RNA Therapeutics Through Transparent Research Pipelines</p>

            <div className='mt-[22px] flex gap-5'>
                <button className='w-[230px] h-[50px] rounded-[100px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white'>Express Your Interest</button>
                <button className='w-[230px] h-[50px] rounded-[100px] bg-white text-[#1E304A]'>View Research Pipeline</button>
            </div>

            <div className='flex justify-between mt-5 w-full'>
                <img src="/images/s1.png" alt="" className='w-[280px]' />
                <img src="/images/s2.png" alt="" className='w-[600px] h-[250px] mt-19' />
                <img src="/images/s3.png" alt="" className='w-[280px]' />
            </div>

        </div>
      
    </div>
  )
}

export default Science1
