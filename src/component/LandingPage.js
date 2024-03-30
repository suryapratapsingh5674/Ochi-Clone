import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion"

function LandingPage() {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-40 px-20'>
            {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index)=>{
                return <div className="masker w-[80vw]">
                    <h1 className="text-9xl font-['Calibri'] font-bold leading-[6.5vw] tracking-tighter">{index ===1 && (<motion.img initial={{width: 0}} animate={{width: "9.3vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className='w-[9.3vw] inline rounded-[5px] mb-5 mr-2' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"></motion.img>)}{item}</h1>
            </div>
            })}
        </div>
        <div className='border-t-2 border-zinc-700 mt-24 flex items-center justify-between py-5 px-14'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
                return <p className='text-md tracking-tight leading-none font-light'>{item}</p>
            })}
            <div className='start flex items-center gap-2'>
                <div className='px-4 py-1 border-[2px] border-zinc-600 rounded-full'>start the project</div>
                <div className='w-8 h-8 flex items-center justify-center rounded-full border-[2px] border-zinc-600'><GoArrowUpRight /></div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage