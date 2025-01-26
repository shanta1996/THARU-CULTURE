import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)
const HistoryCard = ({getData}) => {
    var tl=gsap.timeline()
    useGSAP(()=>{
        // gsap.set('.text',{
        //     opacity:0.1
        // })
        tl.to('.textHeading',{
            opacity:1,
            ease:'power1',
            scrollTrigger:{
                trigger:'.textHeading',
                // markers:true,
                start:'top 50%',
                end:'top 60%',
                scrub:1,
            }
        })
        tl.from('.textPara',{
            x:-100,
            ease:'power4',
            stagger:0.03,
            scrollTrigger:{
                trigger:'.card',
                markers:true,
                start:'top 60%',
                end:'bottom bottom',
                scrub:0.01,
            }
        })
    })
    const{title,description}=getData
    return (
        <>
            <div className='card w-[90%] p-3 border rounded-2xl overflow-hidden duration-500 ease-linear m-5'>
                <h3 className='text textHeading text-2xl font-semibold my-2'>{title}</h3>
                {/* {title.split('').map((heading,i)=>(
                    <span className='text-2xl font-semibold inline-block' key={i}>{heading}</span>
                ))} */}
                {/* <p className='text-md md:text-lg 2xl:text-xl mt-5 '>{description}</p> */}
                {description.split("").map((description,i)=>(
                    <span className='text textPara text-md md:text-lg 2xl:text-xl mt-5 ' key={i}>{description}</span>
                ))}
            </div>
        </>
    )
}

export default HistoryCard