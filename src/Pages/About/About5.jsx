import React from 'react'

const About5 = () => {
  return (
    <div className='min-h-screen w-full bg-white flex justify-center items-center'>
      <div className='w-[1200px] h-[550px]  flex gap-15'>
        
        {/* left  */}
        <img src="/images/scifocus.png" alt="" className='h-full w-[400px]' />

        {/* right  */}

        <div>
            <h1 className='font-semibold text-[30px] text-[#053374]'>Scientific Focus</h1>
        
            <div className='flex gap-4 mt-10'>
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                    <img src="/images/a1c1.png" alt="" />

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>RNA Therapeutics</h1>
                    <p>Developing innovative RNA-based treatments including mRNA, siRNA, and <br />  antisense oligonucleotides.</p>
                </div>
            </div>
            <div className='flex gap-4 mt-10'>
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                    <img src="/images/a1c1.png" alt="" />

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>Targeted Therapies</h1>
                    <p>Precision medicine approaches for specific disease mechanisms and patient populations.</p>
                </div>
            </div>
            <div className='flex gap-4 mt-10'>
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                    <img src="/images/a1c1.png" alt="" />

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>Translational Research</h1>
                    <p>Bridging the gap between laboratory discoveries and clinical applications</p>
                </div>
            </div>
            <div className='flex gap-4 mt-10'>
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                    <img src="/images/a1c1.png" alt="" />

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>Platform-Driven Innovation
</h1>
                    <p>Leveraging shared tools and methodologies to accelerate therapeutic development.</p>
                </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default About5
