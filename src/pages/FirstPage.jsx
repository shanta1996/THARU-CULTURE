import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import TiltedText from '../components/TiltedText'

const FirstPage = () => {
    const [valX, setValX] = useState(0)
    const [valY, setValY] = useState(0)
    const tiltedText = useRef(null)
    const handleMousMove = (e) => {
        setValX((e.clientX - tiltedText.current.getBoundingClientRect().x - tiltedText.current.getBoundingClientRect().width / 2) / 60)
        setValY(-(e.clientY/30))

        // setValY((e.clientY - tiltedText.current.getBoundingClientRect().y - tiltedText.current.getBoundingClientRect().hieght / 2)/50)
        // tiltedText.current.style.transform = `rotateX(${valY}deg) rotateY(${valX}deg)`

    }
    
    useGSAP(()=>{
        gsap.to(tiltedText.current,{
            transform:`rotateX(${valY}deg) rotateY(${valX}deg)`,
            duration:5,
            ease: "power1.out",
        })
        // gsap.to('.firstPage',{
        //     clip:'0%'
        // })
    },[valX,valY])
    return (
        <>
            <div className=' w-full relative'>
                <div className='h-screen text-9xl font-["Ubuntu"] font-bold flex items-center justify-center'>Scroll to Explore</div>
                <div onMouseMove={(e) => {
                    handleMousMove(e)
                }} style={{clipPath:'circle(100% at 50% 50%)'}} className='firstPage absolute h-screen w-full top-0 bg-zinc-100 flex items-center justify-center'>
                    <TiltedText tilt={tiltedText} />
                </div>

            </div>


        </>
    )
}

export default FirstPage