import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeMain from './Pages/Home/HomeMain'
import AboutMain from './Pages/About/AboutMain'
import PipelineMain from './Pages/Pipeline/PipelineMain'
import CommunityMain from './Pages/Community/CommunityMain'
import Terms from './Others/Terms'
import PrivacyPolicy from './Others/PrivacyPolicy'
import Cookies from './Others/Cookies'
import ContactUs from './Others/ContactUs'
import ScienceMain from './Pages/Science/ScienceMain'
import PlatformMain from './Pages/Platform/PlatformMain'
import SignUp from './Pages/Auth/SignUp'
import SignIn from './Pages/Auth/SignIn'
import Forgot from './Pages/Auth/Forgot'
import Verify from './Pages/Auth/Verify'
import NewPassword from './Pages/Auth/NewPassword'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain/>}/>
        <Route path="/about" element={<AboutMain/>}/>
        <Route path="/pipeline" element={<PipelineMain/>}/>
        <Route path="/community" element={<CommunityMain/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/policy" element={<PrivacyPolicy/>}/>
        <Route path="/cookies" element={<Cookies/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/science" element={<ScienceMain/>}/>
        <Route path="/platform" element={<PlatformMain/>}/>

        {/* Auth Routes  */}

        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/newpassword" element={<NewPassword/>}/>

    



        

      </Routes>
    </BrowserRouter>
  )
}

export default App
