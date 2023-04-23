import React from 'react'
import Navbar from '../components/Navbar'
import DetailCard from '../components/Mobiles/DetailCard'
const DetailPage = () => {
  const itemID = localStorage.getItem("itemID");
  console.log(itemID);

  return (
    <div>
        <Navbar/>
        <DetailCard id={itemID} />
    </div>
  )
}

export default DetailPage