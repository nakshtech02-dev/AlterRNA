import React from "react";

const Platform1 = () => {
  return (
    <div className="min-h-screen w-full  bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="w-[1200px] h-auto my-[40px] p-10 ">
        <div className="flex items-center gap-2">
          <button className="w-[180px] h-[40px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white">
            Active Research
          </button>
          <span className="text-[#000000]">PRJ-2024-048</span>
        </div>

        <h1 className="font-bold text-[36px] text-[#084191] mt-[10px]">
          mRNA Therapeutic Development for <br /> Rare Genetic Disorders
        </h1>

        <p className="text-[#2F3542] mt-[10px]">
          Novel approach to treating lysosomal storage diseases through targeted
          mRNA delivery systems. This project <br /> focuses on developing lipid
          nanoparticle formulations optimized for enzyme replacement therapy.
        </p>

        <div className="flex gap-5 mt-[16px]">
          <div className="w-[200px] h-[75px] bg-white rounded-[10px] flex gap-2 justify-center items-center">
            <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/calendar.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>
            <div>
            <span className="text-[#2F3542]  text-[16px]">Duration</span>
            <h1 className="font-semibold text-[18px] text-[#2F3542]"
            >18 months</h1>
            </div>
          </div>
          <div className="w-[200px] h-[75px] bg-white rounded-[10px] flex gap-2 justify-center items-center">
            <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/team.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>
            <div>
            <span className="text-[#2F3542]  text-[16px]">Team Size</span>
            <h1 className="font-semibold text-[18px] text-[#2F3542]"
            >12 members</h1>
            </div>
          </div>
          <div className="w-[200px] h-[75px] bg-white rounded-[10px] flex gap-2 justify-center items-center">
            <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/progress.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>
            <div>
            <span className="text-[#2F3542]  text-[16px]">Progress</span>
            <h1 className="font-semibold text-[18px] text-[#2F3542]"
            >67% Complete</h1>
            </div>
          </div>
        </div>

        <div className="mt-[44px]">
            <div  className="flex justify-between">
                <span className="font-bold text-[16px]">80% <span className="font-medium">Funded</span> </span>
                <span>$2,000,000 of $2,500,000</span>
            </div>
            <div className="h-[15px] w-full bg-white/40  rounded-full mt-[10px]">
                  <div className="h-full w-[55%] rounded-full bg-[#60C51B]"></div>
            </div>
        </div>

        <button className="w-[180px] h-[40px] rounded-[100px]  bg-gradient-to-r from-[#084191] to-[#65C322] text-white mt-[17px]">I'm Interested</button>

        <div className="w-full  mt-[40px]">
            <img src="/images/lightDna.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Platform1;
