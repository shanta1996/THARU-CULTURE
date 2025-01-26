import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import TiltedText from '../components/TiltedText'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)
const FirstPage = () => {
    const tiltedText = useRef(null)

    var tl=gsap.timeline({
        
    })
  useGSAP(()=>{
    tl.to('.tiltText',{
        clipPath: 'circle(0% at 50% 50%)',
        // ease:'power1.inOut',
        ease:'power1',
        scrollTrigger:{
            trigger:'.tiltText',
            scrub:1,
            start:'top top'
        }
    })
    gsap.set('.scaleText',{
        scale:3
    })
    tl.to('.scaleText',{
        scale:1,
        scrollTrigger:{
            trigger:'.scaleText',
            scrub:1,
            start:'top top'
        }
    })
  })
    return (
        <>
            <div className='page1 bg-[#edf6f9] w-full h-[200vh] relative'>
                <div className='sticky top-0 left-0'>
                <div className='firstPage h-screen text-9xl font-["Ubuntu"] font-medium flex items-center justify-center overflow-hidden'>
                    <div className='scaleText scale-[1]  tracking-tighter uppercase'>Scroll to Explore</div>
                </div>
                <div style={{clipPath:'circle(100% at 50% 50%)'}} className='tiltText absolute h-screen w-full top-0 bg-[#e78d63] flex items-center justify-center'>
                    <TiltedText tilt={tiltedText}/>
                </div>
                </div>
            </div>


        </>
    )
}

export default FirstPage