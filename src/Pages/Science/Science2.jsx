import React from "react";
import { communityCard, scienceCard } from "../../data/data";

const Science2 = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[1200px] h-auto  my-[40px] flex flex-col items-center">
        <button className="text-[#65C322] border border-[#65C322] w-[145px] h-[40px] rounded-[150px]">
          THERAPEUTICS
        </button>

        <h1 className="font-semibold text-[30px] text-[#053374] mt-[15px]">
          Scientific Mission
        </h1>

        <p className="text-[16px] text-[#1E304A] text-center w-[850px] mt-[6px]">
          AlterRNA is pioneering the next generation of RNA therapeutics through
          a commitment to transparent, collaborative research and rigorous
          scientific validation. Our mission extends beyond drug development to
          fundamentally reshape how therapeutic research is conducted and
          shared.
        </p>

        <div className="flex justify-between w-full space-y-5 mt-[30px] ">
          {scienceCard.map((card, idx) => (
            <div className="w-[290px] h-[300px]  bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF] rounded-[15px] p-5">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src={card.img} alt="" className="w-[30px] h-[30px]" />
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

        <div className="mt-[90px] flex justify-between w-full">
          <div>
            <img src="/images/inspection.png" alt="" />
          </div>
          <div>
            <h1 className="font-semibold text-[30px] text-[#053374]">
              Research Platforms
            </h1>
            <p>
              Integrated scientific infrastructure designed for rigorous <br />{" "}
              RNA therapeutic research
            </p>
            <div className="flex flex-col justify-between h-[410px]">
              <div className="w-[650px] h-[115px] bg-white rounded-[15px] p-5 border border-[#E4EBFF] hover:border-green-500 mt-[30px]">
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  RNA-Based Therapeutic Development
                </h1>
                <p className="text-[14px] text-[#1E304A]">
                  Advanced molecular design and optimization workflows for mRNA,
                  siRNA, and antisense oligonucleotide therapeutics.
                </p>
              </div>
              <div className="w-[650px] h-[115px] bg-white rounded-[15px] p-5 border border-[#E4EBFF] hover:border-green-500">
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  RNA-Based Therapeutic Development
                </h1>
                <p className="text-[14px] text-[#1E304A]">
                  Advanced molecular design and optimization workflows for mRNA,
                  siRNA, and antisense oligonucleotide therapeutics.
                </p>
              </div>
              <div className="w-[650px] h-[115px] bg-white rounded-[15px] p-5 border border-[#E4EBFF] hover:border-green-500">
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  RNA-Based Therapeutic Development
                </h1>
                <p className="text-[14px] text-[#1E304A]">
                  Advanced molecular design and optimization workflows for mRNA,
                  siRNA, and antisense oligonucleotide therapeutics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[435px]  bg-gradient-to-r from-[#084191] to-[#65C322] mt-[90px] rounded-[15px] text-white">
          <h1 className="font-semibold text-[30px] text-white text-center mt-[53px]">
            Project Pipeline Overview
          </h1>
          <p className="text-white text-center">
            A transparent view of our research progression across therapeutic{" "}
            <br /> development stages
          </p>
          <div className="border border-dashed border-white/40 w-full h-[1px] mt-[42px]"></div>

          <div className="flex justify-between">
            <div className="border-r border-dashed border-white/40 w-[280px] h-[245px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[26px]">12</h1>
                <span  className="font-semibold text-[26px]">Discovery</span>
                <p className="text-[16px]  text-center">Target identification and <br /> mechanism validation</p>

                <span className="font-semibold text-[16px] mt-10">STEP 01</span>
            </div>
            <div className=" border-r border-dashed border-white/40 w-[280px] h-[245px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[26px]">8</h1>
                <span  className="font-semibold text-[26px]">Preclinical</span>
                <p className="text-[16px] text-center">In vitro and in vivo efficacy <br /> studies</p>

                <span className="font-semibold text-[16px] mt-10">STEP 02</span>
            </div>
            <div className="border-r border-dashed border-white/40 w-[280px] h-[245px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[26px]">3                  
                </h1>
                <span  className="font-semibold text-[26px]">Clinical</span>
                <p className="text-[16px]">Phase I/II human studies</p>

                <span className="font-semibold text-[16px] mt-15">STEP 03</span>
            </div>
            <div className=" w-[280px] h-[245px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[26px]">2</h1>
                <span  className="font-semibold text-[26px] text-center">Review & Advancement</span>
                <p className="text-[16px] text-center">Regulatory preparation and partnership development</p>

                <span className="font-semibold text-[16px]">STEP 04</span>
            </div>
          </div>
        </div>  

        <div className="bg-[#EFFBE7] w-full h-[110px] mt-[25px] rounded-[15px] p-10">
          <p className="text-[16px] text-[#366713]">Pipeline data represents active projects as of January 2026. Stage classifications based on internal research milestones. This information is provided for transparency and does not constitute financial guidance or performance projections.</p>
        </div>
      </div>
    </div>
  );
};

export default Science2;
