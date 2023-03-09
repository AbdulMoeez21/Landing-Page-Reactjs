import React from 'react'
import HeroImg from "../assets/SectionImages/Hero.png"
import profileIcon from "../assets/Logos/profileIconsList.png"
import Buttons from "./Buttons"
// import "../index.css"
const Hero = () => {
  return (
    <div className=' flexx flex-col md:flex-row justify-between py-5'>
      <div className="left flex flex-col space-y-4">
      <h1 className="text_heading md:text-6xl text-4xl">
                    Increase your followers on social media
                </h1>
                <p className="text-md text_color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, quasi dicta dolorum facilis praesentium ea pariatur quisquam eaque ipsam?</p>
     <Buttons type="primary"
     size="medium"
     isIcon={true}>Get Started</Buttons>
     <div className='w-48'>
      <img src={profileIcon} alt="" />
     </div>
     <p className='text-md text_color pr-32'>Lorem ipsum dolor sit amet adipisicing elit. Dicta, non!</p>
      </div>
      <div className="right ">
        <img src={HeroImg} alt="" />
      </div>
<hr />
    </div>
  )
}

export default Hero
