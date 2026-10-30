import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Researcher4 = () => {
  return (
    <>
     <div className="min-h-screen  w-full  flex justify-center items-center ">
        <div className=" relative w-[1200px] h-[400px]   bg-[url('/images/gvn.png')] bg-cover bg-center bg-no-repeat  rounded-[20px] text-white flex flex-col justify-center items-center rounded-[15px] overflow-hidden">
          
          <div className="absolute inset-0 bg-[#001D45]/75"></div>

          <button className='w-[110px] h-[35px] border border-[#65C322] rounded-[150px] relative'>ACCESS</button>

          <h1 className='font-semibold text-[30px]  relative'>What You Can Access</h1>

          <p className='text-[16px] relative'>Comprehensive resources and tools tailored to your role and needs</p>
<div className='flex flex-col gap-2 mt-[22px] relative'>
          <div className='flex gap-5'>

            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Active RNA therapeutics research projects</h1>

            </div>
            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Scientific documentation and protocols</h1>

            </div>
          </div>
          <div className='flex gap-5'>

            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Collaboration tools and data repositories</h1>

            </div>
            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Educational resources and webinars</h1>

            </div>
          </div>
          <div className='flex gap-5'>

            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Community forums and peer discussions</h1>

            </div>
            <div className='w-[410px] h-[50px] bg-[#000D28]/49 flex justify-center gap-4 items-center rounded-[8px]' >
            <CircleCheckBig className='text-[#65C322]' />
            <h1>Publication and dissemination support</h1>

            </div>
          </div>
          </div>
        </div>
      </div>
       <div className="min-h-screen w-full flex justify-center items-center">
      <div className=" w-[1200px] h-screen relative flex justify-center items-center ">
       <div className="flex  gap-2">

        <div className="flex flex-col w-[142px] gap-2 mt-10">
          <img src="/images/l1.png" alt="" />
          <img src="/images/l2.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2">
          <img src="/images/l3.png" alt="" />
          <img src="/images/l4.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-20">
          <img src="/images/l5.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mb-20">
          <img src="/images/l6.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-10">
          <img src="/images/l7.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 ">
          <img src="/images/l8.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-15">
          <img src="/images/l9.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 ">
          <img src="/images/l10.png" alt="" />
          <img src="/images/l11.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-20">
          <img src="/images/l12.png" alt="" />
          <img src="/images/l13.png" alt="" />
        </div>
<div className="absolute bottom-30 left-[350px] text-center">
        <h1 className=" font-semibold text-[30px] text-[#053374]">Join the AlterRNA As A Researcher</h1>
        <p className="text-center text-[#2F3542] mt[10px] mb-[10px]">
Be part of verified community advancing the future of RNA <br /> theraputics through ethical, collaborative science
        </p>
        <div className="flex justify-center">
          <button className="w-[294px] h-[50px]  bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white" >Register as Researcher</button>
         
        </div>
        </div>
       </div>
      </div>
    </div>
    </>

  )
}

export default Researcher4
