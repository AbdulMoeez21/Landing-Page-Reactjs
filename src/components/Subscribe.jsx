import React from 'react'
import Buttons from './Buttons'


const Subscribe = () => {
  return (
    <div className=' footerBan  flex justify-center md: text-white h-3/5'>
      <div className=" m-24 rounded bg_purple md:-ml-96 w-4/5 pt-10 pb-10 pl-10 pr-12 opacity-75 md:w-4/12 md:p-8">
        <small className='font-semibold md:font-normal'>JOIN WITH OUR COMMUNITY</small>
        <h1 className='py-4 pr-2 md:pr-44 md:text-base text-xs'>Set your social media growth on autopilot</h1>
       <div className="flexx"> <input type="email" placeholder='YOUR EMAIL ADDRESS' className='border  md:w-72 w-32 -ml-4 md:ml-0 rounded p-3 md:p-2 md:text-base text-xs' />
        <Buttons type="blah" size="medium" className=" " ><span className='text-xs'> Subscribe</span></Buttons></div>

      </div>
      
    </div>
  )
}

export default Subscribe
