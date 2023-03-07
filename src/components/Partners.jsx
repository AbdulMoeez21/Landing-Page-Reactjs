import React,{useState} from 'react'
import {partnersList} from "../Constants"
const Partners = () => {
  const [list,setList]=useState(partnersList)
  return (
    <div className='py-16 space-y-4 flexx flex-col justify-center'>
    <h1 className='text-2xl py-4'>Trusted by over 100+ Starups and freelance bussiness</h1>
      <div className='flexx justify-center space-x-9'>
      {
        list.map((item,index)=>{
          return <div className='' key={index}>
          <img src={item.img} alt="" />
          </div>
        })
      }

      </div>
    </div>
  )
}

export default Partners
