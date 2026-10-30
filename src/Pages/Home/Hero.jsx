import { CirclePlay } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[url('/images/DNAlogo.png')] bg-cover bg-center bg-no-repeat flex flex-col p-20">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
      <div className="flex items-center  gap-2 relative">
        <div className="flex -space-x-5">
            <img src="/images/face4.png" alt="" />
            <img src="/images/face2.png" alt="" />
            <img src="/images/face3.png" alt="" />
            <img src="/images/face4.png" alt="" />
        </div>
        <span className="text-[#084191] font-[18px]">
            Trusted by 115k+ people
            </span>
      </div>
      <div className="w-[690px] relative">
        <h1 className="font-bold text-[61px]  bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mt-[]">
          Defining Cure Through Targeted Therapeutics
        </h1>
      </div>
      <div className="w-[512px] flex flex-col gap-[40px] relative">
        <p>
          We are a next-generation biotech company dedicated to transforming the
          lives of patients through precision RNA medicine and collaborative
          science.
        </p>

        <div className="flex gap-[14px]">
            <button className="bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white w-[198px] h-[50px]">Explore Our Science</button>
            <button className="bg-white w-[164px] h-[50px] rounded-[100px] flex justify-center items-center gap-2" ><CirclePlay className="text-[#65C322]" /> Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
