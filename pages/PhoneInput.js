import React, { useState, useEffect } from 'react'
import data from './data.js'
const PhoneInput = () => {
  const [country, setCountry] = useState(true)
  const [selected, setSelected] = useState(data[0])
  const [mobile, setMobile] = useState("")
  //use fetch in function to get data from api

  return (
    <div className="flex items-center py-3 gap-5 ">
      <div className="flex gap-2">
        <select
         onChange={(e) => {
          const code = e.target.value
          const select = data.find(item => item.code === code)
          setSelected(select)
        }}
        className="w-11 bg-white-smoke outline-none"
        >
        {
          data.map((item, index) => {
            // console.log(item, index)
            return (
              <option className="w-max bg-white-smoke" type="number"  key={index} onClick={() => setSelected(item)} value={item.code}>{
                selected.code === item.code? item.code: item.name
              }</option> 
            )
          })
        }
        </select>
        <input  className="bg-white-smoke outline-none" value={selected.dial_code+mobile} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e)=> {
          
          setMobile(e.target.value.substr(selected.dial_code.length))
        }} />
      </div>
    </div>
  )
}

export default PhoneInput