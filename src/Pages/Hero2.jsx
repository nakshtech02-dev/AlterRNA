import React from "react";

const Hero2 = () => {
  return (
    <div className="flex flex-col items-center mb-[64px]">
      <button
        className="text-[#65C322] border border-[#65C322] rounded-[150px] w-[128px] h-[40px]
         mt-[70px]"
      >
        OUR MISSION
      </button>

      <h1 className="text-[#053374] font-semibold text-[30px] mt-[15px]">
        Transforming Lives Through RNA Science
      </h1>

      <p className="w-[772px] mt-[6px] text-center">
        AlterRNA is dedicated to developing next-generation RNA therapeutics
        that address the underlying genetic causes of disease. Our platform
        technology enables precise modification of RNA to restore normal protein
        function.
      </p>

      <div className="flex gap-[10px] mt-[27px]">
        {/* 1 st  */}
        <div className="w-[320px] h-[335px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[26px] pt-[36px] pb-[24px] flex flex-col gap-[17px] bg-gradient-to-b from-white to-[#F2FAFF]">
          <h1 className="font-semibold text-[18px]">Precision Medicine</h1>
          <p className="text-[14px]">
            Precisely targeting specific genetic mutations
          </p>
          <img src="/images/DNAImage.png" alt="" />
        </div>

        {/* 2nd  */}
        <div className="w-[320px] h-[335px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[26px] pt-[36px] pb-[24px] flex flex-col gap-[17px] bg-gradient-to-b from-white to-[#F2FAFF]">
          <img src="/images/DnaImage2.png" alt="" />
          <h1 className="font-semibold text-[18px]">Innovation</h1>
          <p className="text-[14px]">
            Pioneering novel RNA modification technologies
          </p>
        </div>

        {/* 3rd  */}

        <div className="w-[320px] h-[335px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[26px] pt-[36px] pb-[24px] flex flex-col gap-[17px] bg-gradient-to-b from-white to-[#F2FAFF]">
          <h1 className="font-semibold text-[18px]">Patient-Centric</h1>
          <p className="text-[14px]">
            Driven by the needs of patients and their families
          </p>
          <img src="/images/student.png" alt="" />
        </div>

        {/* 4th */}
        <div className="w-[320px] h-[335px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] rounded-[15px] px-[26px] pt-[36px] pb-[24px] flex flex-col gap-[17px] bg-gradient-to-b from-white to-[#F2FAFF]">
          <img src="/images/Microscope.png" alt="" />
          <h1 className="font-semibold text-[18px]">Scientific Excellence</h1>
          <p className="text-[14px]">
            Committed to rigorous research and development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
