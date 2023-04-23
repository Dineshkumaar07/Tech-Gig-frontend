import React from 'react'
import Navbar from '../components/Navbar'
import MobilePhones from '../components/Mobiles/MobilePhones'
import Carosuel from '../components/Carosuel'
const Main = () => {
  return (
    <div className='font-poppins'>
        <Navbar/>
        <Carosuel/>
        <MobilePhones/>
    </div>
  )
}

export default Main