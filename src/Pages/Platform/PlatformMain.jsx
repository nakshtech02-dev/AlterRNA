import React from 'react'
import Navbar from '../../components/Navbar'
import Platform1 from './Platform1'
import Platform2 from './Platform2'
import Platform3 from './Platform3'
import Governance1 from './Governance1'
import Researcher1 from './Researcher1'
import Researcher2 from './Researcher2'
import Researcher3 from './Researcher3'
import Researcher4 from './Researcher4'
import Footer from '../../components/Footer'

const PlatformMain = () => {
  return (
    <>
        <Navbar/>
        <Platform1/>
        <Platform2/>
        <Platform3/>

        <Governance1/>

        <Researcher1/>
        <Researcher2/>
        <Researcher3/>
        <Researcher4/>
        <Footer/>
        
    </>
  )
}

export default PlatformMain
