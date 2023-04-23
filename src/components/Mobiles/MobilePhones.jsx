import React from 'react'
import Card from './Card'

const MobilePhones = () => {
  return (
    <div className='px-3 mt-5 sm:ml-7 ml-0 w-full overflow-x-hidden'>
        <div>
            <h1 className='font-bold text-xl'> Mobiles For You!</h1>
        </div>
        <div className='mt-5'>
            <Card/>
        </div>
    </div>
  )
}

export default MobilePhones