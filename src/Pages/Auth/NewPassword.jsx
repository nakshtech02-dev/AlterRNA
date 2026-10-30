import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const NewPassword = () => {
  return (
     <>
    <Navbar/>
    <div className="min-h-screen bg-[url('/images/About1bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center">

    <div className='bg-white w-[450px] h-[500px] rounded-[20px] flex flex-col justify-center items-center'>
       
        <h1  className='font-bold text-[32px] text-[#084191]'>Create your Password</h1>

        <h1 className='text-center text-[#676969]'>Secure your account with <br /> a strong password.</h1>

        <form className=' w-full p-5 px-10'>
            
            <div className='flex flex-col relative mt-[10px]'>
                <label >Password</label>             
                <input type="text"  placeholder='Enter password' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
            <div className='flex flex-col relative mt-[10px]'>
                <label >Confirm Password</label>             
                <input type="text"  placeholder='Enter password' className='w-full bg-white h-[50px] border border-[#DDDDDD] rounded-[100px] px-5'/>
            </div>
   
            <button onClick={()=> navigate("/")} className='w-full h-[50px] bg-gradient-to-r from-[#084191] to-[#65C322] text-white rounded-[100px] mt-[30px]'>Submit</button>
        </form>

            <h1>Already have an account? <Link to="/signin" className='font-semibold text-[#65C322]'>Sign In</Link></h1>

       
    </div>
      
    </div>
    </>
  )
}

export default NewPassword
