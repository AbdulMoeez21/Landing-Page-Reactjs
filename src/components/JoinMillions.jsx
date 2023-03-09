import React from 'react'
import Buttons from './Buttons'

const JoinMillions = () => {
  return (
    <div className="dark:bg-gray-900 text-white flexx flex-col p-16 ">
    <h1 className="text-4xl  text-center py-8 md:py-8  ">Join millions of creative people <br/> with Rao</h1>
      <Buttons type="blah" size="medium" isIcon={true}   >Join The Waitlist</Buttons>
    
    </div>
  )
}

export default JoinMillions
