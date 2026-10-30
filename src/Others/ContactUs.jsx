import React from 'react'
import Navbar from '../components/Navbar'
import { Astroid, Mail, MapPin, Phone } from 'lucide-react'
import { MdEmail } from 'react-icons/md'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen w-full flex justify-center items-center'>
        <div className='w-[1200px] h-[637px]  flex justify-between my-10'>

            {/* left  */}

            <div className='w-[520px] h-full bg-[#084191] rounded-[20px] text-white  flex flex-col p-10'>

                <div className='flex'>
                    <Astroid/>
                <h1>CONTACT US</h1>
                </div>

                <h1 className='font-semibold text-[35px] mt-[10px]'>Need More Information?Get In Touch</h1>

                <p className='text-[18px] mt-[10px]'>Contact us today for tailored marketing strategies and expert advice. We’re eager to help your business grow!</p>

                <div className='flex flex-col gap-[35px] mt-10'>
                    <div className='flex gap-2'>
                        <div className='w-[47px] h-[47px] bg-[#053476] rounded-[8px] flex justify-center items-center'>
                            <Phone className='text-[#65C322]' />
                        </div>

                        <div>
                            <h1 className='text-[16px]'>Phone Number</h1>
                            <p>+01 569 896 654</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-[47px] h-[47px] bg-[#053476] rounded-[8px] flex justify-center items-center'>
                            <Mail  className='text-[#65C322]' />
                        </div>

                        <div>
                            <h1 className='text-[16px]'>Email Address</h1>
                            <p>info@lynkedupFoundation.com</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='w-[47px] h-[47px] bg-[#053476] rounded-[8px] flex justify-center items-center'>
                            <MapPin className='text-[#65C322]' />
                        </div>

                        <div>
                            <h1 className='text-[16px]'>Office Address</h1>
                            <p>4th Floor, Aurora Tower, 15 Kingsway, London WC2B 6UF, UK</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* right  */}

            <div className='w-[650px] h-full  p-10 rounded-[15px]'>

                <h1 className='font-semibold text-[35px] text-[#084191]'>Get In Touch</h1>
                <p className='text-[#2E4049] text-[18px]'>Become a AlterRNA to drive real change, launch programs</p>


                <form className='mt-[26px]'>

                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <label className='text-[16px] text-[#000000]'>First Name</label>
                                <input type="text" placeholder='John Doe' className='w-[280px] bg-white h-[55px] rounded-[100px] px-5 border border-[#DDDDDD] hover:border-emerald-500 transition'/>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label className='text-[16px] text-[#000000]'>Last Name</label>
                                <input type="email" placeholder='example@example' className='w-[280px] bg-white h-[55px] rounded-[100px] px-5 border border-[#DDDDDD] hover:border-emerald-500 transition'/>
                            </div>

                        </div>
                        <div className='flex justify-between mt-[20px]'>
                            <div className='flex flex-col'>
                                <label className='text-[16px] text-[#000000]'>Email Address</label>
                                <input type="text" placeholder='example@example' className='w-[280px] bg-white h-[55px] rounded-[100px] px-5 border border-[#DDDDDD] hover:border-emerald-500 transition'/>
                            </div>
                            
                            <div className='flex flex-col'>
                                <label className='text-[16px] text-[#000000]'>Phone Number</label>
                                <input type="email" placeholder='example@example' className='w-[280px] bg-white h-[55px] rounded-[100px] px-5 border border-[#DDDDDD] hover:border-emerald-500 transition'/>
                            </div>


                        </div>
                            <div className='flex flex-col mt-[20px]'>
                                 <label className='text-[16px] text-[#000000]'>Email Address</label>
                                 <textarea placeholder="example@example" className='bg-white h-[200px] rounded-[10px] border border-[#DDDDDD] "  hover:border-emerald-500 transition px-5 pt-5'></textarea>
                            </div>

                                <div className='flex justify-end mt-[20px]'>
                              <button  className='w-[170px] h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] rounded-[100px] text-white flex justify-center items-center '>Contact Us</button>
                              </div>
                </form>
            </div>

        </div>
      
    </div>

    <Footer/>
    </>
  )
}

export default ContactUs
