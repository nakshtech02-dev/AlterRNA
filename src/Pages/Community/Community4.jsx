import React from "react";
import { communityCard } from "../../data/data";

const Community4 = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[1200px]  mt-[40px] mb-[40px] flex flex-col  items-center justify-center">
        <button className="w-[128px] h-[40px] text-[#65C322] border border-[#65C322] rounded-[150px]">
          PROBLEM
        </button>

        <h1 className="font-semibold text-[30px] text-[#053374]">
          The Problem We Address
        </h1>

        <p className="text-[16px] text-[#1E304A] text-center">
          Current therapeutic development faces systemic challenges that <br />{" "}
          slow innovation and increase costs.
        </p>

        <div className="flex flex-wrap justify-between space-y-5 mt-[30px] ">
            {communityCard.map((card,idx)=> (

          <div className="w-[290px] h-[270px]  bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF] rounded-[15px] p-5">
            <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/hand.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>

            <h1 className="font-semibold text-[18px] text-[#1E304A] mt-[10px]">{card.title}</h1>

            <p className="text-[14px] text-[#1E304A] mt-1">
               {card.description}

            </p>
          </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Community4;
