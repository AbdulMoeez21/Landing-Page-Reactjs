import React from 'react'
import Buttons from "./Buttons"

const Section = (props) => {
  return (
    <div className='flexx justify-between px-4 gap-x-12'>
      <div className="flex flex-col space-y-4">
<h1 className='text_heading text-4xl font-semibold'>{props.title} </h1>
<p className='pr-32'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia obcaecati voluptatum voluptate accusamus saepe iste officiis ea facere placeat?</p>
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
