import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
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
        ease:'power1.out',
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
        ease:'power1.out',
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
                <div className='firstPage h-screen  font-["Ubuntu"] font-medium flex items-center justify-center overflow-hidden'>
                    <div className='scaleText scale-[1]  md:tracking-tighter uppercase text-5xl text-center md:text-9xl md:leading-none leading-16'>Scroll to Explore</div>
                </div>
                <div style={{clipPath:'circle(100% at 50% 50%)'}} className='tiltText absolute h-screen w-full top-0 bg-[#DEAC80] flex items-center justify-center'>
                    <TiltedText tilt={tiltedText}/>
                </div>
                </div>
            </div>


        </>
    )
}

export default FirstPage