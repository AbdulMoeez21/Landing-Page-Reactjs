import React from 'react'
import Buttons from './Buttons'

const JoinMillions = () => {
  return (
    <div className="dark:bg-gray-900 text-white flexx flex-col p-16 ">
    <h1 className="text-3xl px-80 text-center py-8">Join millions of creative people with Rao</h1>
      <Buttons type="blah" size="medium" isIcon={true}   >Join The Waitlist</Buttons>
      <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8'/>
    </div>
  )
}

export default JoinMillions