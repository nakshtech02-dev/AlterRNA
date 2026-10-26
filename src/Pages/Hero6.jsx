import React from "react";

const Hero6 = () => {
  return (
    <div className="min-h-screen ">
      <div className="w-[1200px] h-[610px]  mx-auto mt-[80px]   bg-[url('/images/studentsLab.png')] bg-cover bg-center bg-no-repeat relative rounded-[15px] overflow-hidden ">
        <div class="absolute inset-0 bg-[#001D45]/75 flex flex-col justify-center items-center ">
          <button className="text-[#65C322] border border-[#65C322] w-[190px] h-[40px] rounded-[150px]">
            INVESTOR RELATIONS
          </button>

          <h2 className="text-white font-semibold text-[30px] mt-[12px]">
            Invest in the Future of Bio-Medicine
          </h2>

          <p className="text-white text-[16px] w-[850px] text-center mt-[5px]">
            AlterRNA offers unique opportunities for investors to fund
            high-potential therapeutic projects with full transparency and
            data-backed milestones.
          </p>

          <div className="flex gap-[15px] mt-[10px]">
            <div className="w-[270px] h-[145px] bg-white rounded-[15px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[#080D15] text-[30px]">$450M+</h1>
                <p className="text-[18px] text-[#080D15]">Research Funded</p>
            </div>
            <div className="w-[270px] h-[145px] bg-white rounded-[15px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[#080D15] text-[30px]">12</h1>
                <p className="text-[18px] text-[#080D15]">Clinical Stage Assets</p>
            </div>
            <div className="w-[270px] h-[145px] bg-white rounded-[15px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[#080D15] text-[30px]">85+</h1>
                <p className="text-[18px] text-[#080D15]">Partner Institution</p>
            </div>
            <div className="w-[270px] h-[145px] bg-white rounded-[15px] flex flex-col justify-center items-center">
                <h1 className="font-semibold text-[#080D15] text-[30px]">2.4X</h1>
                <p className="text-[18px] text-[#080D15]">Yearly Growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero6;
