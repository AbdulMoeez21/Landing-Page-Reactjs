import React from 'react'

const PlatformCards = (props) => {
  return (
    <div className=''>
      
<div className='w-60 '>
<span className=''>{props.icon} </span>
<h3 className='pt-2  font-semibold'>{props.title}</h3>
<small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, vero.</small>
</div>
    </div>
  )
}

export default PlatformCards
