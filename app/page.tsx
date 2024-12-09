import React from "react";
import Image from "next/image";
import bigImage from "../public/images/Rectangle 2.png";
import star from "../public/images/Vector (2).png";
import bigstar from "../public/images/Vector (3).png";
import brand from "../public/images/Vector (4).png";
import brand2 from "../public/images/Vector (5).png";
import brand3 from "../public/images/Vector (6).png";
import brand4 from "../public/images/Vector (7).png";
import brand5 from "../public/images/Group.png"
import shirt1 from "../public/images/image 7.png";
import shirt2 from "../public/images/Frame 33.png";
import shirt3 from "../public/images/Frame 34.png";
import shirt4 from "../public/images/Frame 38.png";
import rate from '../public/images/Frame 10.png'
import shirt5 from "../public/images/Frame 32.png";
import shirt6 from "../public/images/image 8 (1).png";
import shirt7 from "../public/images/image 9.png";
import shirt8 from "../public/images/image 10.png";
import men1 from '../public/images/Frame 61.png'
import men2 from '../public/images/Frame 62.png'
import men3 from '../public/images/Frame 64.png'
import men from '../public/images/Frame 63.png'
import arrow from '../public/images/Vector (9).png'
import arrow1 from '../public/images/Vector (8).png'
import comment from '../public/images/Frame 61 (1).png'
import comment1 from '../public/images/Frame 22.png'
import comment2 from '../public/images/Frame 62 (1).png'


