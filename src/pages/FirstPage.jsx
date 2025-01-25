import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import TiltedText from '../components/TiltedText'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)
const FirstPage = () => {
    const tiltedText = useRef(null)
  useGSAP(()=>{
    gsap.to('.tiltText',{
        clipPath: 'circle(15% at 50% 50%)',
        scrollTrigger:{
            trigger:'.tiltText',
            markers:true,
            scrub:1,
            start:'top top',
            // end:'bottom bottom',
        }
    })
  })
    return (
        <>
            <div className='page1 w-full relative'>
                <div className='firstPage h-screen text-9xl font-["Ubuntu"] font-bold flex items-center justify-center '>
                    <div className='bg-red-300 scale-[1.3] '>Scroll to Explore</div>
                </div>
                <div style={{clipPath:'circle(100% at 50% 50%)'}} className='tiltText absolute h-screen w-full top-0 bg-zinc-100 flex items-center justify-center'>
                    <TiltedText tilt={tiltedText}/>
                </div>

            </div>


        </>
    )
}

export default FirstPage