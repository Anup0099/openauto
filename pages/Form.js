import React, { useState } from 'react'

import validator from 'validator'
import 'react-phone-number-input/style.css'
import PhoneInputs from './PhoneInput'
import {
  ChakraProps,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { useField } from 'formik'
import PhoneInput from 'react-phone-number-input'
const Form = () => {
  const [name, setName] = useState('')
  const [selected, setSelected] = useState(false)
  const [msgError, setMsgError] = useState(false)
  const [msgSelected, setMsgSelected] = useState(false)

  const [error, setError] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)
  const [value, setValue] = useState()
  const [input,setInput] = useState('')
  const isError = input === ''

  const handleSubmit = (e) => {
    e.preventDefault()
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
      xl:px-16 "
    >
      <div
        className="flex flex-col gap-y-2 w-1/2 sm:w-full
      
      md:w-full
      "
      >
        <div
          className="text-6xl font-public text-light-border font-light
        
        4xl:text-6xl
        "
        >
          We're All
          <br />
          <span className="text-6xl font-public font-extrabold 4xl:text-6xl">
            Ears!
          </span>
        </div>
        <div className="text-base font-inter text-light-black2">
          If you Trouble Managing Your Order, Or Want To Talk To One Of Your
          Expert Technicians We Are Here For You!
        </div>
      </div>
      <FormControl isInvalid={isError}  onSubmit={handleSubmit} className="w-full ">
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
                  : 'border   border-light-border p-2 rounded-md w-full relative'
              }
            >
              <div
                className={
                  error
                    ? 'font-inter text-2xs font-normal absolute -top-4 bg-white-smoke ml-4 p-1   text-red-500'
                    : 'font-inter text-2xs font-normal absolute -top-4 bg-white-smoke ml-4 p-1   text-light-black'
                }
              >
                Name
              </div>

              <input
                type="name"
                className="focus:outline-none py-2 bg-white-smoke w-full"
                onChange={handleNameChange}
                placeholder="Enter Your Full Name"
              />
            </div>
            {error && (
              <span className="text-red-500 font-inter">Too Short!</span>
            )}
          </div>
          <div className="flex flex-col gap-3 bg-white-smoke border-light-border">
            <div
              className={
                error
                  ? 'border-2 border-red-500 p-2  rounded-md w-full relative'
                  : 'border border-light-border  p-2 rounded-md w-full relative'
              }
            >
              <div
                className={
                  error
                    ? 'absolute -top-4 text-2xs  font-normal bg-white-smoke ml-4 p-1 text-red-500'
                    : 'absolute -top-4 text-2xs font-normal bg-white-smoke ml-4 p-1 text-light-border'
                }
              >
                Phone
              </div>
              <PhoneInputs state={errorPhone} setState={setErrorPhone} />
            </div>
            {errorPhone && (
              <span className="text-red-500 font-inter">Invalid</span>
            )}
          </div>
          <div
            className="flex flex-col gap-3"
            onClick={() => {
              setMsgSelected(true)
            }}
          >
            <div
              className={
                msgError
                  ? 'border-2 border-red-500 text-2xs font-normal p-2 rounded-md w-full relative'
                  : error
                  ? 'border-2 border-red-500 p-2  text-2xs font-normal rounded-md w-full relative'
                  : msgSelected
                  ? 'border-2 border-blue-500 text-2xs font-normal p-2 rounded-md w-full relative'
                  : 'border border-light-border p-2 text-2xs font-normal rounded-md w-full relative'
              }
            >
              <div
                className={
                  msgError
                    ? 'font-inter absolute -top-4 text-2xs font-normal bg-white-smoke ml-4 p-1 text-red-500 border-red-500 '
                    : 'font-inter absolute -top-4 text-2xs font-normal bg-white-smoke ml-4 p-1 border-light-border text-light-black'
                }
              >
                Message
              </div>

              <textarea
                name=""
                placeholder="Max 200 Character"
                className="resize-none focus:outline-none h-full  w-full py-2 bg-white-smoke"
                rows="5"
                onChange={(e) => {
                  if (
                    e.target.value.length <= 1 ||
                    e.target.value.length > 200
                  ) {
                    setMsgError(true)
                  } else {
                    setMsgError(false)
                  }
                }}
              ></textarea>
            </div>
            {msgError && <span className=" text-red-500">Invalid</span>}
          </div>
          <div
            className="flex font-inter border border-light-border rounded-md p-1 w-max sm:w-full sm:justify-center
          
          
          "
          >
            <button
              type="submit"
              className="w-full h-full px-20 py-2 font-public text-[15px] font-light  text-light-black"
              font-inter
            >
              Submit
            </button>
          </div>
        </div>
      </FormControl>
     
    </div>
  )
}

