import { ChevronDown, Search } from "lucide-react";
import React from "react";
import { carData } from "../../data/data";

const Pipeline2 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="w-[1200px] h-auto  mt-10 mb-10">
        <div className="flex justify-between">
          <div className="w-[800px] rounded-[800px] bg-white h-[50px] flex items-center gap-5 px-5 border border-[#E4E4E4]">
            <Search className="text-[#939393]" />
            <input
              type="text"
              placeholder="Search projects by name, description, or focus area..."
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-[18px] ">20</span>
            <p className="text-[#7D7D7D] text-[14px]">Total Projects</p>
          </div>
        </div>
        <div className="mt-[32px] flex  gap-10 ">
          {/* left sidebar */}
          <div className="w-[310px] bg-white h-[580px] border border-[#D9D9D9] rounded-[15px] p-10">
            <h1 className="font-semibold text-[22px] text-[#053374] ">
              Filters
            </h1>

            <div className="w-full  bg-[#C2E4AA] h-[2px] mt-[10px]"></div>

            <div className="flex justify-between mt-[25px]">
              <h1 className="font-semibold text-[18px]">Research Area</h1>
              <ChevronDown />
            </div>

            <div className="flex flex-col mt-[15px] gap-2">
              <label className="flex gap-2">
                <input type="checkbox" /> mRNA Therapeutics
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Gene Editing
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Immunotherapy
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Oncology
              </label>
            </div>
            <div className="w-full  bg-[#EFEFEF] h-[2px] mt-[10px]"></div>

            <div className="flex justify-between mt-[15px]">
              <h1 className="font-semibold text-[18px] ">Development Stage</h1>
              <ChevronDown />
            </div>

            <div className="flex flex-col mt-[15px] gap-2">
              <label className="flex gap-2">
                <input type="checkbox" /> Discovery
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Preclinical
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Phase I
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Phase II
              </label>
              <label className="flex gap-2">
                <input type="checkbox" />
                Phase III
              </label>
              <label className="flex gap-2">
                <input type="checkbox" /> Regulatory
              </label>
            </div>
          </div>

          {/* Right Section  */}

          <div>
            <h1 className="text-[18px] text-[#1E304A] mb-5">Showing 9 projects</h1>

            <div className="flex flex-col gap-10">
                {carData.map((card,idx) => (

              <div className="w-[800px] h-[465px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  rounded-[15px] flex flex-col justify-between p-10">
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                  <img src="/images/icon1.png" alt=""  className="w-[30px] h-[30px]"/>
                </div>

                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  {card.title}
                </h1>

                <p className="text-[14px] text-[#1E304A]">
                  {card.description}
                </p>

                <div className="flex gap-2">
                  <button className=" h-[34px] px-10 bg-[#E2EEF9] rounded-[150px] text-[#2F3542]">
                    {card.tags[0]}
                  </button>
                  <button className="bg-[#ECFDF5] px-10 h-[34px]  rounded-[150px] ">
                    {card.tags[1]}
                  </button>
                </div>

                <div className="h-[1px] w-full bg-[#F2F2F2]"></div>

                <h1 className="font-semibold text-[16px] text-[#1E304A]">
                  Research Focus
                </h1>

                <p className="text-[14px] text-[#4C525B]">
                  {card.research_focus}
                </p>

                <div className="flex justify-between">
                  <span className="text-[#000000]">
                    {card.funding_percentage} <span>Funded</span>
                  </span>
                  <span>{card.current_funding} of <span> {card.target_funding}</span></span>
                </div>

                <div className="w-full max-w-md">
                  {/* Track Background */}
                  <div className="w-full bg-white/70 backdrop-blur-sm rounded-full h-3.5 p-0.5 shadow-inner">
                    {/* Progress Fill Bar */}
                    <div className="bg-[#78B13F] h-full rounded-full transition-all duration-500 ease-out" />
                  </div>
                </div>

                <button className="w-[180px] h-[40px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px]">I'm Interested</button>
              </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline2;
