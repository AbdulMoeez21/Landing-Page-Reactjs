import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar,Hero,Partners,PlatformCards,Section,Testimonials,Faqs,Subscribe,JoinMillions,Footer} from "./components/Connections"

function App() {


  return (
    <div className='container'>
      <Navbar />
      <Hero/>
      <Partners/>
      <PlatformCards/>
      <Section />
      <Testimonials/>
      <Faqs/>
      <Subscribe/>
      <JoinMillions/>
      <Footer/>
    </div>
  )
}

export default App
