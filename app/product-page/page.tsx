import React from "react";
import Image from "next/image";
import shirt1 from "../../public/images/Frame 32 (1).png";
import shirt2 from "../../public/images/Frame 33 (1).png";
import shirt3 from "../../public/images/Frame 34 (1).png";
import shirt4 from "../../public/images/Frame 38 (2).png";
import rate from "../../public/images/Frame 10.png";
import review from "../../public/images/Frame 22 (1).png";
import review1 from "../../public/images/Frame 23.png";
import review2 from "../../public/images/Frame 24.png";
import review3 from "../../public/images/Frame 25.png";
import review4 from "../../public/images/Frame 26.png";
import review5 from "../../public/images/Frame 27 (1).png";
import circle from "../../public/images/Frame (6).png";
import dropdown from "../../public/images/Frame (2).png";
import arrow from "../../public/images/Frame (5).png";
import Link from "next/link";
import t1 from "../../public/images/image 5.png";
import t2 from "../../public/images/image 2.png";
import t3 from "../../public/images/image 6.png";
import t4 from "../../public/images/image 1.png";
import circle1 from "../../public/images/Ellipse 1.png";
import circle2 from "../../public/images/Ellipse 2.png";
import circle3 from "../../public/images/Ellipse 3.png";

export default function page() {
  return (
    <div>
      <div className="w-[1349px] h-[2000]">
        {/* 1st section */}
        <div className="w-[1349px] h-[2000]">
          <div className="flex ml-7 gap-2 mt-5">
            <div className="w-[42px] h-[11px] font-Satoshi font-normal leading-[21.6px] text-[16px] ">
              <Link href="/"> Home</Link>
            </div>
            <div className="w-[16px] h-[16px] mt-1">
              <Image src={arrow} alt="" />
            </div>
            <h1 className="w-[31px] h-[22px] font-Satoshi font-semibold text-[16px] leading-[21.6px] mt-">
              Shop
            </h1>
            <div className="w-[42px] h-[11px] font-Satoshi font-normal leading-[21.6px] text-[16px] ml-2 ">
              <Link href="/"> Main</Link>
            </div>
            <div className="w-[16px] h-[16px] mt-1">
              <Image src={arrow} alt="" />
            </div>
            <h1 className="w-[31px] h-[22px] font-Satoshi font-semibold text-[16px] leading-[21.6px] mt-">
              TShirt
            </h1>
          </div>
          {/* shirt */}
          <div className="ml-9">
            <div className="w-[152px] h-[167pxpx] top-[216px] left-[100px] mt-6">
              <Image src={t1} alt="" />
            </div>
            <div className="w-[152px] h-[168px]  top-[397px] left-[100px] mt-4">
              <Image src={t2} alt="" />
            </div>
            <div className="w-[152px] h-[167px]  top-[579px] left-[100px] mt-4">
              <Image src={t3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-56 -mt-[530px] w-[444px] h-[530px] top-[216px] left-[266px]">
        <Image src={t4} alt="" />
      </div>

      <div className="ml-[700px] -mt-[530px] w-[620px] h-[530px] top-[216px] left-[266px] ">
        <div className="ml-5 pt-4">
          <h1 className="w-[600px] h-[48px] lleft-[216px] top-[750px] font-IntergralCF font-bold text-[40px] leading-[48px]">
            One Life Graphic T-shirt
          </h1>
          <div className="w-[139px] h-[24.71px] top-[1453px] left-[100px] gap-[13px] flex">
            <Image src={rate} alt="" />
            <h5 className="w-[38px] h-[22px] font-Satoshi font-normal text-[16px] leading-[21.6px] text-slate-500">
              4.5/5
            </h5>
          </div>
          <div className="flex gap-2">
            <h2 className="w-[81px] h-[43px] font-Satoshi font-bold text-[32px] leading-[43.2px]">
              $260
            </h2>
            <h2 className="w-[83px] h-[43px] font-Satoshi font-bold text-[32px] leading-[43.2px] text-slate-500 line-through">
              $300
            </h2>
            <h3 className="w-[72px] h-[34px] font-Satoshi font-semibold text-[16px] leading-[21.6px] rounded-[62px] text-red-700 bg-slate-300 mt-2">
              -40%
            </h3>
          </div>
          <h1
            className="w-[590px] h-[33px]  top-[380px] left-[750px] font-Satoshi font-semibold text-[16px] leading-[22px]
            text-slate-500 mt-7"
          >
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </h1>
          <div className="w-[620] h-[2px] bg-slate-100 mt-10"></div>
          <div>
            <h1 className="w-[93px] h-[11px] top-[461px] left-[750px font-Satoshi font-normal leading-[21.6px] text-slate-400">
              Select Colors
            </h1>
            <div className="w-[143px] h-[37px] left-[488px] 750px flex gap-3 mt-5">
              <Image src={circle1} alt="" />
              <Image src={circle2} alt="" />
              <Image src={circle3} alt="" />
            </div>
          </div>
          <div className="w-[620] h-[2px] bg-slate-100 mt-4"></div>

          <h1 className="w-[87px] h-[11px] top-[573px] left-[750px] font-Satoshi font-normal leading-[21.6px] text-slate-500">
            Choose Size
          </h1>
        </div>
        <div></div>
        <div className="flex gap-3 mt-8 ml-3">
          {" "}
          <div className="w-[86px] h-[46px] rounded-[62px] bg-slate-200">
            <h1 className="w-[39px] h-[22px] font-sattoshi font-medium text-[16px] leading-[21.6px] mt-3 ml-4">
              Small
            </h1>
          </div>
          <div className="w-[105px] h-[46px] rounded-[62px] bg-slate-200">
            <h1 className="w-[57px] h-[22px] font-sattoshi font-medium text-[16px] leading-[21.6px] mt-3 ml-4">
              Medium
            </h1>
          </div>
          <div className="w-[89px] h-[46px] rounded-[62px] bg-black">
            <h1 className="w-[41px] h-[22px] font-sattoshi font-medium text-[16px] leading-[21.6px] mt-3 ml-4 text-white">
              Large
            </h1>
          </div>
          <div className="w-[104px] h-[46px] rounded-[62px] bg-slate-200">
            <h1 className="w-[56px] h-[22px] font-sattoshi font-medium text-[15px] leading-[21.6px] mt-4 ml-4 ">
              {" "}
              X-Large
            </h1>
          </div>
        </div>

        <div className="w-[620] h-[2px] bg-slate-100 mt-4"></div>
        <div >
         
          <div className="w-[170px] h-[52px] rounded-[62px] bg-slate-200">
            <div className="w-[56px] h-[22px] font-sattoshi font-medium text-[20px] leading-[21.6px] mt-4 ml-4 flex justify-around gap-10">
              <h1 className="mt-3">-</h1>
              <h1 className="mt-3 ml-4">1</h1>
              <h1 className="mt-3 ml-4 h-[24px] w-[24px]">+</h1>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* secont section */}
      <section>
        <div className="flex justify-evenly mt-4">
          <div className="w-[133px] h-[14px] top-[826px] left-[240px] font-Satoshi font-normal text-[17px] leading-[26px]">
            Product Details
          </div>
          <div className="w-[154px] h-[14px] top-[826px] left-[642px] font-Satoshi font-extrabold text-[17px] leading-[22px]">
            Rating & Reviews
          </div>
          <div className="w-[47px] h-[14px] top-[826px] left-[1110px] font-Satoshi font-normal text-[20px] leading-[22px]">
            FAQs
          </div>
        </div>
        <div>
          <div className="w-[1000px] h-[2px] bg-black mt-8 ml-52"></div>
          <div className="w-[400px] h-[3px] bg-black  ml-[550px]"></div>
        </div>
        {/* button */}
        <div className="flex">
          <div className="flex mt-5 ml-14">
            <h1 className="w-[125px] h-[32px] top-[896px] left-[100px] font-Satoshi font-extrabold text-[21px] leading-[32.4px]">
              All Reviews
            </h1>
            <h1 className="w-[33px] h-[11px] top-[910px] left-[233px] font-Satoshi font-normal text-[16px] leading-[22px] text-slate-500 mt-2">
              (451)
            </h1>
          </div>
          <div>
            <div className="w-[354px] h-[48px] top-[888px]  left-[986px] flex gap-3 mt-2 ml-[750px]">
              <div className="w-[48px] h-[48px] rounded-[62px] bg-slate-200">
                <Image className="mt-3 ml-3" src={circle} alt="" />
              </div>
              <div className="w-[120px] h-[48px] rounded-[62px] bg-slate-200">
                <h1 className="w-[43px] h-[22px] font-sattoshi font-medium text-[16px] leading-[21.6px] mt-3 ml-4">
                  Latest
                </h1>
                <div className="w-[16px] h-[16px] ml-20 -mt-4">
                  <Image src={dropdown} alt="" />
                </div>
              </div>
              {/* button */}
              <button className="w-[166px] h-[48px] rounded-[62px] bg-black">
                <h1
                  className="text-white w-[107px] h-[22px] font-Satoshi font-medium text-[15px] leading-[21.6px] mt-1 ml-8
                  "
                >
                  Write a Review
                </h1>
              </button>
            </div>
          </div>
        </div>
        {/* cards */}
        <div>
          <div className="flex gap-6 mt-10 ml-12">
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review} alt="" />
            </div>
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review1} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mt-5 ml-12">
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review2} alt="" />
            </div>
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review3} alt="" />
            </div>
          </div>
          <div className="flex gap-6 mt-5 ml-12">
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review4} alt="" />
            </div>
            <div className="w-[610px] h-[241.58px] top-[960px] left-[100px]">
              <Image src={review5} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* last section */}

      <div className="w-[579px] h-[58px] top-[1878px] left-[431px] font-InrergralCF font-extrabold text-[48px] leading 57.6px] ml-96 mt-6">
        {" "}
        YOU MIGHT ALSO LIKE
      </div>
      <div className="ml-12 flex gap-6">
        <div
          className="w-[296px] h-[444px] -mt-[-73px] 
          ml- [10px]"
        >
          <Image src={shirt1} alt="" />
          <h1 className="w-[225px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[16px] leading-[27px] ">
            Polo with Contrast Trims
          </h1>
          <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
            <Image src={rate} alt="" />
            <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">
              4.0/5
            </h5>
          </div>
          <div className="flex gap-2">
            <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">
              $212
            </h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">
              $242
            </h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">
              -20%
            </h3>
          </div>
        </div>

        <div
          className="w-[296px] h-[444px] -mt-[-73px] 
          ml- [10px]"
        >
          <Image src={shirt2} alt="" />
          <h1 className="w-[150px] h-[27px] top-[1418px] left-[415px] font-Satoshi font-bold text-[13px] leading-[27px] ">
            Gradient Graphic T-shirt
          </h1>
          <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
            <Image src={rate} alt="" />
            <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">
              3.5/5
            </h5>
          </div>
          <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">
              $145
            </h2>
          </div>
        </div>

        <div
          className="w-[296px] h-[444px] -mt-[-73px] 
          ml- [10px] "
        >
          <Image src={shirt3} alt="" />
          <h1 className="w-[151px] h-[27px] top-[1418px] left-[100px] font-Satoshi font-bold text-[12px] leading-[27px] ">
            Polo with Tipping Details
          </h1>
          <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
            <Image src={rate} alt="" />
            <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">
              4.5/5
            </h5>
          </div>
          <h2 className="w-[55px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">
            $180
          </h2>
        </div>

        <div
          className="w-[296px] h-[444px] -mt-[-73px] 
          ml- [10px] "
        >
          <Image src={shirt4} alt="" />
          <h1 className="w-[199px] h-[27px] top-[1418px] left-[1045px] font-Satoshi font-bold text-[16px] leading-[27px] ">
            Black Striped T-shirt
          </h1>
          <div className="w-[150px] h-[19px] top-[1453px] left-[100px] gap-[13px] flex">
            <Image src={rate} alt="" />
            <h5 className="w-[33px] h-[19px] font-Satoshi font-normal text-[14px] leading-[18.9px] text-slate-500">
              5.0/5
            </h5>
          </div>
          <div className="w-[200px] h-[32px] top-[1480px] left-[415px] gap-[10px] flex">
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px]">
              $120
            </h2>
            <h2 className="w-[61px] h-[32px] font-Satoshi font-bold text-[24px] leading-[32.4px] text-slate-500 line-through">
              -$150
            </h2>
            <h3 className="w-[31px] h-[16px] font-Satoshi font-semibold text-[12px] leading-[16.2px] text-red-700 bg-slate-300 mt-2">
              -30%
            </h3>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
