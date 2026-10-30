import { Asterisk, ChevronDown, Lock } from "lucide-react";
import React from "react";

const Science4 = () => {
  return (
    <>
   

    <div className="min-h-screen w-full flex justify-center items-center ">
      <div className="w-[1200px] h-auto  my-[40px] ">
        <div className="h-[436px] flex gap-10 justify-center items-center">
          {/* left  */}
          <div>
            <img src="/images/dnaRed.png" alt="" />
          </div>

          {/* right  */}
          <div>
            <h1 className="font-semibold text-[30px] text-[#053374]">
              Why AlterRNA for Investors
            </h1>

            <p className="text-[16px] text-[#1E304A]">
              Strategic advantages that differentiate AlterRNA in the RNA
              therapeutics landscape
            </p>

            <div className="flex flex-col gap-5">
              <div className="border border-[#BEE3F3] rounded-[15px] flex justify-between h-[60px] justify-between items-center w-[640px] px-5">
                <h1>Transparent Research Visibility</h1>
                <ChevronDown />
              </div>
              <div className="border border-[#BEE3F3] rounded-[15px] flex justify-between h-[60px] justify-between items-center w-[640px] px-5">
                <h1>Structured Collaboration Model</h1>
                <ChevronDown />
              </div>
              <div className="border border-[#BEE3F3] rounded-[15px] flex justify-between h-[60px] justify-between items-center w-[640px] px-5">
                <h1>Reduced Research Inefficiencies</h1>
                <ChevronDown />
              </div>
              <div className="border border-[#BEE3F3] rounded-[15px] flex justify-between h-[60px] justify-between items-center w-[640px] px-5">
                <h1>Long-Term Therapeutic Impact</h1>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[110px] bg-[#FFA600]/7 rounded-[15px]">
          <p className="text-[#895F11] p-5 mt-[40px]  ">
            <span className="font-semibold text-[16px] text-[#835500]">
              Important Notice:
            </span>
             Information provided on this page is for informational purposes
            only and does not constitute financial advice, investment
            recommendations, or guarantees of future performance. AlterRNA does
            not make projections regarding return on investment or financial
            outcomes.
          </p>
        </div>

        {/* grid  */}
             <div className="min-h-screen w-full flex justify-center items-center">
      <div className=" w-[1200px] h-screen relative flex justify-center items-center ">
       <div className="flex  gap-2">

        <div className="flex flex-col w-[142px] gap-2 mt-10">
          <img src="/images/l1.png" alt="" />
          <img src="/images/l2.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2">
          <img src="/images/l3.png" alt="" />
          <img src="/images/l4.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-20">
          <img src="/images/l5.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mb-20">
          <img src="/images/l6.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-10">
          <img src="/images/l7.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 ">
          <img src="/images/l8.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-15">
          <img src="/images/l9.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 ">
          <img src="/images/l10.png" alt="" />
          <img src="/images/l11.png" alt="" />
        </div>
        <div className="flex flex-col w-[142px] gap-2 mt-20">
          <img src="/images/l12.png" alt="" />
          <img src="/images/l13.png" alt="" />
        </div>
<div className="absolute bottom-30 left-[310px] text-center">
        <h1 className=" font-semibold text-[30px] text-[#053374]">Ready to Explore AlterRNA's <br /> Scientific Vision?
</h1>
        <p className="text-center text-[#2F3542] mt[10px] mb-[10px]">
Connect with researcher explore ongoing projects and contribute to <br /> advancing RNA therapeutics
        </p>
        <div className="flex gap-5">
          <button className="w-[294px] h-[50px]  bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white" >Register Your Interest</button>
          
          <button className="border border-[#65C322] w-[280px] h-[50px] rounded-[100px]">Explore Research Pipeline</button>
        </div>
        </div>
       </div>
      </div>
    </div>

        <div className="w-full h-[945px] bg-gradient-to-r from-[#084191] to-[#65C322] mt-[40px] flex justify-center items-center gap-10">
          {/* left */}
          <div className="text-white">
            <h1 className="font-semibold text-[30px]">Investor Registration</h1>
            <p>
              Register to receive investor updates and <br /> stay informed about
              AlterRNA's research <br />progress
            </p>
          </div>

          {/* right  */}

          <form className="w-[750px] h-[800px] bg-white flex flex-col p-10 gap-5 rounded-[17px]">
            <div className="flex gap-5">
              <div>
                <label className="flex">
                  Full Name <Asterisk size={15} className="text-red-600" />
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="bg-white w-[325px] h-[50px] rounded-[100px] px-5 border border-[#DDDDDD]"
                />
              </div>
              <div>
                <label className="flex">
                  Email Address <Asterisk size={15} className="text-red-600" />
                </label>
                <input
                  type="text"
                  placeholder="Enter eamil address"
                  className="bg-white w-[325px] h-[50px] rounded-[100px] px-5  border border-[#DDDDDD]"
                />
              </div>
            </div>

            <div>
              <label className="flex">
                Organization/Firm{" "}
                <Asterisk size={15} className="text-red-600" />
              </label>
              <input
                type="text"
                placeholder="enter firm"
                className="w-full bg-white  rounded-[100px] h-[50px] px-5  border border-[#DDDDDD]"
              />
            </div>
            <div>
              <label className="flex">
                Investor Type <Asterisk size={15} className="text-red-600" />
              </label>
              <input
                type="text"
                placeholder="select type"
                className="w-full bg-white  rounded-[100px] h-[50px] px-5  border border-[#DDDDDD]"
              />
            </div>
            <div>
              <label className="flex">
                Country
                <Asterisk size={15} className="text-red-600" />
              </label>
              <input
                type="text"
                placeholder="select country"
                className="w-full bg-white  rounded-[100px] h-[50px] px-5  border border-[#DDDDDD]"
              />
            </div>
            <div>
              <label className="flex">Area of Interest (Optional)</label>
              <input
                type="text"
                placeholder="specific research areas, therapeutic targets, or collaboration interests..."
                className="w-full bg-white  rounded-[20px] h-[50px] px-5 h-[113px]  border border-[#DDDDDD]"
              />
            </div>

            <div className="flex gap-1">
              <input type="checkbox" />

              <p className="text-[12px] text-[#1E304A]">
                I consent to AlterRNA processing my personal data for investor
                communications in accordance with the Privacy Policy and GDPR
                regulations. I understand that my information will be stored
                securely and I can unsubscribe at any time. *
              </p>
            </div>

            <div className="flex justify-end">
                <button className="w-[320px]  bg-gradient-to-r from-[#084191] to-[#65C322] flex h-[50px] justify-center items-center text-white gap-5 rounded-[100px]"><Lock  className="text-white"/> Register for Investor l.-Wates</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Science4;
