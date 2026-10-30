import React from 'react'

const About6 = () => {
  return (
    <div className='h-[600px] bg-[#F2FBFF] w-full flex justify-center items-center'>
        <div className='w-[1200px] h-[430px] flex gap-10'>
            {/* left  */}

            <div className='flex gap-8 '>
                <img src="/images/greenDNA.png" alt="" className='w-[310px] h-[310px]'/>

                <img src="/images/redDNA.png" alt=""  className='w-[310px] h-full' />
            </div>

            {/* right  */}

            <div className='w-[550px]'>
                <h1 className='font-semibold text-[30px] text-[#053374]'>Collaboration Philosophy</h1>

                <p className='text-[16px] text-[#1E304A] mt-[10px]'>At AlterRNA, we believe that breakthrough innovation emerges from structured collaboration. Our platform enables open yet controlled scientific exchange, where researchers maintain ownership of their contributions while advancing collective knowledge.</p>

                <p  className='text-[16px] text-[#1E304A] mt-[10px]'>We enable collaboration across scientific disciplines, connecting researchers, clinicians, and industry partners in a unified platform designed to accelerate discovery and development.</p>

                <p  className='text-[16px] text-[#1E304A] mt-[10px]'>Our focus extends beyond immediate results. We prioritize long-term research impact, supporting projects that may take years to reach clinical application but have the potential to transform therapeutic approaches and improve patient outcomes.</p>
            </div>
        </div>
      
    </div>
  )
}

export default About6
