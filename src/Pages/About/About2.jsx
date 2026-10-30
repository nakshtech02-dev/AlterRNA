import React from 'react'

const About2 = () => (
  <div className='h-[530px] w-full flex justify-center items-center'>
    <div className='h-[400px] w-[1200px]  mx-auto flex gap-10'>
      {/* left */}
      <div>
        <img src="/images/injection.png" alt="" />
      </div>
      {/* right  */}

      <div className='w-1/2 flex flex-col gap-2'>
        <button className='text-[#65C322] border border-[#65C322] w-[128px] h-[40px] rounded-[150px] mt-10'>OUR MISSION</button>

        <h1 className='font-semibold text-[30px] text-[#053374]'>Our Mission</h1>

        <p className='text-[16px] text-[#1E304A]'>AlterRNA is dedicated to advancing RNA-based therapeutic research through collaborative, transparent scientific innovation.</p>

        <p className='text-[16px] text-[#1E304A]'>We enable collaboration across scientific disciplines, connecting researchers, clinicians, and industry partners in a unified platform designed to accelerate discovery and development.</p>

        <p className='text-[16px] text-[#1E304A]'>By reducing development costs through shared innovation and supporting translational research from discovery to clinical application, we aim to make RNA therapeutics more accessible and impactful.</p>
      </div>
    </div>

  </div>
)

export default About2
