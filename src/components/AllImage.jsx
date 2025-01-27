import React from 'react'
import allPicture from '../utils/allPictureData.json'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const AllImage = () => {
    useGSAP(() => {
        gsap.to('.imgdiv', {
            transform: 'translateX(-100%)',
            repeat: -1,
            duration: 35,
            ease:'none'
        })
    })
    return (
        <>
            <div className='bg-zinc-900 w-full h-full flex items-center '>
                <div className='imgdiv h-[50%] my-auto whitespace-nowrap md:flex-none flex flex-wrap items-center justify-center'>
                        {
                            allPicture.map((image, i) => (
                                <div key={i} className=' h-[300px] w-[300px] rounded-2xl overflow-hidden inline-block mx-5'>
                                    <img src={image.img} alt="" className='h-full w-full object-cover' />
                                </div>
                            ))
                        }
                </div>
            </div>
        </>
    )
}

export default AllImage