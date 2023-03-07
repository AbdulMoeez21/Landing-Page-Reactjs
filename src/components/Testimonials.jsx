import React from 'react'

const Testimonials = (props) => {
  return (
    <div class="w-full md:w-1/2 lg:w-1/3 p-3  ">
  
        <div class=" h-full bg-white bg-opacity-60 border rounded shadow-md rounded-4xl">
          <div class="flex flex-col justify-between h-full px-5">
            <div class="mb-5 block mt-5">
              {props.logo}
              <p class="mt-2">If you are thinking of a design partner to help you convert more customers, Flaro is a great choice.</p>
            </div>
            <div class="flex flex-wrap mb-4 -m-2">
                <div class="w-auto p-2">
                  <img src={props.imgg} className="w-10 h-10 rounded-full" alt="" />
                </div>
                <div class="mt-2">
                  <p class="-mb-2">{props.name}</p>
                  <small class="text-gray-500 uppercase ">{props.designation}</small>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials
