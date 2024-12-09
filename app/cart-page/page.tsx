import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import arrow from '../../public/images/Frame (5).png'
import picture from '../../public/images/Frame 27.png'
import picture1 from '../../public/images/Frame 28.png'

export default function page() {
  return (
    <div>
      <div className='w-[1349px] h-[650px]'>
             <div className='w-[106px] h-[22px] top-[158px] left-[100px] flex gap-3 ml-10 mt-3'>
              <div className='w-[42px] h-[11px] font-Satoshi font-normal leading-[21.6px] text-[16px]'>
                <Link href="/"> Home</Link></div>
                <div className='w-[16px] h-[16px] mt-2'><Image src={arrow} alt=''/></div>
                <h1 className='w-[31px] h-[22px] font-Satoshi font-semibold text-[16px] leading-[21.6px] mt-'>Cart</h1>
             </div>
             <div className='w-[259px] h-[48px] top-[204px] left-[100px] font-IntergralCF font-bold text-[40px] leading-[48px] ml-10 mt-6'>Your cart</div > 
             <div className='flex'>
             <div className='w-[715px] h-[508px] top-[276px] left-[100px] pt-[20px] pr-[24px] pb-[20px] pl-[24px]'>
              <Image src={picture} alt=''/>
             </div>
             <div className='w-[505px] h-[458px] top-[276px] left-[835px] pt-[20px] pr-[24px] pb-[20px] pl-[24p]'>
             <Image src={picture1} alt=''/>
             </div>
             </div>
      </div>
      
      
    </div>
  )
}
