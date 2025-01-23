import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const FirstPage = () => {
    const [valX, setValX] = useState(0)
    const [valY, setValY] = useState(0)
    const tiltedText=useRef(null)
    const handleMousMove=(e)=>{
        setValX((e.clientX-tiltedText.current.getBoundingClientRect().x-tiltedText.current.getBoundingClientRect().width/2)/50)
        setValY((e.clientY-tiltedText.current.getBoundingClientRect().y-tiltedText.current.getBoundingClientRect().hieght/2)/50)

        console.log(tiltedText.current.getBoundingClientRect().width);
        // tiltedText.current.style.transform=`rotateX(${e.clientY}deg) rotateY(${e.clientX}deg)`
        
    }
    useGSAP(()=>{
        gsap.to(tiltedText.current,{
            transform:`rotateX(${valY}deg) rotateY(${valX}deg)`,
            duration:2,
        })
    },[valX,valY])
    return (
        <>
            <div className=' w-full relative'>
                <div className='h-screen text-9xl font-["Ubuntu"] font-bold flex items-center justify-center  hidden'>Scroll to Explore</div>
                <div onMouseMove={(e)=>handleMousMove(e)} style={{clipPath: 'circle(100% at 50% 50%)'}} className='firstPage relative h-screen w-full  top-0 bg-zinc-100 flex items-center justify-center'>
                    <div ref={tiltedText} className=' bg-green-300 font-["Ubuntu"] font-bold relative'>
                        <h1 className='text-9xl tracking-tight '>THARU CULTURE</h1>
                        <div className='h-[60px] w-[60px] overflow-hidden rounded-full absolute top-1/2 -translate-y-[95px] left-0 -translate-x-1/2 '>
                        <img src="/sirbindi.png" className='object-cover' alt="" />
                        </div>
                        <div className='h-[50px] w-[50px] absolute right-0 translate-x-[40px] bottom-0 translate-y-[30px] overflow-hidden rounded-full'>
                            <img src="/dhakiya2.PNG" className='object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                </div>

            </div>

         
        </>
    )
}

export default FirstPage