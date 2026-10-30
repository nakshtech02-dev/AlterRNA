import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen w-full'>
        <div className="w-full h-[400px] w-full bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat  flex flex-col justify-center items-center">

            <h1 className='font-bold text-[36px] text-[#084191]'>Terms & Conditions</h1>

            <p className='font-medium text-[18px] text-[#1E304A]'>Please read these terms carefully before using our services.</p>
        </div>

        <div className='w-[1200px]  flex flex-col mx-auto mt-10 mb-10'>
            <span className='text-[16px] text-[#2E4049]'>Last Updated: 26 January 2026</span>

            {/* sidebar  */}
            <div className='flex  gap-10'>
            <div className='min-w-[280px] h-full bg-[#C2E4AA]/20 p-5 rounded-[15px]'>
            <h1 className='font-semibold text-[20px] text-[#084191]'>Table of Contents</h1>

            <div className='flex flex-col gap-5 items-start px-5 '>
                <span className='text-[16px] text-[#060A10]'>1. Introduction</span>
                <span className='text-[16px] text-[#060A10]'>2. Eligibility & User Roles</span>
                <span className='text-[16px] text-[#060A10]'>3. Platform Purpose</span>
                <span className='text-[16px] text-[#060A10]'>4. User Responsiblities</span>
                <span className='text-[16px] text-[#060A10]'>5. Community Content</span>
                <span className='text-[16px] text-[#060A10]'>6. Intellectual Property</span>
                <span className='text-[16px] text-[#060A10]'>7. Investor Access</span>
                <span className='text-[16px] text-[#060A10]'>8. Limitation of Liability</span>
                <span className='text-[16px] text-[#060A10]'>9. Termination</span>
                <span className='text-[16px] text-[#060A10]'>10. Governing Law</span>
                <span className='text-[16px] text-[#060A10]'>11. Contact</span>
            </div>
            </div>

            <div className='text-[#1E304A]'>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>1. Introduction</h1>
                    <p className='text-[16px] text-[#1E304A] mt-[17px]'>Welcome to AlterRNA (“Company”, “we”, “our”, “us”). AlterRNA operates a biotechnology collaboration platform focused on RNA-based therapeutic research and scientific collaboration.</p>
                    <p className='text-[16px] text-[#1E304A] mt-[7px]'>By accessing or using our website, platform, or services (“Platform”), you agree to be bound by these Terms & Conditions. If you do not agree, you must not use the Platform.</p>
                </div>
                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>2. Eligibility & User Roles</h1>
                   <h1 className='mt-[10px] mb-[10px] text-[16px] text-[#1E304A]'>AlterRNA allows registration by:</h1>

                   <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Researchers and scientists</li>
                    <li  className='marker:text-[#65C322]'>Medical professionals</li>
                    <li  className='marker:text-[#65C322]'>Patients and advocates</li>
                    <li  className='marker:text-[#65C322]'>Investors (via dedicated access request)</li>
                    <li  className='marker:text-[#65C322]'>General users</li>
                   </ul>

                   <p className='text-[16px] text-[#1E304A] mt-[7px]'>You confirm that all information provided during registration is accurate and truthful.</p>

                   <p className='text-[16px] text-[#1E304A] mt-[7px]' >AlterRNA reserves the right to approve, restrict, or revoke access based on role verification and compliance requirements.</p>
                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>3. Platform Purpose</h1>

                    <h1 className='text-[16px] text-[#1E304A] mt-[10px] mb-[10px]'>AlterRNA is intended for:</h1>

                     <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Scientific collaboration</li>
                    <li  className='marker:text-[#65C322]'>Research discussion</li>
                    <li  className='marker:text-[#65C322]'>Project tracking and transparency</li>
                    <li  className='marker:text-[#65C322]'>Community knowledge exchange</li>

                   </ul>
                   <h1 className='mt-[10px] text-[#1E304A]'>The Platform <span className='text-[16px] font-semibold'>does not provide medical advice,</span>  diagnosis, or treatment.</h1>

                </div>

                <div>
                    <h1 className='mt-[20px] font-semibold text-[18px]'>4. User Responsibilities</h1>

                    <h1 className='text-[16px] mt-[10px] mb-[10px]'>You agree to:</h1>


                     <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Use the Platform in a lawful and ethical manner</li>
                    <li  className='marker:text-[#65C322]'>Respect intellectual contributions of others</li>
                    <li  className='marker:text-[#65C322]'>Not post misleading, harmful, or unauthorized medical claims</li>
                    <li  className='marker:text-[#65C322]'>Maintain confidentiality where required</li>

                   </ul>
                </div>
                <div>
                    <h1 className='mt-[20px] font-semibold text-[18px]'>5. Community Content & Moderation</h1>


                     <ul className='list-disc mt-[5px]'>
                    <li  className='marker:text-[#65C322]'>Users are responsible for content they post</li>
                    <li  className='marker:text-[#65C322]'>Content may be moderated for accuracy, relevance, and compliance</li>
                    <li  className='marker:text-[#65C322]'>AlterRNA may remove content that violates policies</li>
                  

                   </ul>
                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>6. Intellectual Property</h1>

                    <p className='mt-[10px]'>All platform content, branding, and structure are owned by AlterRNA or its licensors.</p>

                    <p className='mt-[10px]'>User-generated content remains owned by the user, but you grant AlterRNA a non-exclusive license to display and manage it within the Platform.</p>
                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>7. Investor Access</h1>

                    <p className='mt-[10px] mb-[10px]'>Investor-related information is provided for informational purposes only and does not constitute financial solicitation or advice.</p>

                    <h1>Access to investor-specific content is subject to approval.</h1>

                </div>
                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>8. Limitation of Liability</h1>
                    
                    <h1 className='mt-[10px] mb-[10px]'>AlterRNA shall not be liable for:</h1>

                  

                   

                    
                     <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Research outcomes</li>
                    <li  className='marker:text-[#65C322]'>Interpretation of scientific content</li>
                    <li  className='marker:text-[#65C322]'>User decisions based on Platform discussions</li>
                    
                    <h1 className='mt-[10px]'>Use of the Platform is at your own risk.</h1>

                   </ul>

                </div>

                <div>
                    <h1 className='font-semibold text-[18px] '>9. Termination</h1>

                    <p className='mt-[5px] mb-[10px]'>AlterRNA reserves the right to suspend or terminate accounts that violate these Terms or applicable laws.</p>

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] '>10. Governing Law</h1>

                    <p className='mt-[5px] mb-[10px]'>These Terms are governed by applicable laws of the jurisdiction in which AlterRNA operates, including EU GDPR where applicable.</p>

                </div>
                <div>
                    <h1 className='font-semibold text-[18px] '>11. Contact</h1>

                    <p className='mt-[5px] mb-[10px]'>For questions regarding these Terms, contact:</p>
                    <span className='font-medium text-[16px] text-[#65C322]'> [legal@alterrna.com]</span>

                </div>

            </div>

            </div>
        </div>

        <Footer/>
      
    </div>
    </>
  )
}

export default Terms
