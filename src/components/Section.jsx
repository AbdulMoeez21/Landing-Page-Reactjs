import React from 'react'
import Buttons from "./Buttons"

const Section = (props) => {
  return (
    <div className='flexx flex-col md:flex-row justify-between px-4 gap-x-12'>
      <div className="flex flex-col space-y-4 md:pl-20 pl-0 ">
<h1 className='text_heading text-4xl font-semibold'>{props.title} </h1>
<p className='md:pr-8 pr-4  text-justify md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia obcaecati voluptatum voluptate accusamus saepe iste officiis ea facere placeat?</p>
      <Buttons type="primary" >{props.buttonText}</Buttons>
      
      </div>
      <div className={`${props.layoutStyle==="left"?
      "" : "order-first"} `}>
      <img src={props.img} alt="" />

      </div>

    </div>
  )
}

export default Section
