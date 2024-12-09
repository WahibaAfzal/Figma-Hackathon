import React from 'react'
import Image from 'next/image'
import cross from '../public/images/Vector.png'

function Header() {
  return (
    <div>
      <div className='w-[1349px] h-[38px] bg-black flex justify-center'>
        <div className='flex justify-center align-middle  w-[859px] h-[24px] top-[9px] left-[544px] pt-3'><div className='w-[351px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] flex align-middle ml-32 text-white
       
        '>Sign up and get 20% off to your first order. 
        <div className='font-Satoshi font-medium text-[14px] leading-[18.9px] underline decoration-solid'>
        Sign Up Now</div>
            </div>
           
            <div className='w-[20px] h-[20px] top-[9px] left-[1320px] ml-[390px]'><Image src={cross} alt='cross'/>

            
            </div>
            </div>
      </div>
    </div>
  )
}

export default Header
