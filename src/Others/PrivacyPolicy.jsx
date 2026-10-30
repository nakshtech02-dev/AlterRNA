import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Terms = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen w-full'>
        <div className="w-full h-[400px] w-full bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat  flex flex-col justify-center items-center">

            <h1 className='font-bold text-[36px] text-[#084191]'>Privacy Policy</h1>

            <p className='font-medium text-[18px] text-[#1E304A]'>We value your privacy and are committed to protecting your data.</p>
        </div>

        <div className='w-[1200px]  flex flex-col mx-auto mt-10 mb-10'>
            <span className='text-[16px] text-[#2E4049]'>Last Updated: 26 January 2026</span>

            {/* sidebar  */}
            <div className='flex  gap-10'>
            <div className='min-w-[350px] h-full bg-[#C2E4AA]/20 p-5 rounded-[15px]'>
            <h1 className='font-semibold text-[20px] text-[#084191]'>Table of Contents</h1>

            <div className='flex flex-col gap-5 items-start px-5 '>
                <span className='text-[16px] text-[#060A10]'>1. Overview</span>
                <span className='text-[16px] text-[#060A10]'>2. Information We Collect</span>
                <span className='text-[16px] text-[#060A10]'>3. How We Use Your Information</span>
                <span className='text-[16px] text-[#060A10]'>4. Data Sharing</span>
                <span className='text-[16px] text-[#060A10]'>5. Data Security</span>
                <span className='text-[16px] text-[#060A10]'>6. Data Retention</span>
                <span className='text-[16px] text-[#060A10]'>7. Your Rights (GDPR)</span>
                <span className='text-[16px] text-[#060A10]'>8. Medical Disclaimer</span>
                <span className='text-[16px] text-[#060A10]'>9. Changes to This Policy  </span>
                <span className='text-[16px] text-[#060A10]'>10. Governing Law</span>
                <span className='text-[16px] text-[#060A10]'>11. Contact</span>
            </div>
            </div>

            <div className='text-[#1E304A]'>
                <div>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>1. Overview</h1>
                    <p className='text-[16px] text-[#1E304A] mt-[17px]'>AlterRNA respects your privacy and is committed to protecting personal data in accordance with GDPR and applicable data protection laws.</p>
                  <h1 className='mt-[10px]'>This Privacy Policy explains how we collect, use, and protect your data.</h1>
                </div>
                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>2. Information We Collect</h1>
                   <h1 className='mt-[10px] mb-[10px] text-[16px] text-[#1E304A]'>Personal Information:</h1>

                   <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Name</li>
                    <li  className='marker:text-[#65C322]'>Email address</li>
                    <li  className='marker:text-[#65C322]'>Organization or affiliation</li>
                    <li  className='marker:text-[#65C322]'>User role (researcher, doctor, investor, etc.)</li>
                   
                   </ul>
                   <h1 className='mt-[10px] mb-[10px] text-[16px] text-[#1E304A]'>Platform Usage Data:</h1>
                   <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Login activity</li>
                    <li  className='marker:text-[#65C322]'>Project participation</li>
                    <li  className='marker:text-[#65C322]'>Community interactions</li>
                    
                   
                   </ul>
                   <h1 className='mt-[10px] mb-[10px] text-[16px] text-[#1E304A]'>Investor Submissions:</h1>
                   <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Contact and professional information only</li>
                    <li  className='marker:text-[#65C322]'>No financial or sensitive investment data collected</li>
                    
                    
                   
                   </ul>

                  
                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] text-[#1E304A]'>3. How We Use Your Information</h1>

                    <h1 className='text-[16px] text-[#1E304A] mt-[10px] mb-[10px]'>We use data to:</h1>

                     <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Provide access to platform features</li>
                    <li  className='marker:text-[#65C322]'>Enable collaboration and communication</li>
                    <li  className='marker:text-[#65C322]'>Moderate community content</li>
                    <li  className='marker:text-[#65C322]'>Improve platform functionality</li>
                    <li  className='marker:text-[#65C322]'>Comply with legal obligations</li>

                   </ul>
                   

                </div>

                <div>
                    <h1 className='mt-[20px] font-semibold text-[18px]'>4. Data Sharing</h1>

                    <h1 className='text-[16px] mt-[10px] mb-[10px]'>AlterRNA does not sell personal data.</h1>


                     <ul className='list-disc'>
                    <li  className='marker:text-[#65C322]'>Authorized team members</li>
                    <li  className='marker:text-[#65C322]'>Service providers (hosting, email, analytics)</li>
                    <li  className='marker:text-[#65C322]'>Legal authorities if required by law</li>
                   

                   </ul>
                   <h1 className='mt-[10px]'>All third parties are GDPR-compliant.</h1>
                </div>
                <div>
                    <h1 className='mt-[20px] font-semibold text-[18px]'>5. Data Security</h1>

                    <h1>We implement:</h1>


                     <ul className='list-disc mt-[5px]'>
                    <li  className='marker:text-[#65C322]'>Secure authentication</li>
                    <li  className='marker:text-[#65C322]'>Role-based access control</li>
                    <li  className='marker:text-[#65C322]'>Encrypted connections (SSL)</li>
                    <li  className='marker:text-[#65C322]'>Regular security monitoring</li>
                  

                   </ul>
                   <h1 className='mt-[10px]'>Despite safeguards, no system is 100% secure.</h1>


                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>6. Data Retention</h1>

                    <p className='mt-[10px]'>Personal data is retained only as long as necessary to:</p>

                     <ul className='list-disc mt-[5px]'>
                    <li  className='marker:text-[#65C322]'>Provide services</li>
                    <li  className='marker:text-[#65C322]'>Meet legal obligations</li>
                    </ul>
                <h1 className='mt-[10px] mb-[10px]'>Users may request deletion where applicable.</h1>
                 
                </div>

                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>7. Your Rights (GDPR)</h1>

                    <p className='mt-[10px] mb-[10px]'>You have the right to:</p>

                     <ul className='list-disc mt-[5px]'>
                    <li  className='marker:text-[#65C322]'>Access your data</li>
                    <li  className='marker:text-[#65C322]'>Correct inaccuracies</li>
                    <li  className='marker:text-[#65C322]'>Request deletion</li>
                    <li  className='marker:text-[#65C322]'>Restrict processing</li>
                    <li  className='marker:text-[#65C322]'>Withdraw consent</li>

                    </ul>
                    <h1>Requests can be sent to:</h1>
                    <span className='text-[#65C322]'>[privacy@alterrna.com]</span>
                    

                </div>
                <div className='mt-[30px]'>
                    <h1 className='font-semibold text-[18px] '>8. Medical Disclaimer</h1>
                    
                    <p className='mt-[10px] mb-[10px]'>AlterRNA does not provide medical advice. Platform content is for informational and collaborative research purposes only.</p>

                  

                   

                    
                
                </div>

                <div>
                    <h1 className='font-semibold text-[18px] '>9. Changes to This Policy</h1>

                    <h1>We may update this Privacy Policy periodically. Updates will be reflected on this page.</h1>

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
