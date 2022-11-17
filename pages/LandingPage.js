import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeroSection from './HeroSection'
import Form from './Form'
const LandingPage = () => {
  const [about, setAbout] = useState(false)

  return (
    <div className=" sm:w-full sm:flex sm:flex-col">
      {/* navbar */}
      <div className="nav flex justify-between sm:px-10 md:px-10 lg:px-10  py-8 px-10 xlm:px-20 xxlm:px-20 3xlm:px-28  ">
        <Image
          src="/o.svg"
          className="4xl:w-80 "
          height={200}
          width={200}
          alt=""
        />
        <button className="border border-light-border text-off-white3 bg-white-smoke rounded-md sm:hidden">
          <a href="#Form" className="font-public text-off-white3 px-8">
            Contact
          </a>
        </button>
      </div>
      {/*  hero section*/}
      <div
        className="flex justify-between items-center p-16 lg:px-0 sm:px-0 sm:flex-col sm:w-full 
      md:p-0 md:flex-col md:w-full
      lg:flex-col lg:w-full xxl:grow 3xl:grow 4xl:gap-0
      3xlm:px-28
      xl:pt-0">
        <div
          className="flex  flex-col gap-5 sm:px-10 w-2/5 sm:w-full font-public
        md:w-full md:px-10
        lg:w-full lg:px-10
        xl:pt-20
        xxl:pt-28
        3xlm:pt-36
         "
        >
          <div>
            <div
              className="text-7xl font-light font-public text-light-border sm:text-5xl md:text-4xl lg:text-6xl xl:text-6xl
              4xl:text-8xl "
            >
              Delivered to <br />
              <span className="text-7xl font-public font-extrabold sm:text-5xl md:text-6xl xl:text-6xl 4xl:text-8xl">
                Your Door.
              </span>
            </div>
            <div
              className=" font-inter text-base font-light  py-4 pr-8 text-light-border  sm:p-3  md:p-4  lg:text-base xl:text-base
              4xl:text-base "
            >
              Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
              It Has Roots In A Piece Of Classical Latin Literature From 45 Bc,
              Making It Over 2000 Years Old.
            </div>
          </div>

          {/* apps available on app cstore */}
          <div className="flex flex-col  mt-14 xl:mt-0 font-semibold sm:hidden lg:hidden gap-5 md:hidden ">
            <div className="flex font-inter  items-center gap-2 text-light-border">
              <Image src="/Apple_Icon.svg" height={50} width={15} alt="" />
              <h3>Available on App store</h3>
              <Image src="/ArrowRight_icon.svg" height={50} width={30} alt="" />
            </div>
            <div className="flex font-inter items-center gap-2 text-light-border">
              <Image src="/GooglePlay_icon.svg" height={50} width={15} alt="" />
              <h3>Available on Play store</h3>
              <Image src="/ArrowRight_icon.svg" height={50} width={30} alt="" />
            </div>
          </div>
        </div>
        {/* vancouver image */}
        <div className="flex w-max sm:w-full lg:w-full lg:justify-center xl:w-[600px] relative sm:pt-5  ">
          <Image
            src="/Hero_image.png"
            className=""
            height={400}
            width={744}
            alt=""
          />
          <div className="absolute -bottom-5 xlm:w-3/5 xlm:-left-28 sm:w-[300px] sm:h-[120px] md:w-[350px] md:h-[140px] lg:w-[400px] lg:h-[160px] lg:-left-20 sm:-left-32 md:-left-10 z-10 xxlm:-left-44  ">
            <Image
              src="/rangerover.png"
              height={240}
              width = {564}
              alt="range" 
            />
          </div>
        </div>
        {/* car image */}
        <div className="flex flex-col mt-14 lg:text-base text-light-border font-semibold items-center xl:hidden xxl:hidden 3xl:hidden 4xl:hidden">
          <div className="flex items-center gap-3 md:px-10">
            <Image src="/Apple_icon.svg" height={50} width={15} alt="" />
            <h3>Available on App Store</h3>
            <Image src="/ArrowRight_icon.svg" height={50} width={30} alt="" />
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Image src="/GooglePlay_icon.svg" height={50} width={15} alt="" />
            <div className="">Available on Play Store</div>
            <Image src="/ArrowRight_icon.svg" height={50} width={30} alt="" />
          </div>
        </div>
      </div>

      {/* social icons */}
      <div
        className="flex justify-end items-center px-12 gap-6 sm:hidden 
        md:hidden lg:hidden
        xl:px-14
        xxl:px-16
        3xl:px-36
        4xl:px-48">
        <div className="cursor-pointer">
          <a href="https://www.facebook.com/TeamOpenAuto">
            <Image src="/Facebook_icon.svg" height={20} width={10} alt="" />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://twitter.com/TeamOpenAuto">
            <Image src="/twitter_icon.svg" height={40} width={20} alt="" />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://www.linkedin.com/company/openauto/">
            <Image src="/Liknedin_icon.svg" height={40} width={20} alt="" />
          </a>
        </div>
      </div>
      {/* form section */}

      <div className=" " id="Form">
        <Form />
      </div>

      <div
        class="flex flex-col w-full items-center pt-5 pb-3 cursor-pointer "
        onClick={() => {
          setAbout(!about)
        }}
      >
        {!about && (
          <a href="#hero">
            <div className="font-inter text-base font-semibold text-light-border">About OpenAuto</div>
          </a>
        )}
        {about && (
          <div>
            <Image
              src="/ArrowBottom_icon.svg"
              width={10}
              height={20}
              className="rotate-180 hidden "
              alt=""
            />
          </div>
        )}
        {!about && (
          <div className="">
            <Image src="/ArrowBottom_icon.svg" width={10} height={20} alt="" />
          </div>
        )}
      </div>
      {/* middle section */}
      {about && (
        <div id="hero">
          <HeroSection />
        </div>
      )}

      {/* footer */}
      {about && (
        <div
          className="flex justify-between items-center px-10 py-8 bg-light-gray sm:flex-col sm:p-5 sm:gap-3 
        
        lg:px-20
        
        xxl:px-20 
        3xl:px-40 4xl:px-40
        
        "
        >
          <div>
            <Image src="/OpenAuto_Logo.png" height={100} width={100} alt="" />
          </div>
          <div className="font-light font-public text-base text-light-black2">
            Copyright @ 2022 OpenAuto All Rights Reserved
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
