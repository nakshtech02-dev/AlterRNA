import React from "react";

const Hero3 = () => {
  return (
    <div className="mt-[83px] w-full  min-h-screen p-20">
      <div className="flex gap-[56px]">
        {/* left  */}
        <div>
          <img src="/images/DnaLeft.png" alt="" className="w-[400px] h-[640px]" />
        </div>

        {/* right */}
        <div>
          <button
            className="text-[#65C322] border border-[#65C322] rounded-[150px] w-[190px] h-[40px]
        "
          >
            THERAPEUTIC FOCUS
          </button>

          <h1 className="text-[#053374] font-semibold text-[30px] mt-[12px]">
            Addressing Critical Unmet Needs
          </h1>

          <p className="text-[16px] text-[#1E304A] w-[644px] mt-[6px] ">
            Our pipeline targets rare genetic diseases across multiple
            therapeutic areas, bringing hope to patients with limited treatment
            options.
          </p>  

          <div className="flex gap-5 mt-[30px]">
            {/* 1st  */}
            <div className="w-[240px] h-[215px] rounded-[15px]  p-5 bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF]">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF] rounded-[15px] flex items-center justify-center">
                    <img src="/images/icon1.png" alt="" className="w-[27px] h-[27px]" />

                </div>
                <h1 className="text-[#1E304A] text-[18px] font-semibold mt-[18px]">Neurology</h1>
                <p className="text-[#1E304A] text-[14px] mt-[4px]">Rare genetic neurological disorders</p>
                <h2 className="text-[#65C322] mt-[10px]">3 Programs</h2>

            </div>
            <div className="w-[240px] h-[215px] rounded-[15px]  p-5 bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF]">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF] rounded-[15px] flex items-center justify-center">
                    <img src="/images/icon2.png" alt="" className="w-[27px] h-[27px]" />

                </div>
                <h1 className="text-[#1E304A] text-[18px] font-semibold mt-[18px]">Cardiology</h1>
                <p className="text-[#1E304A] text-[14px] mt-[4px]">Inherited cardiovascular conditions</p>
                <h2 className="text-[#65C322] mt-[10px]">2 Programs</h2>

            </div>
            <div className="w-[240px] h-[215px] rounded-[15px]  p-5 bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF]">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF] rounded-[15px] flex items-center justify-center">
                    <img src="/images/icon3.png" alt="" className="w-[27px] h-[27px]" />

                </div>
                <h1 className="text-[#1E304A] text-[18px] font-semibold mt-[18px]">Ophthalmology</h1>
                <p className="text-[#1E304A] text-[14px] mt-[4px]">Genetic retinal diseases</p>
                <h2 className="text-[#65C322] mt-[30px]">1 Programs</h2>

            </div>
          </div>

          <div className="mt-[20px] flex  gap-5">
            {/* left  */}
               <div className="w-[375px] h-[215px] rounded-[15px]  p-5 bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF]">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF] rounded-[15px] flex items-center justify-center">
                    <img src="/images/icon4.png" alt="" className="w-[27px] h-[27px]" />

                </div>
                <h1 className="text-[#1E304A] text-[18px] font-semibold mt-[18px]">Hematology</h1>
                <p className="text-[#1E304A] text-[14px] mt-[4px]">Blood and immune disorders</p>
                <h2 className="text-[#65C322] mt-[10px]">2 Programs</h2>

            </div>

            {/* right  */}
               <div className="w-[375px] h-[215px] rounded-[15px]  p-5 bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF]">
                <div className="w-[55px] h-[55px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF]  bg-gradient-to-b from-white to-[#F2FAFF] rounded-[15px] flex items-center justify-center">
                    <img src="/images/icon5.png" alt="" className="w-[27px] h-[27px]" />

                </div>
                <h1 className="text-[#1E304A] text-[18px] font-semibold mt-[18px]">Metabolic</h1>
                <p className="text-[#1E304A] text-[14px] mt-[4px]">Inherited metabolic diseases</p>
                <h2 className="text-[#65C322] mt-[10px]">1 Programs</h2>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