export default function page() {
  return (
    <div>
      <div className="w-[1349px] h-[1000px]">
        <Image src={bigImage} alt="" />
       
        <div className="">
          <h1 className="w-[577px] h-[173px] -mt-[550px] ml-[100px] font-Intergral-CF font-bold text-[64px] leading-[64px] text-black">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <h1 className="w-[545px] h-[100px] top-[442px] mt-9 ml-[100px] font-Satoshi font-normal text-[16px] leading-[22px] text-black">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h1>
         
          <div >
            <button className="w-[245px] h-[60px] top-[442px] mt-10 ml-[100px]  rounded-[62px] bg-black">
              <h1 className="text-white">Shop Now</h1></button>
            <div className="w-[104px] h-[104] top-[220px] -mt-96 ml-[1150px] bg-black">
          <Image src={bigstar} alt=""/>
          
        </div>
        <div className="w-[104px] h-[104] mt-[100px] ml-[700px] bg-black">
          <Image src={star} alt=""/>
          
        </div>
        <div className="w-[545px] h-[30px] top-[442px] mt-10 ml-[100px]  rounded-md text-black"></div>
          </div>
        </div>
        
      </div>
      <div className="w-[1349px] h-[100px] -mt-[379px] bg-black flex  justify-center gap-24 ">
        <div className="w-[166.48px] h-[33.16px] top-[841px] left-[100px] mt-8 gap-1">
          <Image src={brand} alt="" />
        </div>
        <div className="w-[91px] h-[37.98px] top-[0.01px] left-[100px] mt-8  gap-1">
          <Image src={brand2} alt="" />
        </div>
        <div className="w-[156px] h-[32.29px] top-[81.86px] left-[100px] mt-8  gap-1">
          <Image src={brand3} alt="" />
        </div>
        <div className="w-[194px] h-[32px] top-[842px] left-[831.48px] mt-8  gap-1">
          <Image src={brand4} alt="" />
        </div>
        <div className="w-[206.79px] h-[33.35px] top-[841px] left-[11131.48px] mt-8  gap-1">
          <Image src={brand5} alt="" />
        </div>
      </div>
      {/* main section-2 */}
      <div className="w-[1349px] h-[700px]">
        <h1 className="w-[403px] h-[58px] top-[991px] left-[518px] font-Intergral-CF font-extrabold text-[48px] leading-[57.6px text-black] ml-[450px] mt-10">NEW ARRIVALS</h1>
        {/* shirts section */}
        <div className="ml-12 flex gap-6">
         
          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px]">
            <Image src={shirt1} alt=""/>
            <h1 className="w-[225px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[16px] leading-[27px] ">T-SHIRT WITH TAPE DETAILS</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">5.0/5</h5>
            </div>
            <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$212</h2>
          </div>



          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px]">
            <Image src={shirt2} alt=""/>
            <h1 className="w-[150px] h-[27px] top-[1418px] left-[415px] font-Satoshi font-bold text-[17px] leading-[27px] ">SKINNY FIT JEANS</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">4.0/5</h5>
            </div>
            <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$145</h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">$260</h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">-20%</h3>
            </div>
          </div>

          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px] ">
            <Image src={shirt3} alt=""/>
            <h1 className="w-[151px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[16px] leading-[27px] ">SLEEVE STRIPED T-SHIRT</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">3.0/5</h5>
            </div>
            <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$80</h2>
          </div>

          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px] ">
            <Image src={shirt4} alt=""/>
            <h1 className="w-[199px] h-[27px] top-[1418px] left-[1045px] font-Satoshi font-bold text-[16px] leading-[27px] ">SLEEVE STRIPED T-SHIRT</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">4.5/5</h5>
            </div>
            <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$210</h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">$160</h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">-30%</h3>
            </div>
          
            
          </div>
          
        </div>
        <button className="w-[218px] h-[52px] top-[1548px] left-[611px] rounded-[62px] border-inherit border-stone-500 text-black ml-[550px]">View All</button>
      </div>


      {/* secnd section */}
      <div className="w-[1349px] h-[700px]">
        <h1 className="w-[403px] h-[58px] top-[991px] left-[518px] font-Intergral-CF font-extrabold text-[48px] leading-[57.6px text-black] ml-[450px] mt-10">TOP SELLING</h1>
        {/* shirts section */}
        <div className="ml-12 flex gap-6">
         
          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px]">
            <Image src={shirt5} alt=""/>
            <h1 className="w-[225px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[16px] leading-[27px] ">T-SHIRT WITH TAPE DETAILS</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">4.5/5</h5>
            </div>
            <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$120</h2>
          </div>



          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px]">
            <Image src={shirt6} alt=""/>
            <h1 className="w-[150px] h-[27px] top-[1418px] left-[415px] font-Satoshi font-bold text-[17px] leading-[27px] ">SKINNY FIT JEANS</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">3.5/5</h5>
            </div>
            <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$240</h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">$260</h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">-20%</h3>
            </div>
          </div>

          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px] ">
            <Image src={shirt7} alt=""/>
            <h1 className="w-[151px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[16px] leading-[27px] ">SLEEVE STRIPED T-SHIRT</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">4.5/5</h5>
            </div>
            <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$180</h2>
          </div>

          <div className="w-[296px] h-[444px] -mt-[-73px] 
           ml- [10px] ">
            <Image src={shirt8} alt=""/>
            <h1 className="w-[199px] h-[27px] top-[1418px] left-[1045px] font-Satoshi font-bold text-[16px] leading-[27px] ">SLEEVE STRIPED T-SHIRT</h1>
             <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
              <Image src={rate} alt=""/>
              <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">4.5/5</h5>
            </div>
            <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">$130</h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">$160</h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">-30%</h3>
            </div>
          
            
          </div>
          
        </div>
        <button className="w-[218px] h-[52px] top-[1548px] left-[611px] rounded-[62px] border-inherit border-stone-500 text-black ml-[550px]">View All</button>
      
      </div>
       {/* 3rd second */}
       <div className="w-[1349px] h-[866px] top-[866px] left-[100px] rounded-[40px] bg-slate-300">
        <h1 className="w-[687px] h-[58px] top-[70px] left-[276px] font-Integral-CF font-extrabold  text-[48px] leading-[57.6px] flex justify-center align-middle ml-64 pt-10">BROWSE BY DRESS STYLE
          
        </h1>
       <div className="mt-32 ml-10 ">
       <div className="flex gap-10 justify-center rounded-[40px]">
          <div className="w-[407px] h-[289px] top-[192px] left-[64px] rounded-[40px] mt-">
            
             <Image src={men1} alt=""/>
             
          </div>
          <div className="w-[684px] h-[289px] top-[192px] left-[491px] rounded-[40px] ">
             <Image src={men2} alt=""/>
          </div>
        </div>
        

        <div className="flex gap-10 justify-center rounded-[40px] mt-6">
          
          <div className="w-[684px] h-[289px] top-[192px] left-[491px] rounded-[40px] ">
             <Image src={men3} alt=""/>
          </div>
          <div className="w-[407px] h-[289px] top-[192px] left-[64px] rounded-[40px] mt-">
             <Image src={men} alt=""/>
          </div>
        </div>
        
       </div>
       </div>
       {/* 4th section */}
       <div>
        <div className="h-[600px]">
         <div className="flex"> <h1 className="w-[654px] h-[58px] top-[3363px] left-[100px] font-IntergralCF font-bold text-[48px] leading-[57.6px] ml-36 mt-28">OUR HAPPY CUSTOMERS</h1>
         <div className="w-[24px] h-[24px] top-[3421px] left-[1300px] flex gap-3 mt-36 ml-96"><Image src={arrow} alt="" />
         <Image src={arrow1} alt="" />
         </div>
        
         </div>
         <div className="flex justify-center gap-5 mt-9">
          <Image src={comment} alt=""/>
          <Image src={comment1} alt=""/>
          <Image src={comment2} alt=""/>
         </div>
        </div>
       </div>
    </div>
  );
}
