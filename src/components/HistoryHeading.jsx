import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'

gsap.registerPlugin(ScrollTrigger)
const HistoryHeading = () => {
    const [textPara, setTextPara] = useState('The Tharu people of Nepal have a long history marked by resilience and adaptability. From their ancient roots in the Terai region to their struggle for recognition in modern Nepal, the Tharu community has played an important role in the cultural and social fabric of the country. Despite facing challenges like land displacement, cultural marginalization, and political exclusion, the Tharus continue to assert their identity, rights, and cultural heritage in the modern political landscape of Nepal.')

    const letters=textPara.split('')
    console.log(letters);
    useGSAP(()=>{
        gsap.set('.para span',{
            opacity:0.1
        })
        gsap.to('.para span',{
            opacity:1,
            stagger:0.01,
            ease:'power2',
            scrollTrigger:{
                trigger:'.mainDiv',
                // markers:true,
                start:'top 50%',
                scrub:1
            }
        })
    })
    
    return (
        <>
            <div className='static md:sticky  mainDiv  top-0 left-0 md:w-[45%] w-full p-0 md:p-5'>
                <h1 className='capitalize text-2xl md:text-4xl 2xl:text-5xl'>history of tharu in nepal</h1>
                <p className='para text-md md:text-lg 2xl:text-xl mt-5'>{letters.map((text,i)=>(
                    <span key={i}>{text}</span>
                ))}</p>
            </div>
        </>
    )
}

export default HistoryHeading