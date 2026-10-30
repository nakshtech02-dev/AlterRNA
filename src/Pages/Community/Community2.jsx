import React from 'react'

const Community2 = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>

        <div className='w-[1200px]  h-[837px] mt-[40px] mb-[40px] flex flex-col gap-2'>
            {/* uppper  */}

            <div className='flex justify-between'>
                <div className='w-[390px] h-[410px]  flex flex-col  justify-center '>
                    <button className='text-[#65C322] rounded-[150px] px-5 py-2 border border-[#65C322] w-[150px]'>PROBLEM</button>

                    <h1 className='font-semibold text-[30px] text-[#053374] mt-[13px]'>Who we work with </h1>

                    <p className='text-[16px]  text-[#1E304A] mt-[13px]'>A diverse ecosystem of stakeholders united in advancing RNA therapeutic development.</p>
                </div>
                <div className='w-[390px] h-[410px] bg-[#65C322] text-white rounded-[15px] p-5 flex flex-col justify-end'>
                    <h1 className='font-semibold text-[20px]'>Researcher & Scientist</h1>
                    <p className='text-[16px] mt-[5px]'>Advancing fundamental research and training future scientists.</p>
                </div>
                <div className='relative w-[390px] h-[410px] bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]  rounded-[15px] overflow-hidden'>
                    <img src="/images/D&C.png" alt=""  className='w-full h-full ' />
                    <div class="absolute inset-0 bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]"></div>
                </div>
            </div>

            {/* lower  */}

            <div className='flex justify-between'>
                  <div className='relative w-[390px] h-[410px] bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]  rounded-[15px] overflow-hidden'>
                    <img src="/images/Academic.png" alt=""  className='w-full h-full ' />
                    <div class="absolute inset-0 bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]"></div>
                </div>
                  <div className='relative w-[390px] h-[410px] bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]  rounded-[15px]  overflow-hidden'>
                    <img src="/images/Contract.png" alt=""  className='w-full h-full ' />

                    <div class="absolute inset-0 bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]"></div>
                </div>
                  <div className=' relative w-[390px] h-[410px] bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]  rounded-[15px] overflow-hidden'>
                    <img src="/images/Strategic.png" alt=""  className='w-full h-full ' />

                    <div class="absolute inset-0 bg-gradient-to-r from-[#000000]/0 to-[#010100]/[72%]"></div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Community2
