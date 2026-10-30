import { Check } from "lucide-react";
import React from "react";

const Platform2 = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[1200px] h-[600px]  flex gap-5  my-[40px]">
        {/* left  */}
        <div>
          <button className="w-[128px] h-[40px] text-[#65C322] border border-[#65C322] rounded-[150px]">
            PROJECT
          </button>

          <h1 className="font-semibold text-[30px] text-[#053374]">
            Research Objectives
          </h1>

          <div className="flex flex-col gap-5">
            <div className="w-[800px] h-[100px] bg-white rounded-[15px] flex items-center gap-2 px-2 border border-[#D7E8F8]">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img
                  src="/images/mRna.png"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            <div>
              <h1 className="text-[#1E304A] font-semibold text-[18px]">mRNA Design</h1>
              <div className="flex justify-center items-center gap-10">
                <p className="text-[14px]">
                  Optimize codon usage and 5'/3' UTR sequences for enhanced
                  protein expression
                </p>
                <button className="bg-[#ECFDF5] w-[110px] h-[34px] rounded-[150px] text-[#139658]">Completed</button>
              </div>
            </div>
            </div>
            <div className="w-[800px] h-[100px] bg-white rounded-[15px] flex items-center gap-2 px-2 border border-[#D7E8F8]">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img
                  src="/images/blood.png"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            <div>
              <h1 className="text-[#1E304A] font-semibold text-[18px]">Formulation Development</h1>
              <div className="flex justify-center items-center gap-10">
                <p className="text-[14px]">
                  Engineer lipid nanoparticles for targeted delivery to affected tissues
                </p>
                <button className="bg-[#E4EFFF] text-[#054FB5] w-[110px] h-[34px] rounded-[150px] text-[#139658]">In Progress</button>
              </div>
            </div>
            </div>
            <div className="w-[800px] h-[100px] bg-white rounded-[15px] flex items-center gap-2 px-2 border border-[#D7E8F8]">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img
                  src="/images/tube.png"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            <div>
              <h1 className="text-[#1E304A] font-semibold text-[18px]">In Vitro Testing</h1>
              <div className="flex justify-center items-center gap-10">
                <p className="text-[14px]">
                 Validate enzyme activity and cellular uptake in patient-derived cell lines
                </p>
                <button className="bg-[#E4EFFF] text-[#054FB5] w-[110px] h-[34px] rounded-[150px] text-[#139658]">In Progress</button>
              </div>
            </div>
            </div>
            <div className="w-[800px] h-[100px] bg-white rounded-[15px] flex items-center gap-2 px-2 border border-[#D7E8F8]">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img
                  src="/images/arch.png"
                  alt=""
                  className="w-[30px] h-[30px]"
                />
              </div>
            <div>
              <h1 className="text-[#1E304A] font-semibold text-[18px]">Preclinical Studies</h1>
              <div className="flex justify-center items-center gap-10">
                <p className="text-[14px]">
                  Assess safety, biodistribution, and efficacy in animal models
                </p>
                <button className="bg-[#E2EEF9] w-[110px] h-[34px] rounded-[150px] text-[#1E304A]">Pending</button>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className=" w-full h-auto rounded-[15px] border border-[#D9D9D9] p-5">

            <h1 className="font-semibold text-[30px] text-[#053374]">Project Timeline</h1>
            <div className="flex flex-col h-[510px] justify-between ">

            <div className="flex gap-5">
                <div  className="w-[50px] h-[50px] rounded-full bg-[#E1FFCC] flex justify-center items-center">
                    <Check className="text-[#55AC18]"/>
                </div>
                <div>
                    <button className="bg-[#E1FFCB] text-[#55AC18] w-[70px] h-[25px] rounded-[2px]">Phase 1</button>
                    <div className="flex gap-20 ">
                    <p className="text-[#1E304A] font-medium text-[16px]">Research & Design</p>
                    <h1 className="text-[#7C7C7C]">Q1 2024</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div  className="w-[50px] h-[50px] rounded-full bg-[#E1FFCC] flex justify-center items-center">
                    <Check className="text-[#55AC18]"/>
                </div>
                <div>
                    <button className="bg-[#E1FFCB] text-[#55AC18] w-[70px] h-[25px] rounded-[2px]">Phase 2</button>
                    <div className="flex gap-5 ">
                    <p className="text-[#1E304A] font-medium text-[16px]">Formulation Development</p>
                    <h1 className="text-[#7C7C7C]">Q1 2024</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div  className="w-[50px] h-[50px] rounded-full bg-[#E4EFFF] flex justify-center items-center">
                    <Check className="text-[#054FB5]"/>
                </div>
                <div>
                    <button className="bg-[#E4EFFF] text-[#054FB5] w-[70px] h-[25px] rounded-[2px]">Phase 3</button>
                    <div className="flex gap-28  ">
                    <p className="text-[#1E304A] font-medium text-[16px] ">In Vitro Testing</p>
                    <h1 className="text-[#7C7C7C]">Q3 2024</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div  className="w-[50px] h-[50px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                    
                </div>
                <div>
                    <button className="bg-[#F5F5F5] text-[#1E304A] w-[70px] h-[25px] rounded-[2px]">Phase 4</button>
                    <div className="flex gap-28  ">
                    <p className="text-[#1E304A]/60  font-medium text-[16px] ">Preclinical Studies</p>
                    <h1 className="text-[#7C7C7C]">Q3 2024</h1>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <div  className="w-[50px] h-[50px] rounded-full bg-[#F5F5F5] flex justify-center items-center">
                    
                </div>
                <div>
                    <button className="bg-[#F5F5F5] text-[#1E304A] w-[70px] h-[25px] rounded-[2px]">Phase 5</button>
                    <div className="flex gap-28  ">
                    <p className="text-[#1E304A] font-medium text-[16px] text-[#1E304A]/60 ">IND Filing</p>
                    <h1 className="text-[#7C7C7C]">Q3 2024</h1>
                    </div>
                </div>
            </div>

        </div>
        </div>
      </div>

      
    </div>
  );
};

export default Platform2;
