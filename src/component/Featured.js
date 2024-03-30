import React from 'react'
import { GoDotFill } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion"

function Featured() {
    
  return (
    <div className='w-full min-h-[100vh] bg-black'>
        <h1 className='px-16 pt-24 pb-6 text-[4vw]'>Featured projects</h1>
        <div className='border-t-[1px] border-zinc-700'></div>
        <div className='card-container mt-16 px-16 flex gap-10'>
            <div>
                <h1 className='flex items-center gap-2 text-lg'><GoDotFill /> FYDE</h1>
            <div className="card w-[44vw] h-[80vh] relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] rounded-xl">
                {/* <h1 className='text-[#CDEA68] font-semibold absolute z-[999] text-[8vw] right-0 top-1/2 -translate-y-1/2 translate-x-1/2'>FYDE</h1> */}
            </div>
            <div className='flex items-center gap-5 py-5'>
                <p className='border-[1px] rounded-full py-1 px-2'>AUDIT</p>
                <p className='border-[1px] rounded-full py-1 px-2'>COPYWRITTING</p>
                <p className='border-[1px] rounded-full py-1 px-2'>SALES DECK</p>
                <p className='border-[1px] rounded-full py-1 px-2'>SLIDES DESIGN</p>
            </div>
            </div>
            <div>
            <h1 className='flex items-center gap-2 text-lg'><GoDotFill /> VISE</h1>
            <div className="card w-[44vw] h-[80vh] bg-cover relative bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] rounded-xl">
            {/* <h1 className='text-[#CDEA68] absolute z-[999] text-[8vw] font-semibold left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'>VISE</h1> */}
            </div>
            <div className='flex items-center gap-5 py-5'>
                <p className='border-[1px] rounded-full py-1 px-2'>AGENCY</p>
                <p className='border-[1px] rounded-full py-1 px-2'>COMPANY PRESENTATION</p>
            </div>
            </div>
        </div>
        <div className='card-container mt-16 px-16 flex gap-10'>
            <div>
                <h1 className='flex items-center gap-2 text-lg'><GoDotFill /> TRAWA</h1>
            <div className="card w-[44vw] h-[80vh] relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg')] rounded-xl">
            {/* <h1 className='text-[#CDEA68] font-semibold absolute z-[999] text-[8vw] right-0 top-1/2 -translate-y-1/2 translate-x-1/2'>TRAWA</h1> */}
            </div>
            <div className='flex items-center gap-5 py-5'>
                <p className='border-[1px] rounded-full py-1 px-2'>BRAND IDENTITY</p>
                <p className='border-[1px] rounded-full py-1 px-2'>DESIGN RESEARCH</p>
                <p className='border-[1px] rounded-full py-1 px-2'>INVESTOR DECK</p>
            </div>
            </div>
            <div>
            <h1 className='flex items-center gap-2 text-lg'><GoDotFill /> PREMIUM BLEND</h1>
            <div className="card w-[44vw] relative h-[80vh] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png')] rounded-xl">
            {/* <h1 className='text-[#CDEA68] font-semibold absolute z-[999] text-[6vw] text-semibold left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'>PREMIUM BLEND</h1> */}
            </div>
            <div className='flex items-center gap-5 py-5'>
                <p className='border-[1px] rounded-full py-1 px-2'>BRANDED TAMPLATE</p>
            </div>
            </div>
        </div>
        <div className='w-full h-20vh flex items-center justify-center mt-20'>
        <div className='cursor-pointer button flex items-center justify-between text-lg w-[17%] bg-white px-4 py-2 rounded-full text-black'>VEIW ALL CASE STUDIES<div className='bg-black text-white rounded-full p-2 scale-[.3] '><GoArrowUpRight /></div></div>
        </div>
        <h1 className='px-16 pt-24 pb-6 text-[4vw]'>Clients’ reviews</h1>
        <div className='border-t-[1px] border-zinc-700 flex items-start justify-between px-16 pt-4'>
            <div className='w-[10%] font-thin'>
                <p className='border-b-[1px] border-[#BABABA] text-lg'>Karman Ventures</p>
            </div>
            <div className='w-[30%] pl-20 h-[25vh] flex flex-col items-start justify-between text-lg font-thin'>
                <div>Services:</div>
                <div className=' h-[12vh] flex flex-col items-start justify-between'>
                    <div className='border-[1px] rounded-full border-zinc-400 py-1 px-2'>INVESTOR DECK</div>
                    <div className='border-[1px] rounded-full border-zinc-400 py-1 px-2'>SALES DECK</div>
                </div>
            </div>
            <div className='w-[40%] pr-20 text-lg font-thin h-[60vh] flex flex-col items-start justify-between'>
                <div>William Barnes</div>
                <div>
                    <img className='w-[7vw] rounded-xl mt-16' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"></img>
                </div>
                <div>
                    <p className='leading-sm '>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
                </div>
            </div>
            <div className='text-lg text-[#BABABA]'>READ</div>
        </div>
        <div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4 mt-16'>
            <p className='border-b-[1px] border-[#bababa]'>Workiz Easy</p>
            <p>Tomer Levy</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4'>
            <p className='border-b-[1px] border-[#bababa]'>Premium Blend</p>
            <p>Ellen Kim</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4'>
            <p className='border-b-[1px] border-[#bababa]'>Hypercare Systems</p>
            <p>Brendan Goss</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4'>
            <p className='border-b-[1px] border-[#bababa]'>Officevibe</p>
            <p>Raff Labrie</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4'>
            <p className='border-b-[1px] border-[#bababa]'>Orderlion</p>
            <p>Stefan Strohmer</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        <div className='border-t-[1px] border-b-[1px] flex items-center justify-between px-16 py-4'>
            <p className='border-b-[1px] border-[#bababa]'>Black Book</p>
            <p>Jaci Smith</p>
            <p className='border-b-[1px] border-[#bababa]'>READ</p>
        </div>
        </div>
        <div className='px-14 mb-20 py-24 flex items-start justify-between'>
            <div className='bg-[#004D43] w-[45vw] h-[55vh] rounded-xl flex items-center justify-center relative'>
                <h1 className='text-[#CDEA68] text-[6vw]'>ochi</h1>
                <p className='absolute top-[85%] left-[5%] text-[#CDEA68] border-[1px] border-[#CDEA68] rounded-full py-1 px-2'>©️2019-2022</p>
            </div>
            <div className='bg-[#212121] h-[55vh] w-[21vw] rounded-xl flex items-center justify-center relative'>
                <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
                <p className='absolute top-[85%] left-[10%] border-[1px] rounded-full py-1 px-2'>RATING 5.0 ON CLUTH</p>
            </div>
            <div className='bg-[#212121] h-[55vh] w-[21vw] rounded-xl flex items-center justify-center relative'>
                <img className='w-[6.5vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
                <p className='absolute top-[85%] left-[10%] border-[1px] rounded-full py-1 px-2'>BUSINESS BOOTCAMP ALUMINAI</p>
            </div>
        </div>
    </div>
  )
}

export default Featured