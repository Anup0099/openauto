import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className="flex flex-col  w-full h-full text-light-black2 p-5 ">
      <div className="flex">
        <div className="flex bg-off-white w-1/4 justify-center items-center  p-8 relative  ">
          <div className="flex items-center sm:w-max sm:h-10/12   w-max h-max ">
            <Image
              src="/ABOUT.png"
              className=""
              height={80}
              width={70}
              alt=""
            />
          </div>
          <div
            className="text-5xl font-public px-3 font-light z-10 absolute top-10 sm:top-20 -right-44
        
        4xl:text-6xl
        "
          >
            About <br />{' '}
            <span className="text-5xl font-extrabold 4xl:text-6xl">
              OpenAuto
            </span>
          </div>
        </div>
        <div
          className=" font-inter flex flex-col text-base w-3/4 align-center p-10 mt-32 gap-5 justify-end
          sm:mt-40
          
          
          "
        >
          <div>
            Our mission is to make auto repair and maintenance accessible to
            <br />
            every vehicle owner at a click of a button.
          </div>
          <div className="flex gap-1">
            <Image src="/CheckMark.svg" height={10} width={10} alt="" />
            <div>No more gambling on where you should take your car.</div>
          </div>
          <div className="flex gap-1">
            <Image src="/CheckMark.svg" height={10} width={10} alt="" />
            <div>No more endless piles of paper</div>
          </div>
          <div className="flex gap-1">
            <Image src="/CheckMark.svg" height={10} width={10} />
            <div>No more endless phone calls for updates on your vehicles</div>
          </div>
          <div>
            We bring everything you require to be on top of your vehicle needs
            to one
            <br />
            place, your phone.
          </div>
        </div>
      </div>
      <div className="flex justify-center p-20 ">
        <div className=" flex flex-wrap   sm:flex-col   lg:w-5/6  xxl:w-2/3 3xl:w-2/3 4xl:w-2/3 justify-center ">
          {/* 1 */}
          <div className="flex  flex-col  p-20 sm:p-10 sm:w-full md:w-full lg:w-full lg:p-10 w-1/2 gap-2  border-r-2 border-b-2  sm:border-none md:border-none lg:border-none">
            <div className="">
              <Image src="/LiveTrack_icon.svg" height={25} width={25} alt="" />
            </div>
            <div className="font-light font-public text-xl">
              Track <span className="font-bold">Live</span>
            </div>
            <div className="font-light text-base text-light-black2 font-inter">
              Track Your Car Service Real-Time And get Status Updates
            </div>
          </div>
          {/* 2 */}
          <div className="flex p-20 sm:p-10 sm:w-full md:w-full lg:w-full lg:p-10 flex-col w-1/2  gap-2 border-b-2  sm:border-none md:border-none lg:border-none">
            <div className="">
              <Image src="/Pickup_icon.svg" height={25} width={25} alt="" />
            </div>
            <div className="font-light font-public text-xl">
              Easy <span className="font-bold">Pick-ups</span>
            </div>
            <div className="font-light text-base text-light-black2 font-inter">
              Book your Preferred Slot For Pick-Up Of Your Vehicle
            </div>
          </div>
          {/* 3 */}
          <div className="flex p-20 sm:p-10 sm:w-full md:w-full lg:w-full lg:p-10 flex-col w-1/2  gap-2   sm:border-none md:border-none lg:border-none  border-r-2">
            <div className="">
              <Image src="/Discount.svg" height={25} width={25} alt="" />
            </div>
            <div className="font-light font-public text-xl">
              <span className="font-bold">Discounts</span>
            </div>
            <div className="font-light text-base text-light-black2 font-inter">
              Earn Exciting Rewards On Your Referrals,Share Now!
            </div>
          </div>
          {/* 4 */}
          <div className="flex sm:p-10 sm:w-full md:w-full lg:w-full lg:p-10 sm:border-none w-1/2 p-20 flex-col  gap-2   ">
            <div className="">
              <Image src="/secure.png" height={25} width={25} alt="" />
            </div>
            <div className="font-light font-public text-xl">
              Payment<span className="font-bold">Online</span>
            </div>
            <div className="font-light text-base text-light-black2 font-inter">
              We Offer Flexible Payment Options For Your Convenience
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

// <div className="flex mt-6 sm:flex-col sm:pr-1 justify-around gap-5 sm:gap-10 sm:pl-2.5 pl-5">
//   {/* 1 */}
//   <div className="flex flex-col gap-2 ">
//     <div className="">
//       <Image src="/LiveTrack_icon.svg" height={25} width={25} alt="" />
//     </div>
//     <div className="font-light font-public text-xl">
//       Track <span className="font-bold">Live</span>
//     </div>
//     <div className="font-light text-light-black2 font-inter">
//       Track Your Car Service Real-Time And get Status Updates
//     </div>
//   </div>
//   {/* 2 */}
//   <div className="flex flex-col gap-2">
//     <div>
//       <Image src="/Pickup_icon.svg" height={25} width={25} alt="" />
//     </div>
//     <div className="font-light font-public text-xl">
//       Easy <span className="font-bold">Pick-Ups</span>
//     </div>
//     <div className="font-light text-light-black2 font-inter">
//       Book Your Preferred Slot For Pick-Up Your Vehicle
//     </div>
//   </div>
//   {/* 3 */}
//   <div className="flex flex-col gap-2">
//     <div>
//       <Image src="/secure.png" height={25} width={25} alt="" />
//     </div>
//     <div className="font-light font-public text-xl">
//       Payment <span className="font-bold">Online</span>
//     </div>
//     <div className="font-light font-inter">
//       We Offer Flexible Payment Options For Your Convinience
//     </div>
//   </div>
// </div>
