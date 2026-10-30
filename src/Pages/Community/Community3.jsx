import React from "react";

const Community3 = () => {
  return (
    <div className="min-h-screen w-full bg-[#F2FBFF] flex justify-center items-center">
      <div className="w-[1200px] h-[500px]  flex flex-col justify-center items-center">
        <button className="text-[#65C322] w-[128px] h-[40px] rounded-[150px] border border-[#65C322]">
          PROCESS
        </button>

        <h1 className="font-semibold text-[30px] text-[#053374]">
          How Collaboration Works
        </h1>

        <p className="text-center text-[16px] text-[#1E304A]">
          A structured, transparent process from research submission to <br />{" "}
          pipeline advancement
        </p>

        <div className="flex justify-between gap-4 mt-10">
          <div className="w-[285px] h-[260px] bg-white rounded-[15px] p-5 ">
            <h1 className="font-bold text-[20px] text-[#1E304A]">STEP 01</h1>

            <h1 className="font-semibold text-[16px] text-[#1E304A] mt-[8px]">
              Research Idea Submission
            </h1>

            <p className="text-[14px] text-[#1E304A] mt-[12px]">
              Researchers submit RNA therapeutic concepts with scientific
              rationale, target indications, and preliminary data.
            </p>

            <h1 className="mt-[20px] text-right">17%</h1>

            <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div class="bg-blue-900 h-full rounded-full w-1/3"></div>
            </div>
          </div>

          <div className="w-[285px] h-[260px] bg-white rounded-[15px] p-5 mt-10">
            <h1 className="font-bold text-[20px] text-[#1E304A]">STEP 02</h1>

            <h1 className="font-semibold text-[16px] text-[#1E304A] mt-[8px]">
              Scientific Review & Validation
            </h1>

            <p className="text-[14px] text-[#1E304A] mt-[12px]">
              Expert panel reviews submissions for scientific merit,
              feasibility, and alignment with platform objectives.
            </p>

            <h1 className="mt-[20px] text-right">33%</h1>
               <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div class="bg-[#65C322] h-full rounded-full w-33/100"></div>
            </div>
          </div>

          <div className="w-[285px] h-[260px] bg-white rounded-[15px] p-5">
            <h1 className="font-bold text-[20px] text-[#1E304A]">STEP 03</h1>

            <h1 className="font-semibold text-[16px] text-[#1E304A] mt-[8px]">
              Collaborative Development
            </h1>

            <p className="text-[14px] text-[#1E304A] mt-[12px]">
              Multi-stakeholder teams form around validated projects. Roles
              assigned, resources allocated.
            </p>

            <h1 className="mt-[20px] text-right">50%</h1>
            <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div class="bg-blue-900 h-full rounded-full w-50/100"></div>
            </div>
            
          </div>

          <div className="w-[285px] h-[260px] bg-white rounded-[15px] p-5 mt-10">
            <h1 className="font-bold text-[20px] text-[#1E304A]">STEP 04</h1>

            <h1 className="font-semibold text-[16px] text-[#1E304A] mt-[8px]">
              Project Tracking Workflow
            </h1>

            <p className="text-[14px] text-[#1E304A] mt-[12px]">
              Real-time project management with task boards, milestones,
              deliverables, and progress visualization.
            </p>

            <h1 className="mt-[20px] text-right">67%</h1>

             <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div class="bg-[#65C322] h-full rounded-full w-67/100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community3;
