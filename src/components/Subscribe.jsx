import React from 'react'
import Buttons from './Buttons'


const Subscribe = () => {
  return (
    <div className=' footerBan border text-white h-3/5'>
      <div className=" m-24 rounded bg_purple w-4/12 p-8 opacity-75">
        <small className=''>JOIN WITH OUR COMMUNITY</small>
        <h1 className='py-4 pr-44 '>Set your social media growth on autopilot</h1>
       <div className="flexx"> <input type="email" placeholder='YOUR EMAIL ADDRESS' className='border w-72 rounded p-2' />
        <Buttons type="blah" size="medium" >Subscribe</Buttons></div>

      </div>
      
    </div>
  )
}

export default Subscribe