export default Form

      // <FormControl isInvalid={isError}  onSubmit={handleSubmit} className="w-full ">
      //   <div className=" w-3/4 flex flex-col gap-10 sm:w-full  ">
      //     <div className="flex flex-col gap-2">
      //       <div
      //         onClick={() => {
      //           setSelected(true)
      //         }}
      //         className={
      //           error
      //             ? 'border-2 border-red-500 p-2 rounded-md w-full relative'
      //             : selected
      //             ? 'border-2 border-blue-500 p-2 rounded-md w-full relative'
      //             : 'border   border-light-border p-2 rounded-md w-full relative'
      //         }
      //       >
      //         <div
      //           className={
      //             error
      //               ? 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1   text-red-500'
      //               : 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1   text-light-black'
      //           }
      //         >
      //           Name
      //         </div>

      //         <input
      //           type="name"
      //           className="focus:outline-none py-2 bg-white-smoke w-full"
      //           onChange={handleNameChange}
      //           placeholder="Enter Your Full Name"
      //         />
      //       </div>
      //       {error && (
      //         <span className="text-red-500 font-inter">Too Short!</span>
      //       )}
      //     </div>
      //     <div className="flex flex-col gap-3 bg-white-smoke border-light-border">
      //       <div
      //         className={
      //           error
      //             ? 'border-2 border-red-500 p-2  rounded-md w-full relative'
      //             : 'border border-light-border  p-2 rounded-md w-full relative'
      //         }
      //       >
      //         <div
      //           className={
      //             error
      //               ? 'absolute -top-4 bg-white-smoke ml-4 p-1 text-red-500'
      //               : 'absolute -top-4 bg-white-smoke ml-4 p-1 text-light-black'
      //           }
      //         >
      //           Phone
      //         </div>
      //         <PhoneInputs state={errorPhone} setState={setErrorPhone} />
      //       </div>
      //       {errorPhone && (
      //         <span className="text-red-500 font-inter">Invalid</span>
      //       )}
      //     </div>
      //     <div
      //       className="flex flex-col gap-3"
      //       onClick={() => {
      //         setMsgSelected(true)
      //       }}
      //     >
      //       <div
      //         className={
      //           msgError
      //             ? 'border-2 border-red-500  p-2 rounded-md w-full relative'
      //             : error
      //             ? 'border-2 border-red-500 p-2 rounded-md w-full relative'
      //             : msgSelected
      //             ? 'border-2 border-blue-500 p-2 rounded-md w-full relative'
      //             : 'border border-light-border p-2 rounded-md w-full relative'
      //         }
      //       >
      //         <div
      //           className={
      //             msgError
      //               ? 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1 text-red-500 border-red-500 '
      //               : 'font-inter absolute -top-4 bg-white-smoke ml-4 p-1 border-light-border text-light-black'
      //           }
      //         >
      //           Message
      //         </div>

      //         <textarea
      //           name=""
      //           placeholder="Max 200 Character"
      //           className="resize-none focus:outline-none h-full  w-full py-2 bg-white-smoke"
      //           rows="5"
      //           onChange={(e) => {
      //             if (
      //               e.target.value.length <= 1 ||
      //               e.target.value.length > 200
      //             ) {
      //               setMsgError(true)
      //             } else {
      //               setMsgError(false)
      //             }
      //           }}
      //         ></textarea>
      //       </div>
      //       {msgError && <span className=" text-red-500">Invalid</span>}
      //     </div>
      //     <div
      //       className="flex font-inter border border-light-border rounded-md p-1 w-max sm:w-full sm:justify-center
          
          
      //     "
      //     >
      //       <button
      //         type="submit"
      //         className="w-full h-full px-20 py-2 text-light-black"
      //         font-inter
      //       >
      //         Submit
      //       </button>
      //     </div>
      //   </div>
      // </FormControl>