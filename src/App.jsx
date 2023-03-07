import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./index.css"
import { Navbar,Hero,Partners,CardsLayout,SectionLayout,TestimonialLayout,Faqs,Subscribe,JoinMillions,Footer} from "./components/Connections"

function App() {


  return (
    <div>
     <div className='container-main'>
      <Navbar />
      <Hero/>
      <Partners/>
      <CardsLayout/>
      <SectionLayout />
      <TestimonialLayout/>
      <Faqs/>  
      </div>
      <div>
      <Subscribe/>
      <JoinMillions/>
      <Footer/>
      </div>
      </div>
  )
}

export default App
