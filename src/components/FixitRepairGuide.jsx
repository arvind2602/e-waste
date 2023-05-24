import React from 'react'
import Navbar from './Navbar'
import fixrepair from '../assets/fixrepair.jpeg'
import '../Style/Repair.css'
import mac from '../assets/mac.png'
import Footer from './Footer'

const FixitRepairGuide = () => {
  return (
    <>
    <Navbar />
    <div className='repair'>
    <img src={fixrepair} alt="ok" />
   
    </div>
    <h1 className='h1'>What do you want to repair today</h1>
    <p className='p'>Repairing your items will help keep them around longer, prolonging their life. ♻️ This will help keep them out of the landfill. 🌍 Making repairs can save you money too, because some items are relatively expensive to replace. 💰 For example, if a small part in your car breaks, and you know how to repair it, it will save you a lot of money compared to buying a whole new car. 🚗💸 </p>
    <img src={mac} alt='ok' className='im'/>
    <Footer />
    </>
  )
}

export default FixitRepairGuide