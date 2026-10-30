import { MessageCircleWarning } from "lucide-react";
import React from "react";

const Platform3 = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-[1200px] h-auto ">
        <h1 className="font-semibold text-[30px] text-[#053374]">
          Project Board
        </h1>

        <div className="flex gap-10 mt-5 mb-10">
          <div className="w-[310px] h-[830px] rounded-[15px] overflow-hidden border border-[#D7E8F8]">
            <div className="flex justify-between p-5 bg-[#D7E8F8] border border-b border-[#D7E8F8] ">
              <span>To Do</span>
              <span>2</span>
            </div>

            <div className="w-[270px] h-[230px]  mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
                Literature review on LNP targeting
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Comprehensive analysis of recent publications on tissue-
                specific targeting strategies
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 15 (Overdue)
                </span>
                <button className="w-[60px] h-[30px] bg-[#DD272A] border border-[#DD272A] bg-[#DD272A]/11 rounded-[7px]">High</button>
              </div>
            </div>
            <div className="w-[270px] h-[230px] mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
                Optimize mRNA
cap structure
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Test various cap analogs to
improve translation efficiency
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 18 (Overdue)
                </span>
                <button className="w-[60px] h-[30px] bg-[#DD272A] border border-[#DD272A] bg-[#DD272A]/11 rounded-[7px]">High</button>
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[830px]  rounded-[15px] overflow-hidden border border-[#54FB5]">
            <div className="flex justify-between p-5 bg-[#DBEAFE] border border-b border-[#D7E8F8] ">
              <span className="text-[#054FB5] font-semibold text-[18px]">In Progress</span>
              <span>3
              </span>
            </div>

            <div className="w-[270px] h-[230px]  mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
                Synthesize
lipid library
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Generate 24 novel ionizable
lipids for screening
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 20 (Overdue)
                </span>
                <button className="w-[100px] h-[30px] bg-[#FFE1B7]/15 border border-[#FFD292] bg-[#DD272A]/11 rounded-[7px] text-[#B97310]">Medium</button>
              </div>
            </div>
            <div className="w-[270px] h-[230px] mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
                Cell viability
assays
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Assess cytotoxicity of top
formulation candidates
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 18 (Overdue)
                </span>
                <button className="w-[60px] h-[30px] bg-[#DD272A] border border-[#DD272A] bg-[#DD272A]/11 rounded-[7px]">High</button>
              </div>
            </div>
            <div className="w-[270px] h-[230px] mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
               Analyze
bio distribution
data
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Process imaging data from
mouse studies
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 10 (Overdue)
                </span>
                <button className="w-[100px] h-[30px] bg-[#FFE1B7]/15 border border-[#FFD292] bg-[#DD272A]/11 rounded-[7px] text-[#B97310]">Medium</button>
               
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[830px]  rounded-[15px] overflow-hidden border border-[#DEBEFF]">
            <div className="flex justify-between p-5 bg-[#F3E8FF] border border-b border-[#D7E8F8] ">
              <span className="text-[#992EE2] font-semibold text-[22px]">Review</span>
              <span>3
              </span>
            </div>

            <div className="w-[270px] h-[230px]  mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
                Protein
expression
quantification
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Western blot and ELISA
validation
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 8 (Overdue)
                </span>
                <button className="w-[60px] h-[30px] bg-[#DD272A] border border-[#DD272A] bg-[#DD272A]/11 rounded-[7px]">High</button>
              </div>
            </div>
            <div className="w-[270px] h-[230px] mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
               Formulation
stability study
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                4-week stability assessment at
various temperatures
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Feb 5 (Overdue)
                </span>
                 <button className="w-[100px] h-[30px] bg-[#FFE1B7]/15 border border-[#FFD292] bg-[#DD272A]/11 rounded-[7px] text-[#B97310]">Medium</button>
              </div>
            </div>
          </div>
          <div className="w-[310px] h-[830px]  rounded-[15px] overflow-hidden border border-[#A3EFBE]">
            <div className="flex justify-between p-5 bg-[#DBFCE7] border border-b border-[#D7E8F8] ">
              <span className="text-[#24A150] font-semibold text-[22px]">Done</span>
              <span>3
              </span>
            </div>

            <div className="w-[270px] h-[230px]  mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
              Initial mRNA
sequence design
              </h1>
              <p className="text-[#1E304A] text-[14px]">
               Codon optimization
completed and validated
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#2C2F35]"> 
                  
                  Jan 30
                </span>
                <button className="w-[60px] h-[30px] bg-[#DD272A] border border-[#DD272A] bg-[#DD272A]/11 rounded-[7px]">High</button>
              </div>
            </div>
            <div className="w-[270px] h-[230px] mx-auto p-5 border border-[#D7E8F8] mt-[20px] rounded-[15px] ">
              <h1 className="font-semibold text-[18px]">
              Establish cell
cuIture
protocols
              </h1>
              <p className="text-[#1E304A] text-[14px]">
                Standard operating
procedures documented
              </p>

              <div className="flex justify-between mt-[30px]">
                <span className="flex gap-2 text-[#DD272A]"> 
                  <MessageCircleWarning  />
                  Jan 30
                </span>
                 <button className="w-[100px] h-[30px] bg-[#FFE1B7]/15 border border-[#FFD292] bg-[#DD272A]/11 rounded-[7px] text-[#B97310]">Medium</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform3;
