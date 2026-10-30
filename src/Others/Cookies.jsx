import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cookies = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full">
        <div className="w-full h-[400px] w-full bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat  flex flex-col justify-center items-center">
          <h1 className="font-bold text-[36px] text-[#084191]">
            Cookie Preferences Policy
          </h1>

          <p className="font-medium text-[18px] text-[#1E304A]">
            Manage how we use cookies to improve your experience.
          </p>
        </div>

        <div className="w-[1200px]  flex flex-col mx-auto mt-10 mb-10">
          <span className="text-[16px] text-[#2E4049]">
            Last Updated: 26 January 2026
          </span>

          {/* sidebar  */}
          <div className="flex  gap-10">
            <div className="min-w-[350px] h-full bg-[#C2E4AA]/20 p-5 rounded-[15px]">
              <h1 className="font-semibold text-[20px] text-[#084191]">
                Table of Contents
              </h1>

              <div className="flex flex-col gap-5 items-start px-5 h-[500px]">
                <span className="text-[16px] text-[#060A10]">
                  1. What Are Cookies
                </span>
                <span className="text-[16px] text-[#060A10]">
                  2. Types of Cookies We Use
                </span>
                <span className="text-[16px] text-[#060A10]">
                  3. Managing Cookie Preferences
                </span>
                <span className="text-[16px] text-[#060A10]">
                  4. Third-Party Cookies
                </span>
                <span className="text-[16px] text-[#060A10]">5. Consent</span>
                <span className="text-[16px] text-[#060A10]">6. Contact</span>
              </div>
            </div>

            <div className="text-[#1E304A]">
              <div>
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  1. What Are Cookies
                </h1>
                <p className="text-[16px] text-[#1E304A] mt-[17px]">
                  Cookies are small text files stored on your device to improve
                  user experience and website functionality.
                </p>
              </div>
              <div className="mt-[30px]">
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  2. Types of Cookies We Use
                </h1>
                <h1 className="mt-[10px] mb-[10px] text-[16px] text-[#1E304A] font-semibold text-[16px] text-[#1E304A]">
                  Essential Cookies
                </h1>

                <span>Required for:</span>

                <ul className="list-disc">
                  <li className="marker:text-[#65C322]">Secure login</li>
                  <li className="marker:text-[#65C322]">User sessions</li>
                  <li className="marker:text-[#65C322]">
                    Platform functionality
                  </li>
                </ul>

                <h1 className="mt-[10px] mb-[10px] text-[16px] text-[#1E304A]">
                  These cannot be disabled.
                </h1>
                <h1 className="mt-[10px] mb-[10px] text-[16px] text-[#1E304A] font-semibold text-[16px] text-[#1E304A]">
                  Functional Cookies
                </h1>

                <span>Used to:</span>

                <ul className="list-disc">
                  <li className="marker:text-[#65C322]">
                    Remember preferences
                  </li>
                  <li className="marker:text-[#65C322]">Enhance usability</li>
                </ul>
                <h1 className="mt-[10px] mb-[10px] text-[16px] text-[#1E304A] font-semibold text-[16px] text-[#1E304A]">
                  Analytics Cookies
                </h1>

                <span>Used to:</span>

                <ul className="list-disc">
                  <li className="marker:text-[#65C322]">
                    Understand site usage
                  </li>
                  <li className="marker:text-[#65C322]">Improve performance</li>

                  <h1 className="mt-[10px] mb-[10px]">
                    Analytics data is anonymized where possible.
                  </h1>
                </ul>
                <h1 className="mt-[10px] mb-[10px] text-[16px] text-[#1E304A] font-semibold text-[16px] text-[#1E304A]">
                  Marketing Cookies
                </h1>

                <p>
                  AlterRNA uses limited or no marketing cookies. <br /> If used,
                  explicit consent will be requested.
                </p>
              </div>

              <div className="mt-[30px]">
                <h1 className="font-semibold text-[18px] text-[#1E304A]">
                  3. Managing Cookie Preferences
                </h1>

                <h1 className="text-[16px] text-[#1E304A] mt-[10px] mb-[10px]">
                  Users can:
                </h1>

                <ul className="list-disc">
                  <li className="marker:text-[#65C322]">Accept all cookies</li>
                  <li className="marker:text-[#65C322]">
                    Reject non-essential cookies
                  </li>
                  <li className="marker:text-[#65C322]">
                    Customize cookie settings
                  </li>
                </ul>

                <p>
                  Preferences can be updated at any time via the Cookie
                  Preferences page.
                </p>
              </div>

              <div>
                <h1 className="mt-[20px] font-semibold text-[18px]">
                  4. Third-Party Cookies
                </h1>

                <h1 className="text-[16px] mt-[10px] mb-[10px]">
                  Some services (analytics, embedded tools) may place
                  third-party cookies. These comply with GDPR standards.
                </h1>
              </div>
              <div>
                <h1 className="mt-[20px] font-semibold text-[18px]">
                  5. Consent
                </h1>

                <p>
                  By using AlterRNA, you consent to the use of cookies according
                  to your selected preferences.
                </p>
              </div>

              <div className="mt-[30px]">
                <h1 className="font-semibold text-[18px] ">6. Contact</h1>

                <p className="mt-[10px]">For cookie-related questions:</p>

                <p className="text-[#65C322]">[privacy@alterrna.com]</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Cookies;
