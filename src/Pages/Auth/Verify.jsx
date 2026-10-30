import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Verify = () => {
    const navigate = useNavigate();
  return (
           <>
    <Navbar/>
    <div className="min-h-screen bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">

    <div className='bg-white w-[450px] h-[500px] rounded-[20px] flex flex-col justify-center items-center'>
        <img src="/images/lock.png" alt="" />
        <h1  className='font-bold text-[32px] text-[#084191]'>Verify your Email</h1>

        <h1 className='text-center text-[#676969]'>We just sent 6-digit code to 123 <br /> 4567 8910 password.</h1>

        <form className=' w-full p-5 px-10'>
            
            <div className='flex flex-col relative mt-[10px]'>
                <label >Code</label>             
                <input type="text"  placeholder='Enter code here' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
   
            <button onClick={()=> navigate("/newpassword")} className='w-full h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white rounded-[100px] mt-[30px]'>Continue</button>
        </form>

            <h1>Already have an account? <Link to="/signin" className='font-semibold text-[#65C322]'>Sign In</Link></h1>

       
    </div>
      
    </div>
    </>
  )
}

export default Verify
