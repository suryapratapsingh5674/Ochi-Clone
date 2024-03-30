import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full min-h-[100vh] rounded-3xl text-[#212121] bg-[#CDEA68]'>
        <div className='first-text px-14 py-24'>
            <h1 className='text-[4vw] leading-none tracking-tighter w-[80%]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        </div>
        <div className='sec-text border-t-2 px-14 pr-44 py-4 flex items-start justify-between border-zinc-600'>
            <div className='f w-[20%] text-lg'>
                <p>What you can expect:</p>
            </div>
            <div className='s w-[45%] h-[30vh] pl-64 text-lg flex flex-col items-start justify-between'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='t w-[10%] text-lg flex flex-col items-start justify-between h-[20vh] mt-20'>
                <p>S:</p>
                <div className='flex flex-col'>
                    <a src="#">Instagram</a>
                    <a src="#">Behance</a>
                    <a src="#">Facebook</a>
                    <a src="#">Linkedin</a>
                </div>
            </div>
        </div>
        <div className='third border-t-2 border-zinc-600 mt-24 px-14 py-4 flex items-start justify-between'>
            <div>
                <h1 className='text-[3.6vw]'>Our approach:</h1>
                <div className='cursor-pointer button flex items-center justify-between text-xl w-[60%] bg-black px-6 py-4 rounded-full text-white'>READ MORE<div className='bg-white text-white rounded-full p-2 scale-[.3] '><GoArrowUpRight /></div></div>
            </div>
            <div>
                <img className='w-[46vw] rounded-xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"></img>
            </div>
        </div>
    </div>
  )
}

export default About