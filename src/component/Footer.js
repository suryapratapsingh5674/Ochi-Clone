import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[110vh] text-black flex items-center justify-between px-16 py-20 bg-white'>
        <div className='h-full w-[50%] flex flex-col items-start justify-between'>
            <h1 className='text-[8vw] font-bold tracking-tighter w-[30%] leading-none'>EYE-OPENING</h1>
            <h1 className='text-[2.5vw] font-semibold'>ochi</h1>
        </div>
        <div className='h-full w-[50%] flex flex-col items-start justify-between'>
        <h1 className='text-[7vw] font-bold tracking-tighter w-[30%] leading-none'>PRESENTATIONS</h1>
        <div className='flex w-[40vw] items-center justify-between'>
            <div className='text-lg font-thin flex flex-col items-start justify-between gap-10'>
                <div className='flex flex-col items-start justify-between'>
                    <div>S:</div>
                    <div>
                        {["Instagram", "Behance", "Facebook", "Linkdin"].map((item,index)=>{
                            return <p className='border-b-[1px] border-black'>{item}</p>
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <div>L:</div>
                    <div>
                        {["202-1965 W 4th Ave", "Vancouver, Canada", "30 Chukarina St", "Lviv, Ukraine"].map((item,index)=>{
                            return <p className='border-b-[1px] border-black'>{item}</p>
                        })}
                    </div>
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <div>E:</div>
                    <div>
                        <p className='border-b-[1px] border-black'>hello@ochi.design</p>
                    </div>
                </div>
                <p className='text-[#858483]'>© ochi design 2024. Legal Terms</p>
            </div>
            <div className='text-lg mt-48 font-thin flex flex-col items-start justify-between gap-10'>
                <div className='flex flex-col items-start justify-between'>
                    <div>M:</div>
                    <div>
                        {["Home", "Services", "Our work", "About us", "Insight", "Cintact us"].map((item,index)=>{
                            return <p className='border-b-[1px] border-black'>{item}</p>
                        })}
                    </div>
                </div>
                <p className='text-[#858483]'>Website by Obys</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer