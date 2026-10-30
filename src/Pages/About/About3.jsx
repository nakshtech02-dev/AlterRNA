import React from "react";

const About3 = () => {
  return (
    <div className="w-full h-[650px]  flex justify-center">
      <div className="w-[1200px] h-full flex flex-col items-center justify-center">
        <button className="w-[128px] h-[40px] text-[#65C322] border border-[#65C322] rounded-[150px]">
          PROBLEM
        </button>

        <h1 className="font-semibold text-[30px] text-[#053374] mt-[15px]">
          The Problem We Address
        </h1>

        <p className="text-[16px] text-[#1E304A] text-center mt-[6px]">
          Current therapeutic development faces systemic challenges that <br />{" "}
          slow innovation and increase costs.
        </p>

        <div className="flex gap-7 mt-[30px]">
          <div className="h-[350px] w-[280px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[20px] pt-[35px] pb-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]">
            <h1 className="font-semibold text-[18px] text-[#1E304A]">
              High Development Costs
            </h1>
            <p className="text-[14px] text-[#1E304A] mt-2 ">
              Traditional therapeutic development requires significant capital
              investment, limiting innovation potential.
            </p>

            <img src="/images/a1.png" alt="" className="mt-2" />
          </div>
          <div className="h-[350px] w-[280px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[20px] pt-[20px] pb-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]">
            <img src="/images/a2.png" alt="" />
            <h1 className="font-semibold text-[18px] text-[#1E304A] mt-[22px]">
              Fragmented Research
            </h1>
            <p className="text-[14px] text-[#1E304A] mt-2 ">
              Isolated research efforts across institutions create redundancy
              and slow collective progress.
            </p>
          </div>
          <div className="h-[350px] w-[280px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[20px] pt-[35px] pb-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]">
            <h1 className="font-semibold text-[18px] text-[#1E304A]">
              High Development Costs
            </h1>
            <p className="text-[14px] text-[#1E304A] mt-2 ">
              Traditional therapeutic development requires significant capital
              investment, limiting innovation potential.
            </p>

            <img src="/images/a3.png" alt="" className="mt-2" />
          </div>

            <div className="h-[350px] w-[280px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[20px] pt-[20px] pb-[22px] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]">
            <img src="/images/a4.png" alt="" />
            <h1 className="font-semibold text-[18px] text-[#1E304A] mt-[22px]">
              Fragmented Research
            </h1>
            <p className="text-[14px] text-[#1E304A] mt-2 ">
              Isolated research efforts across institutions create redundancy
              and slow collective progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
