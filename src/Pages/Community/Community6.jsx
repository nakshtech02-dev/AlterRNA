import React from "react";
import { impact } from "../../data/data";
import { Astroid } from "lucide-react";

const Community6 = () => {
  return (
    <div className="min-h-screen h-auto flex justify-center items-center    ">
      <div className="w-[1200px] h-auto flex flex-col  items-center">
        <button className="text-[#65C322] w-[128px] h-[40px] rounded-[150px] border border-[#65C322]">
          PROBLEM
        </button>

        <h1 className="font-semibold text-[30px] text-[#053374] mt-[15px]">
          Collaboration for Impact
        </h1>

        <p className="text-[16px] text-[#1E304A] mt-[6px] text-center">
          Measurable outcomes from a collaborative, transparent approach to <br /> RNA
          therapeutic development
        </p>

        {/* cards */}

        <div className="flex justify-between w-full  mt-[30px]   ">
            {impact.map((card,idx)=>(

          <div className="w-[290px] h-[275px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF] p-5">
            <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src={card.icon}
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>

            <span className="font-semibold text-[30px] text-[#084191] mt-[22px]">{card.title}</span>

            <h1 className="font-semibold text-[18px] text-[#1E304A]">{card.subtitle}</h1>

            <p className="text-[14px] text-[#1E304A] mt-[5px]">{card.description}</p>
          </div>
            ))}
        </div>

        <div className="w-full h-[585px] mt-[75px] bg-gradient-to-r from-[#FFFFFF] to-[#EDFFE0] bg-gradient-to-r from-[#D0EEBC] to-[#65C322] rounded-[15px] flex flex-col justify-center border border-[#65C322] mb-[40px]">
            <div className="flex flex-col gap-[15px] justify-center items-center">
            <h1 className="font-semibold text-[30px] text-[#053374]">A New Model for Therapeutic Development</h1>

            <p className="text-[16px] text-[#1E304A] text-center w-[966px]">Traditional pharmaceutical development models are characterized by siloed research, proprietary competition, and limited stakeholder engagement. This approach results in extended timelines, duplicated efforts, and ultimately, therapies that may be inaccessible to patients who need them most.</p>

            <p className="text-[16px] text-[#1E304A] text-center w-[966px]">AlterRNA's collaborative platform represents a paradigm shift: transparent research processes, shared learnings, multi-stakeholder input from inception, and a fundamental commitment to developing affordable RNA therapeutics.</p>

            <p className="text-[16px] text-[#1E304A] text-center w-[966px]">By connecting researchers, clinicians, patients, and institutional partners in a secure, governed environment, we accelerate the path from scientific discovery to clinical application—while maintaining the rigorous standards required for safe, effective therapeutics.</p>

            </div>

            <div className="mt-[25px] flex justify-center gap-5">
                <div className="w-[320px] h-[151px]  rounded-[15px] border border-[#053374] flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[18px] text-[#084191]">Open Science</h1>

                    <p className="text-center text-[14px] text-[#1E304A]">Shared knowledge, collaborative <br /> validation</p>
                </div>
                <div className="w-[320px] h-[151px] rounded-[15px] border border-[#65C322] flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[18px] text-[#65C322]">Patient Centered</h1>

                    <p className="text-center text-[14px] text-[#1E304A]">Development guided by real- <br />world needs</p>
                </div>
                <div className="w-[320px] h-[151px]  rounded-[15px] border border-[#FFA600] flex flex-col justify-center items-center">
                    <h1 className="font-semibold text-[18px] text-[#FFA600]">Open Science</h1>

                    <p className="text-center text-[14px] text-[#1E304A]">Shared knowledge, collaborative <br /> validation</p>
                </div>

            </div>

        </div>

        <div className="flex gap-10">
            <div className="w-[500px] h-[516px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF] flex flex-col  rounded-[15px] p-10 mb-[40px]">
                 <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/clock.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>

            <h1 className="font-semibold text-[25px] text-[#084191] mt-[18px]">Join as Researcher or Doctor</h1>

            <p className="font-medium text-[16px] mt-[6px] text-[#1E304A]">Submit research ideas, collaborate globally, and contribute to the development of affordable RNA therapeutics.</p>

            <div className="flex gap-2 mt-[22px]">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">Submit research ideas and proposals</span>
            </div>
            <div className="flex gap-2 mt-[5px] ">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">Collaborate with verified experts worldwide</span>
            </div>
            <div className="flex gap-2 mt-[5px]">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">Access shared research infrastructure</span>
            </div>

            <button className="bg-white border border-[#BEE3F3] w-[186px] h-[50px] rounded-[100px] mt-[50px] text-[#1E304A]">Join the Platform</button>
            </div>
            <div className="w-[500px] h-[516px] bg-gradient-to-r from-[#FFFFFF] to-[#EDFFE0] bg-gradient-to-r from-[#D0EEBC] to-[#65C322] flex flex-col  rounded-[15px] p-10 mb-[40px]">
                 <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
              <img
                src="/images/clock.png"
                alt=""
                className="w-[30px] h-[30px]"
              />
            </div>

            <h1 className="font-semibold text-[25px] text-[#084191] mt-[18px]">Institutional & Strategic Partnerships</h1>

            <p className="font-medium text-[16px] mt-[6px] text-[#1E304A]">Partner with AlterRNA to support collaborative research, provide validation services, or explore licensing opportunities.</p>

            <div className="flex gap-2 mt-[22px]">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">CRO and testing partnerships</span>
            </div>
            <div className="flex gap-2 mt-[5px] ">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">Academic and research institution collaboration</span>
            </div>
            <div className="flex gap-2 mt-[5px]">
                <Astroid className="text-[#65C322] fill-[#65C322]" />
                <span className="text-[16px] text-[#1E304A]">Strategic funding and licensing opportunities</span>
            </div>

            <button className="bg-white border border-[#BEE3F3] w-[240px] h-[50px] rounded-[100px] mt-[50px] text-[#1E304A] text-[#65C322] border border-[#65C322]">Contact Colaboration Team</button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Community6;
