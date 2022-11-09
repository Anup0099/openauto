import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className="flex w-full h-full text-light-black2 p-5 ">
      <div className="flex bg-off-white w-3/4 justify-center items-center  p-8 relative  ">
        <div className="flex items-center sm:w-max sm:h-10/12   w-max h-max">
          <Image
            src="/ABOUT.png"
            className=""
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="text-5xl font-public px-3 font-light z-10 absolute top-10 sm:top-20 -right-44
        
        4xl:text-6xl
        ">
          About <br /> <span className="text-5xl font-extrabold 4xl:text-6xl">OpenAuto</span>
        </div>
      </div>

      <div className="flex flex-col  mt-36">
        <div className="flex sm:mt-10 p-5 items-start text-base  w-2/4 sm:w-full md:full font-inter ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </div>
        <div className="flex mt-6 sm:flex-col sm:pr-1 justify-around gap-5 sm:gap-10 sm:pl-2.5 pl-5">
          {/* 1 */}
          <div className="flex flex-col gap-2 ">
            <div className="">
              <Image src="/LiveTrack_icon.svg" height={25} width={25} alt="" />
            </div>
            <div className="font-light font-public text-xl">
              Track <span className="font-bold">Live</span>
            </div>
            <div className="font-light text-light-black2 font-inter">Track Your Car Service Real-Time And get Status Updates</div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2">
            <div>
              <Image src="/Pickup_icon.svg" height={25} width={25} alt="" />
            </div>
            <div className='font-light font-public text-xl'>
              Easy <span className="font-bold">Pick-Ups</span>
            </div>
            <div className='font-light text-light-black2 font-inter'>Book Your Preferred Slot For Pick-Up Your Vehicle</div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2">
            <div>
              <Image src="/secure.png" height={25} width={25} alt="" />
            </div>
            <div className='font-light font-public text-xl'>
              Payment <span className="font-bold">Online</span>
            </div>
            <div className="font-light font-inter">We Offer Flexible Payment Options For Your Convinience</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
