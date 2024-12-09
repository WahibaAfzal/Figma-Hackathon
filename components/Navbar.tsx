import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import cart from '../public/images/Frame.png'
import user from '../public/images/Vector (1).png'
import dropdown from '../public/images/Frame (2).png'
import search from '../public/images/Frame (3).png'

 
function NavBar() {
  return (
    <div className='w-[1349px] h-[60px] '>
        <nav className='w-[1240px] h-[48px] mt-[20px] ml-[100px] flex gap-10 '>
            <h1 className='w-[160px] h-[22px] font-Integral-CF font-bold text-[32px] leading-[38.4px] flex '>SHOP.CO</h1>
            <div className='w-[321px] h-[22px] flex gap-[24px]'>
                <div className='w-[57px] h-[22] flex gap-6'>
                    <h1 className='w-[37px] h-[22px]
                    font-Integral-CF font-normal text-[16px] leading-[21.6px] mt-3'>
                        <Link href="/">
                        Shop
                        </Link>
                        </h1>
                    <div className='w-[57px] h-[22px] '>
                        <Image src={dropdown} alt=''/>
                    </div>
                    <h1 className='w-[56px] h-[20px] font-Satoshi font-normal text-[16px] leading-[21.6px] flex mt-3'>  <Link href="/product-">OnSale</Link></h1>
                    <h1 className='w-[87px] h-[22px] font-Satoshi font-normal text-[16px] leading-[21.6px] mt-3'> <Link href="/category-page">NewArrivals </Link></h1>
                    <h1 className='w-[49px] h-[22px] font-Satoshi font-normal text-[16px] leading-[21.6px] mt-3'><Link href="/category-page">Brands </Link></h1>
                </div>
            </div>
            <div className='w-[577px] h-[48px] rounded-[62px] pt-3  pr-4 pb-3 pl-4 flex gap-[12px] bg-slate-100'>
                <div className='w-[24px] h-[24px]'>
                    <Image src={search} alt=''/>
                </div>
                <h1 className='w-[151px] h-[22px] font-Satoshi fornt-normal text-[16px] leading-21.6px text-slate-400' >Search for products...</h1>
            </div>
            <div className='w-[62px] h-[24px] mt-4 flex gap-[14px]'>
                <div className='w-[24px] h-[24px]'>
                  <Link href='/cart-page'><Image src={cart} alt=''/></Link>  
                </div>
                <div className='w-[24px] h-[24px]'>
                    <Image src={user} alt=''/>
                </div>
            </div>
        </nav>
     
    </div>
  )
}

export default NavBar


{/* <div className='w-[1170px] h-[38px] top-[88px] left-[135px] flex gap-[130px] mt-5 ml-40'>
<div className='w-[645px] h-[24px] pl-12 flex gap-[160px]'>
   
    <div className='w-[118px] h-[24px] font-Inter font-bold text-[24px] pl-10 leading-[24px] pt-1'>Exclusive</div>
    <div className='w-[367px] h-[24px] pt-2 flex gap-[48px]'>
        <h1 className='w-[48px] h-[24px] font-Poppins font-medium text-[20px] leading-[24px] flex items-center'><Link href="/">Home</Link></h1>
        <h1 className='w-[66px] h-[24px] font-Poppins font-medium text-[20px] leading-[24px] flex items-center'><Link href="/contact">Contact</Link></h1>
        <h1 className='w-[48px] h-[24px] font-Poppins font-medium text-[20px] leading-[24px] flex items-center'><Link href="/about">About</Link></h1>
        <h1 className='w-[65px] h-[24px] font-Poppins font-medium text-[20px] leading-[24px] flex items-center'><Link href="/signup">SignUp</Link></h1>
    </div>
    
</div>
<div className='w-[395px] h-[38px] flex gap-[24px]'>
    <div className='w-[243px] h-[38px] pt-[7px] pr-[12px] pb-[7px] pl-[20px] gap-[10px] bg-slate-200'>
        <div className='w-[211px] h-[24px] gap-[34px]'>
            <h1 className='w-[153px] h-[18px] opacity-[50%]
            font-Poppins font-normal text-[12px] leading-[18px] text-black'>What are you looking for? </h1> 
            
            {/* <div className='w-[24px] h-[24px] ml-48 -mt-4 '><img src="https://www.svgrepo.com/show/7109/search.svg" alt="" /></div> */}
           
//         </div>
//     </div>
//     <div className='w-[128px] h-[32px] flex gap-[16px]'>
     
//       <div className='w-[38px] h-[38px] mt-1'>
//        <Link href="/cart"><Image src={cart} alt='' /></Link> 
//       </div>
//       <div className='w-[32px] h-[32px]'>
//        <Link href="/user"> <Image src={user} alt='' /></Link> 
//       </div>
//     </div>
// </div>

// </div>  */}

