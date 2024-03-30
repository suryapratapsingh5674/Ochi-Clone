import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setrotate] = useState("0");

  useEffect(()=>{
    window.addEventListener( "mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight  / 2;

      let rotateValue = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setrotate(rotateValue - 180);
    });
  })

  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='w-full h-full relative bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute w-1/3 top-1/2 flex gap-10 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                    <div className='w-[9vw] h-[9vw] rounded-full relative bg-zinc-900'>
                      <p className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-xl'>Play</p>
                      <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                      <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
                      </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100'>
                <div className='w-[9vw] h-[9vw] rounded-full relative bg-zinc-900'>
                <p className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-xl'>Play</p>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                      <div className='w-[1.2vw] h-[1.2vw] rounded-full bg-zinc-100'></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes