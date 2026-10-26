import { CirclePlay } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[url('/images/DNAlogo.png')] bg-cover bg-center bg-no-repeat flex flex-col p-20">
      <div>
        <span className="text-[#084191]">Trusted by 115k+ people</span>
      </div>
      <div className="w-[690px]">
        <h1 className="font-bold text-[61px]  bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent mt-[]">
          Defining Cure Through Targeted Therapeutics
        </h1>
      </div>
      <div className="w-[512px] flex flex-col gap-[40px] ">
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
