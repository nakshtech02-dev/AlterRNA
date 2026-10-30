import React from "react";

const About7 = () => {
  return (
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
<div className="absolute bottom-30 left-[200px] text-center">
        <h1 className=" font-semibold text-[30px] text-[#053374]">Join the AlterRNA Platform</h1>
        <p className="text-center text-[#2F3542] mt[10px] mb-[10px]">
Connect with researcher explore ongoing projects and contribute to <br /> advancing RNA therapeutics
        </p>
        <div className="flex gap-5">
          <button className="w-[294px] h-[50px]  bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px]" >Explore Research Projects -5</button>
          <button className="w-[200px] h-[50px] border border-[#084191] rounded-[100px]">Join the Platform</button>
          <button className="border border-[#65C322] w-[280px] h-[50px] rounded-[100px]">Learn About Collaboration</button>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About7;
