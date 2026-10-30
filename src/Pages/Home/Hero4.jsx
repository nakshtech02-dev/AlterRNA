import React from "react";

const Hero4 = () => {
  return (
    <div className="min-h-screen bg-[#01142F] flex flex-col items-center">
      <button className="border border-[#65C322] w-[128px] h-[40px] rounded-[150px] text-[#65C322] mt-[75px]">
        PIPELINE
      </button>

      <h1 className="text-white text-[30px] mt-[15px] mt-[6px]">Development Pipeline</h1>
      <p className="text-[#8D9CB1] text-[16px]">
        AlterRNA is dedicated to developing next-generation RNA therapeutics
      </p>

      <div className="flex mx-auto gap-[50px] mt-[40px] mb-[40px]">
        {/* left */}
        <div className="flex flex-col gap-[15px]">
          <div className="w-[665px] h-[151px] bg-white rounded-[15px] flex flex-col p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#1E304A] font-semibold text-[18px]">
                  ART- 001
                </h1>
                <p className="text-[#1E304A] text-[14px]">
                  Duchenne Muscular Dystrophy
                </p>
              </div>
              <button className="w-[116px] h-[40px] bg-[#65C322] rounded-[100px] text-white">
                Enrolling
              </button>
            </div>
            <div className="flex gap-3 justify-center items-center">
            <progress
              value={70}
              max={100}
              className="flex-1 h-3 rounded-full overflow-hidden appearance-none bg-gray-100  w-[530px]
                   [&::-webkit-progress-bar]:bg-gray-100 
                   [&::-webkit-progress-value]:bg-lime-500 
                   [&::-webkit-progress-value]:rounded-full
                   [&::-moz-progress-bar]:bg-lime-500"
            />
            <span>Phase 2d</span>
            </div>
          </div>
          <div className="w-[665px] h-[151px] bg-[#65C322] rounded-[15px] flex flex-col p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-white font-semibold text-[18px]">
                  ART- 002
                </h1>
                <p className="text-white text-[14px]">
                  Retinitis Pigmentosa
                </p>
              </div>
              <button className="w-[116px] h-[40px] bg-white  rounded-[100px] text-[#65C322]">
                Active
              </button>
            </div>
            <div className="flex gap-3 justify-center items-center">
            <progress
              value={70}
              max={100}
              className="flex-1 h-3 rounded-full overflow-hidden appearance-none bg-gray-100  w-[530px]
                   [&::-webkit-progress-bar]:bg-gray-100 
                   [&::-webkit-progress-value]:bg-lime-500 
                   [&::-webkit-progress-value]:rounded-full
                   [&::-moz-progress-bar]:bg-lime-500"
            />
            <span className="text-white">Phase 1st</span>
            </div>
          </div>
          <div className="w-[665px] h-[151px] bg-white rounded-[15px] flex flex-col p-10 ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-[#1E304A] font-semibold text-[18px]">
                  ART- 003
                </h1>
                <p className="text-[#1E304A] text-[14px]">
                 Hemophilia A
                </p>
              </div>
              <button className="w-[116px] h-[40px] bg-[#65C322] rounded-[100px] text-white">
                On Track
              </button>
            </div>
            <div className="flex gap-3 justify-center items-center">
            <progress
              value={70}
              max={100}
              className="flex-1 h-3 rounded-full overflow-hidden appearance-none bg-gray-100  w-[530px]
                   [&::-webkit-progress-bar]:bg-gray-100 
                   [&::-webkit-progress-value]:bg-lime-500 
                   [&::-webkit-progress-value]:rounded-full
                   [&::-moz-progress-bar]:bg-lime-500"
            />
            <span>Preclinical</span>
            </div>
          </div>
        </div>

        {/* right  */}
        <div>
          <img src="/images/lab.png" alt="" className="w-[500px] h-[483px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero4;
