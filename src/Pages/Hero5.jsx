import { ArrowRight, CircleSmall, Eye, MessageCircle, Search, SlidersHorizontal } from "lucide-react";
import React from "react";
import { data } from "../data/data";

const Hero5 = () => {
  return (
    <div className="min-h-screen bg-[#65C322]/7 flex flex-col justify-center items-center p-5   ">
      <button className="bg-white text-[#65C322] w-[168px] h-[40px] rounded-[150px] border border-[#65C322] mt-[62px]">
        COMMUNITY HUB
      </button>

      <h1 className="font-semibold text-[30px] text-[#053374] mt-[15px]">
        Collaborative Knowledge Exchange
      </h1>

      <p className="text-[16px] text-[#1E304A] w-[730px] text-center mt-[6px]">
        Join our secure network of researchers, clinicians, and partners to
        share insights, discuss methodologies, and advance the field of RNA
        therapeutics together.
      </p>

      <div className="flex justify-between mt-[40px] ">
        {/* left  */}
    
        <input type="text" placeholder="Search discussions, topics, or experts..." className="w-[533px] h-[50px] bg-white rounded-[100px] px-10"/>
        

        {/* Right  */}
        <div className="flex gap-[15px] ml-80">
            <button className="w-[136px] h-[50px] bg-white flex justify-center items-center gap-2 rounded-[100px]">
                <SlidersHorizontal />
                Filters
            </button>
            <button className="w-[150px] h-[50px]  bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px]">New Topic</button>
            </div>
        <div>

        </div>
        </div>

        <div className="flex flex-wrap justify-between space-y-5 mt-[50px]">
            {data.map((card,indx)=> (

            <div className="w-[430px] h-[280px] bg-white rounded-[15px] border border-[#65C322] p-5 px-10">

                <div className="flex gap-[10px]">
                    <div className="w-[55px] h-[55px] border border-[#65C322] flex rounded-full justify-center items-center ">
                    <img src="/images/face1.png" alt="" className="w-[47px] h-[47px]" />
                    </div>
                    <h1 className="font-semibold text-[18px]">{card.title}</h1>
                </div>

                <div className="flex mt-[10px] gap-2">
                    <span className="font-medium text-[16px] text-[#1E304A]">{card.author}</span>
                    <span className="flex justify-center items-center" > <CircleSmall size={10} /> {card.role}</span>
                    <span className="flex justify-center items-center"> <CircleSmall size={10} /> {card.time_ago}   </span>
                </div> 

                <div className="mt-[20px] flex gap-[10px]">
                    <button className="w-[125px] h-[34px] bg-[#E2EEF9] rounded-[150px] text-[#2F3542]">{card.tags[0]}</button>
                    <button className="w-[159px] h-[34px] bg-[#E2EEF9] rounded-[150px] text-[#2F3542]">{card.tags[1]}</button>

                </div>

                <div className="flex gap-5 mt-15">
                    <span className="text-[#1E304A] flex gap-1"><MessageCircle className="text-[#2F3542]" />{card.comments}</span>
                    <span className="flex gap-1"><Eye />{card.views}</span>
                </div>

            </div>
            ))}
        </div>

        <span className="flex gap-2 text-[#053374] text-[16px] mt-[40px]">View All Discussions <ArrowRight /></span>
    </div>
  );
};

export default Hero5;
