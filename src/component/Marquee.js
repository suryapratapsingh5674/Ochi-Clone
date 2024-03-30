import { motion } from "framer-motion"
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-t-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap mt-16 mb-4'>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 18}} className='text-[20vw] leading-none font-semibold uppercase tracking-tighter'>WE ARE OCHI WE ARE OCHI WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 18}} className='text-[20vw] leading-none font-semibold uppercase tracking-tighter'>WE ARE OCHI WE ARE OCHI WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 18}} className='text-[20vw] leading-none font-semibold uppercase tracking-tighter'>WE ARE OCHI WE ARE OCHI WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee