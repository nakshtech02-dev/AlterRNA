import { ChevronDown } from 'lucide-react'
import React from 'react'
import { questions } from '../../data/data'

const Community5 = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center '>   

    <div className='w-[1200px] h-[560px]  flex justify-between'>
      {/* left Image  */}
      
      <img src="/images/blueDna.png" alt="" className='w-[540px] h-[560px]' />
      

      {/* right  */}

      <div className=' w-1/2'>
        <button className='text-[#65C322] border border-[#65C322] w-[316px] h-[40px] rounded-[150px]'>THERAPEUTIC FOCUS</button>

        <h1 className='font-semibold text-[30px] text-[#053374] mt-[12px]'>Transparency & Governance</h1>

        <p className='text-[#1E304A] text-[16px] mt-[6px]'>Trust through transparency, security through design, compliance through architecture</p>

        {questions.map((que,idx)=>(

        <div className='w-full h-[60px] border border-[#BEE3F3] rounded-[15px] flex justify-between items-center px-5 mt-[20px]'>
          <h1 className='font-medium text-[16px] text-[#1E304A]'>{que.title}</h1>
          <ChevronDown className='text-[#000000]' />
        </div>
        ))}
      </div>

    </div>

      
    </div>
  )
}

export default Community5
