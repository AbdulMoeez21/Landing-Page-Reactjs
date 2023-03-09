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
      
  <div className="flex-col md:flex-row flex items-center justify-between py-4">
      <div className="logo self-center text-5xl md:text-2xl font-semibold whitespace-nowrap dark:text-black"> RAO</div>
      <div className="flexx justify-center md:py-10 py-5 w-full space-x-4 ">
      {navItems.map((item, index) => {
           return (
             <div className='flex items-center  md:ml-4 text-xs    space-x-1  py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-500 md:dark:hover:text-dark dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent' key={index}>
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
     <Buttons type="secondary" className="">Sign in</Buttons> 

     <Buttons type="primary">Start Free</Buttons>     
     </div>
      </div>




     
   

  )
}

export default Navbar
