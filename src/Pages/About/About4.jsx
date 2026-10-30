import React from "react";

const About4 = () => {
  return (
    <div className="bg-[#F2FBFF] min-h-screen flex justify-center items-center ">
      <div className="w-[1200px]  h-auto flex justify-between">
        {/* left  */}
        <div className="w-[900px]">
          <h1 className="font-semibold text-[30px] text-[#053374]">
            Our Approach
          </h1>
          <p className="text-[16px] text-[#1E304A] mt-[6px]">
            A platform-driven methodology designed to enable secure, efficient,
            and <br /> transparent collaboration.
          </p>

          <div className="flex justify-between  mt-[30px]">
            <div className="w-[270px] h-[230px] bg-white rounded-[15px] p-5">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src="/images/a1c1.png" alt="" />
              </div>
              <h1 className="text-[18px] font-semibold text-[#1E304A] mt-[15px]">Collaborative Research Environment</h1>
              <p className="text-[14px] text-[#1E304A] mt-[5px]">
                Connect researchers, clinicians, and industry experts in a
                unified scientific workspace.
              </p>
            </div>
            <div className="w-[270px] h-[230px] bg-white rounded-[15px] p-5">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src="/images/a1c2.png" alt="" />
              </div>
              <h1 className="text-[18px] font-semibold text-[#1E304A] mt-[15px]">Transparent Project Pipelines</h1>
              <p className="text-[14px] text-[#1E304A] mt-[5px]">
                Track research progress from hypothesis to validation with full visibility.
              </p>
            </div>
            <div className="w-[270px] h-[230px] bg-white rounded-[15px] p-5">
              <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src="/images/a1c3.png" alt="" />
              </div>
              <h1 className="text-[18px] font-semibold text-[#1E304A] mt-[15px]">Role-Based Participation</h1>
              <p className="text-[14px] text-[#1E304A] mt-[5px]">
               Structured access controls ensure appropriate contribution levels and data security.
              </p>
            </div>

          </div>

          <div className="flex mt-[20px] justify-between
          ">
            <div className="w-[430px] h-[200px] bg-white rounded-[15px] p-5">
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src="/images/a1c4.png" alt="" />
              </div>
              <h1 className="text-[18px] font-semibold text-[#1E304A] mt-[15px]">Moderated Scientific Discussions</h1>
              <p className="text-[14px] text-[#1E304A] mt-[5px]">
                Expert-led discourse maintaining scientific rigor and productive collaboration.
              </p>


            </div>
            <div className="w-[430px] h-[200px] bg-white rounded-[15px] p-5">
                <div className="w-[55px] h-[55px] rounded-[15px] bg-gradient-to-r from-[#E6ECFF] to-[#E4EBFF] bg-gradient-to-r from-[#FFFFFF] to-[#F2FAFF]  flex justify-center items-center">
                <img src="/images/a1c4.png" alt="" />
              </div>
              <h1 className="text-[18px] font-semibold text-[#1E304A] mt-[15px]">Moderated Scientific Discussions</h1>
              <p className="text-[14px] text-[#1E304A] mt-[5px]">
                Expert-led discourse maintaining scientific rigor and productive collaboration.
              </p>


            </div>
          </div>
        </div>

        {/* Right  */}

        <div>
            <img src="/images/DnaLeft.png" alt="" className="w-[280px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default About4;
