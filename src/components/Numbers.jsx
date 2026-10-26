import React from 'react'

const Numbers = () => {
  return (
    <div className=' w-[1200px]   h-[150px] px-10 flex justify-around items-center bg-gradient-to-r from-[#084191] to-[#65C322] mx-auto rounded-[15px]' >
        

        <div>
            <h1 className='font-semibold text-[30px] text-white text-center'>$50M+</h1>
            <p className='text-white text-[18px]'>Funding Raised</p>
        </div>
        <div >
            <h1 className='font-semibold text-[30px] text-white text-center'>100+</h1>
            <p  className='text-white text-[18px]'>Team Members</p>
        </div>
        <div >
            <h1 className='font-semibold text-[30px] text-white text-center'>25+</h1>
            <p  className='text-white text-[18px]'>Publications</p>
        </div>
        <div >
            <h1 className='font-semibold text-[30px] text-white text-center'>10+</h1>
            <p  className='text-white text-[18px]'>Patents Filed</p>
        </div>
      
    </div>
  )
}

export default Numbers
