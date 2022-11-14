import React, { useState } from 'react'

import validator from 'validator'
import 'react-phone-number-input/style.css'
import PhoneInput from './PhoneInput'
const Form = () => {
  const [name, setName] = useState('')
  const [selected, setSelected] = useState(false)
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [value, setValue] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    // console.log(reg.test(phone))
    if (phone.match(reg)) {
      setErrorEmail(false)
    } else {
      setErrorEmail(true)
    }
  }

  //name validator
  const handleNameChange = (e) => {
    setName(e.target.value)
    const name = e.target.value
    if (name.length > 1 || name.length === 0) {
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div
      className="flex px-40 py-20 sm:gap-10 sm:px-5 sm:flex-col gap-40 
      md:px-28  md:justify-center md:flex-col md:gap-16
      lg:px-40 lg:flex-col
    
    "
    >
      <div
        className="flex flex-col gap-y-2 w-1/2 sm:w-full
      
      md:w-full
      "
      >
        <div
          className="text-5xl font-public text-light-black2 font-light
        
        4xl:text-6xl
        "
        >
          We're All
          <br />
          <span className="text-5xl font-public font-extrabold 4xl:text-6xl">
            Ears!
          </span>
        </div>
        <div className="text-base font-inter text-light-black3">
          If you Trouble Managing Your Order, Or Want To Talk To One Of Your
          Expert Technicians We Are Here For You!
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit} className="w-full ">
        <div className=" w-3/4 flex flex-col gap-10 sm:w-full  ">
          <div className="flex flex-col gap-2">
            <div
              onClick={() => {
                setSelected(true)
              }}
              className={
                error
                  ? 'border-2 border-red-500 p-2 rounded-md w-full relative'
                  : selected
                  ? 'border-2 border-blue-500 p-2 rounded-md w-full relative'
                  : 'border-2 border-light-black2 p-2 rounded-md w-full relative'
              }
            >
              <div
                className={
                  error
                    ? 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1   text-red-500'
                    : 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1   text-light-black'
                }
              >
                Name
              </div>

              <input
                type="text"
                className="focus:outline-none py-2 bg-white-smoke w-full"
                onChange={handleNameChange}
                placeholder="Enter Your Full Name"
              />
            </div>
            {error && <span className="text-red-500 font-inter">Too Short!</span>}
          </div>
          <div
            className={
              error
                ? 'border-2 border-red-500 p-2 rounded-md w-full relative'
                : 'border border-light-border p-2 rounded-md w-full relative'
            }
          >
            <div className={error? "absolute -top-4 bg-white-smoke ml-4 p-1 text-red-500":"absolute -top-4 bg-white-smoke ml-4 p-1 text-light-black"}>
              Phone
            </div>
            <PhoneInput />
          </div>
          {errorEmail && (
            <span className="text-red-500 font-inter">
              Required
            </span>
          )}
          <div
            className={
              error
                ? 'border-2 border-red-500 rounded-md w-full relative p-3 h-28'
                : 'border border-light-border rounded-md w-full relative p-3 h-28'
            }
          >
            <div
              className={
                error
                  ? 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1 text-red-500'
                  : 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1 text-light-black'
              }
            >
              Message
            </div>

            <textarea
              name=""
              placeholder="Max 200 Character"
              className="resize-none focus:outline-none h-full  w-full py-2 bg-white-smoke"
              rows="5"
            ></textarea>
          </div>
          <div
            className="flex font-inter border border-light-border rounded-md p-1 w-max sm:w-full sm:justify-center
          
          
          "
          >
            <button
              type="submit"
              className="w-full h-full px-20 py-2 text-light-black"
              font-inter
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
