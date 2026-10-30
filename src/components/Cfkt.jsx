import { ShieldCheck } from "lucide-react";
import React from "react";

const Cfkt = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mb-[40px] ">
      <div className="w-[1200px] h-[306px]  rounded-[15px] bg-[url('/images/studentsLab.png')] bg-cover bg-center bg-no-repeat relative rounded-[15px] overflow-hidden  ">
        <div class="absolute inset-0 bg-gradient-to-r from-[#084191] to-[#65C322] flex flex-col justify-center items-center ">
          <h1 className="font-semibold text-[30px] text-white">
            Compilance & Certifications
          </h1>

          <p className="text-[16px] text-white">
            AlterRNA adheres to international standards for data protection,
            security, and healthcare compliance
          </p>

          <div className="border border-dashed border-white/40 w-full mt-[40px]   "></div>

          <div className="flex justify-around   w-full mt-10">
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-white" />
              <h1 className="font-semibold text-[20px] text-white">
                SOC 2 Type II
              </h1>
            </div>
            <div className="border border-dashed border-white/40 h-full"></div>
            <div className="flex flex-col  items-center">
              <ShieldCheck className="text-white" />
              <h1 className="font-semibold text-[20px] text-white">
                GDPR Compliant
              </h1>
            </div>
            <div className="border border-dashed border-white/40 h-full"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-white" />
              <h1 className="font-semibold text-[20px] text-white">
                HIPAA Aware
              </h1>
            </div>
            <div className="border border-dashed border-white/40 h-full"></div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="text-white" />
              <h1 className="font-semibold text-[20px] text-white">
                ISO 27001
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cfkt;
