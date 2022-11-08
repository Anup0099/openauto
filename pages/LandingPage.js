import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import HeroSection from './HeroSection'
import Form from './Form'
const LandingPage = () => {
  const [about, setAbout] = useState(false)

  return (
    <div
      className=" sm:w-full sm:flex sm:flex-col text-light-black2 
    
    
    "
    >
      {/* navbar */}
      <div
        className="nav flex justify-between py-8 px-10  sm:px-10 lg:px-20 xxl:px-20 
      3xl:px-36
       4xl:px-40
   
       


      
      "
      >
        <Image src="/oo.png" className="4xl:w-80 " height={200} width={200} alt="" />

        <button className="border border-gray-400 bg-white-smoke  rounded-md sm:hidden">
          <a href="#Form" className="font-public  px-8">
            Contact
          </a>
        </button>
      </div>
      {/*  hero section*/}
      <div
        className="flex justify-around p-10 items-center sm:px-0   sm:flex-col sm:w-full 
      
      md:p-0 md:flex-col md:w-full
      lg:flex-col lg:w-full
      xl:pt-0
      
      "
      >
        <div
          className="flex text-light-black2 flex-col sm:px-10   w-2/5 sm:w-full  font-public
        
        md:w-full md:px-10
        lg:w-full lg:px-10
        xl:pt-20
        
       

        "
        >
          <div className="text-7xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl
          4xl:text-8xl 
          ">
            Delivered to <br />
            <span className="text-7xl font-extrabold sm:text-5xl md:text-6xl xl:text-6xl 4xl:text-8xl">
              Your Door.
            </span>
          </div>
          <div className="font-inter text-base font-light  py-4 pr-8 text-light-black2  sm:p-3  md:p-4  lg:text-base xl:text-base
          
          4xl:text-2xl
          ">
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
            It Has Roots In A Piece Of Classical Latin Literature From 45 Bc,
            Making It Over 2000 Years Old.
          </div>

          {/* apps available on app store */}
          <div className="flex flex-col mt-14 sm:hidden ">
            <div className="flex items-center gap-1 text-light-black2">
              <Image src="/apple.png" height={50} width={15} alt="" />
              <h3>Avalable on app store</h3>
              <Image src="/right-arrows.png" height={50} width={30} alt="" />
            </div>
            <div className="flex items-center gap-1 text-light-black2">
              <Image src="/playstore.png" height={50} width={15} alt="" />
              <h3>Avalable on play store</h3>
              <Image src="/right-arrows.png" height={50} width={30} alt="" />
            </div>
          </div>
        </div>
        {/* vancouver image */}

        <div
          className="h-2/3 relative  sm:pt-5 sm:w-full 
        
        
        "
        >
          <Image
            src="/map.png"
            className="sm:h-full "
            height={400}
            width={700}
            alt=""
          />
          <div
            className="flex justify-center  z-10 absolute -left-64 top-2/3   
             sm:-left-32 sm:w-2/3
             xl:w-1/2  xl:-left-20 xl:mt-20
              
       
        "
          >
            <img src="/rangerover.png" className="" alt="range" />
          </div>
        </div>
        {/* car image */}

        <div className="sm:flex sm:flex-col sm:mt-14 sm:items-center hidden">
          <div className="flex items-center gap-1">
            <Image src="/apple.png" height={50} width={15} alt="" />
            <h3>Avalable on app store</h3>
            <Image src="/right-arrows.png" height={50} width={30} alt="" />
          </div>
          <div className="flex items-center gap-1">
            <Image src="/playstore.png" height={50} width={15} alt="" />
            <h3>Avalable on play store</h3>
            <Image src="/right-arrows.png" height={50} width={30} alt="" />
          </div>
        </div>
      </div>

      {/* social icons */}
      <div
        className="flex justify-end items-center pr-10 gap-6 sm:hidden
      
      md:hidden lg:hidden
      xl:px-10 
      2xl:px-10
      3xl:px-36
      4xl:px-48
      
      "
      >
        <div>
          <Image src="/Facebook_icon.svg" height={20} width={10} alt="" />
        </div>
        <div>
          <Image src="/twitter_icon.svg" height={40} width={20} alt="" />
        </div>
        <div>
          <Image src="/Liknedin_icon.svg" height={40} width={20} alt="" />
        </div>
      </div>
      <div
        class="flex flex-col w-full items-center pt-5 pb-3 cursor-pointer"
        onClick={() => {
          setAbout(!about)
        }}
      >
        <div className="font-inter">
          {!about ? 'Explore More' : 'Explore Less'}
        </div>
        {about && (
          <div>
            <Image
              src="/ArrowBottom_icon.svg"
              width={10}
              height={20}
              className="rotate-180"
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
      {about && <HeroSection />}
      {/* form section */}

      {about && (
        <div className=" " id="Form">
          <Form />
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
          <div className="font-light font-inter">
            Copyright @ 2022 OpenAuto All Rights Reserved
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
