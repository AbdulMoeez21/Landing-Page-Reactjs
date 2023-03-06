import React from 'react'
import Buttons from './Buttons';
const Navbar = () => {
  const navItems = [
    {
        link: "product",
        isDropDown: true,
    },
    {
        link: "packages",
        isDropDown: true,
    },
    {
        link: "blog",
        isDropDown: false,
    },
    {
        link: "testimonials",
        isDropDown: false,
    },
];
  return (
   
     <div className="flex items-center justify-between py-4">
     <div className="logo"> ArShakir</div>
     <div className="flex items-center justify-center w-full space-x-4 ">
     {navItems.map((item, index) => {
          return (
            <div className='flex items-center text-sm space-x-1' key={index}>
            <span >{item.link}</span>
            {item.isDropDown && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            )}
            
            </div>
          )
        
        })
      }
     </div>
    <div className="flex items-center justify-end space-x-5">
    <Buttons type="secondary">Sign in</Buttons> 

    <Buttons type="primary">Start Free</Buttons>     
    </div>
     </div>
   
  )
}

export default Navbar
