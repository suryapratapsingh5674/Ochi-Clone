import React, { useEffect } from 'react'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Featured from './component/Featured'
import Start from './component/Start'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  useEffect(()=>{
    document.title= 'OCHI - Presentation design agency';
  }, [])
  return (
    <div className="w-full min-h-screen font-['Calibri'] text-white bg-zinc-900">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Start/>
      <Footer/>
    </div>
  )
}

export default App