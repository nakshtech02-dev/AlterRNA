import React from 'react'
import { communityCard, researcher, scienceCard } from "../../data/data";

const Researcher2 = () => {
  return (
     <div className="min-h-screen w-full flex justify-center items-center">
          <div className="w-[1200px] h-auto  my-[40px] flex flex-col items-center">
            <button className="text-[#65C322] border border-[#65C322] w-[145px] h-[40px] rounded-[150px]">
              RESEARCHER
            </button>
    
            <h1 className="font-semibold text-[30px] text-[#053374] mt-[15px]">
              Why AlterRNA for Researchers & Scientists
            </h1>
    
            <p className="text-[16px] text-[#1E304A] text-center w-[850px] mt-[6px]">
              A platform designed to support your unique role in advancing RNA therapeutics
            </p>
    
            <div className="flex justify-between w-full space-y-5 mt-[30px] ">
              {researcher.map((card, idx) => (
                <div className="w-[290px] h-[250px]  bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF] rounded-[15px] p-5">
                  <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                    <img src={card.image} alt="" className="w-[30px] h-[30px]" />
                  </div>
    
                  <h1 className="font-semibold text-[18px] text-[#1E304A] mt-[10px]">
                    {card.title}
                  </h1>
    
                  <p className="text-[14px] text-[#1E304A] mt-1">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
    
      
          </div>
        </div>
  )
}

export default Researcher2
