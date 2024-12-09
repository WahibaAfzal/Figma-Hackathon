import React from "react";
import Image from "next/image";
import email from "../public/images/Frame (4).png";
import twitter from "../public/images/1.png";
import facebook from "../public/images/2.png";
import instagram from "../public/images/logo-instagram 1.png";
import github from "../public/images/logo-github 1 (1).png";
// import shopco from "../public/images/SHOP.CO.png";
import visa from "../public/images/Badge (1).png";
import mastered from "../public/images/Badge (2).png";
import paypal from "../public/images/Badge (3).png";
import ipay from "../public/images/Badge (4).png";
// import Gpay from "../public/images/Badge (5).png";

function Footer() {
  return (
    <div>
      <div
        className="w-[1349px] h-[589px] top-[3781px] left-[-1px]
      "
      >
        <div
          className="w-[1200px] h-[130px] top-[3781px] left-[100px]
        rounded-3xl pt-[36px] pr-[64px] pb-[36px] ml-14 bg-black flex "
        >
          <h1 className="w-[551px] h-[94px] font-IntergralCF font-bold text-[40px] leading-[45px] text-white ml-12 -mt-4">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="w-[349px] h-[108px] ">
            <div className="w-[349px] h-[48px] rounded-[62px] bg-white ml-40 -mt-6">
              <div className="flex">
                <div className="w-[24px] h-[24px] ml-5 mt-3">
                  <Image src={email} alt="" />
                </div>
                <h1 className="w-[173px] h-[22px] font-Satoshi font-normal text-[15px] leading-[21.6px] text-slate-400 ml-5 mt-3">
                  Enter your email address
                </h1>
              </div>
            </div>
            <div className="w-[349px] h-[48px] rounded-[62px] bg-white ml-40 mt-2">
              <h1 className="w-[180px] h-[30px] font- Satoshi font-medium text-[15px] leading-[21.6px] text-black ml-20 pt-3">
                Subscribe to Newsletter
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[1349px] h-[499px] top-[3871px] left-[-1px] bg-slate-200 ">
          <div className="w-[1240] h-[177px] top-[4011px] left-[100px]  flex  justify-between">
            {/* 1 */}
            <div className="w-[248px] h-[177px] ">
              <div className="w-[167px] h-[23px] font-IntergralCF font-bold text-[33.45px] leading-[40.15px] text-black mt-[80px] ml-10">
                SHOP.CO
              </div>
              <h1 className="w-[248px] h-[66px] font-Satoshi font-normal text-[14px] leading-[22px] ml-10 mt-8 ">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </h1>
              <div className="w-[148px] h-[28px] flex gap-2 ml-10 mt-8">
                <div className="w-[28px] h-[28px]">
                  {" "}
                  <Image src={twitter} alt="" />
                </div>
                <div className="w-[28px] h-[28px]">
                  <Image src={facebook} alt="" />
                </div>

                <div className="w-[13.55px] h-[13.55px] top-[149px] left-[120px]">
                  <Image src={instagram} alt="" />
                </div>
                <div className="w-[28px] h-[28px]">
                  <Image src={github} alt="" />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-[104px] h-[177px] ">
              <h1 className="w-[98px] h-[18px] font-Satoshi font-semibold text-[20px] leading-[18px] text-black mt-[90px] ">
                Company
              </h1>
              <h2
                className="w-[104px] h-[133px] font-Satoshi font-normal
              text-[16px] leading-[19px] mt-9 "
              >
                About
                <div className="mt-6">Features </div>
                <div className="mt-6">Works </div>
                <div className="mt-6">Career</div>{" "}
              </h2>
            </div>
            {/* 3 */}
            <div className="w-[136px] h-[177px] gap-7">
              <h1 className="w-[49px] h-[18px] font-Satoshi font-normal text-[20px] leading-[18px] text-black mt-[90px]">
                Help
              </h1>
              <div className="w-[136px] h-[133px]">
                <h1 className="w-[136px] h-[133px] font-Satoshi font-normal tex-[16px] leading-[19px] mt-9">
                  Customer Support
                  <div className="mt-6">Delivery Details</div>
                  <div className="mt-6">Terms & Conditions</div>
                  <div className="mt-6">Privacy Policy</div>
                </h1>
              </div>
            </div>
            {/* 4 */}
            <div className="w-[149px] h-[177px] gap-7">
              <h1 className="w-[37px] h-[18px] font-Satoshi font-normal text-[20px] leading-[18px] text-black mt-[90px]">
                FAQ
              </h1>
              <div>
                <h1 className="w-[149px] h-[133px] font-Satoshi fonr-normal text-[16px]leading-[19px] mt-9">
                  Account
                  <div className="mt-6">Manage Deliveries</div>
                  <div className="mt-6">Orders</div>
                  <div className="mt-6">Payments</div>
                </h1>
              </div>
            </div>
            {/* 5 */}
            <div className="w-[149px] h-[177px] gap-7">
              <h1 className="w-[118px] h-[18px] font-Satoshi font-normal text-[20px] leading-[18px] text-black mt-[90px]">
                Resources
                <div>
                  <h1 className="w-[149px] h-[133px] font-Satoshi font-normal text-[16px]leading-[19px] mt-9">
                    Free eBooks
                    <div className="mt-6">Development Tutorial</div>
                    <div className="mt-6">How to - Blog</div>
                    <div className="mt-6">Youtube Playlist</div>
                  </h1>
                </div>
              </h1>
            </div>
          </div>
          {/*  */}
          <section className="w-[1100px] h-[50px]  mt-52 ml-32 "> 
            <div className="bg-slate-600 w-[1100px] h-[2px]"></div>
           <div className="flex  gap-[700px]">
            <div className="w-[296px] h-[19px] top-[4263px] left-[100px] fnt-Satoshi font-normal text-[15px] leading-[18.9px] mt-2 justify-start text-slate-500 ">Shop.co © 2023, All Rights Reserved</div>
            <div className="w-[281.07px] h-[30.03px] top-[4258px] left-[1059px] flex gap-3 mt-2">
              <div className="w-[46.61px] h-[30.03px]">
                <Image src={visa} alt=""/>
              </div>
              <div className="w-[46.61px] h-[30.03px]">
                <Image src={mastered} alt=""/>
              </div>
              <div className="w-[46.61px] h-[30.03px]">
                <Image src={paypal} alt=""/>
              </div>
              <div className="w-[46.61px] h-[30.03px]">
                <Image src={ipay} alt=""/>
              </div></div>
              
            </div>
            </section>
          
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
