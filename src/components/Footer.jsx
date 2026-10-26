import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" relative min-h-screen bg-[url('/images/bottles.png')] bg-cover bg-center bg-no-repeat text-white">
      <div class="absolute inset-0 bg-[#001D45]/76 flex flex-col justify-center items-center  ">
        <div className="bg-[#094292] w-[1200px] h-[564px] flex flex-col justify-center p-10">
          {/* upper  */}

          <div className="flex justify-between">
            <div className="w-[400px]">
              <h1 className="font-bold text-[26px]">AlterRNA </h1>
              <p className="text-[16px] font-medium">
                Advancing RNA therapeutics through global collaboration, making
                breakthrough treatments accessible to patients worldwide.
              </p>
            </div>

            <div>
              <h1 className="font-semibold text-[22px]">About AlterRNA</h1>
              <ul className="list-disc list-inside">
                <li>Our Missions</li>
                <li>Teams</li>
                <li>About Us</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold text-[22px]">Legal & Support</h1>
              <ul className="list-disc list-inside">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>GDRP Compilance</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          {/* lower  */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-[45px]">
                Raise Smart. Grow Fast. <br />
                Let’s Start Today!
              </h1>

              <form className="flex items-center w-[450px] p-1 bg-transparent border border-white rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-6 py-3 text-white placeholder-slate-300"
                />

                <button className="bg-[#65C322] text-white px-8 py-3 rounded-full">
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h1 className="font-bold text-[22px]">Research</h1>

              <ul className="list-disc list-inside">
                <li>Pipeline</li>
                <li>Publications</li>
                <li>Clinical Trials</li>
                <li>Collobrations</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold text-[22px]">Contact</h1>

              <span className="flex gap-2">
                <Phone />
                +1 (617) 555-0123
              </span>
              <span className="flex gap-2 text-left">
                <MapPin />
                100 Innovation Way, Cambridge, <br /> MA 02142
              </span>
              <span className="flex gap-2">
                <Mail />
                Info@alterrna.bio
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-25">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-5">
                  <img src="/images/face2.png" alt="" />

                  <img src="/images/face3.png" alt="" />

                  <img src="/images/face4.png" alt="" />
                </div>

                <span className="font-semibold text-[25px]">
                  Your question are always welcome
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="w-[32px] h-[32px] rounded-full bg-white text-green-400 justify-center items-center flex">
                <FaFacebook />
              </span>
              <span className="w-[32px] h-[32px] rounded-full bg-[#210106]/10 justify-center items-center flex">
                <FaLinkedin />
              </span>
              <span className="w-[32px] h-[32px] rounded-full bg-[#210106]/10 justify-center items-center flex">
                <FaInstagram />
              </span>
              <span className="w-[32px] h-[32px] rounded-full bg-[#210106]/10 justify-center items-center flex">
                <BsTwitterX />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between w-[1200px]">
            <span className="font-medium text-[16px]">Licensed, Bonded & Insured | TACL #12345</span>
            <span className="font-medium text-[16px]">© 2026 AlterRNA Therapeutics. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
