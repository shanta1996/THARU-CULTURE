import React, { useRef } from 'react'
import ornamentData from '../utils/Ornaments.json'
import Ornaments from '../components/Ornaments'
import culture from '../utils/cultures.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Foods from '../components/Foods'
import AllImage from '../components/AllImage'
import Culture from '../components/Culture'



const ThirdPage = () => {
    useGSAP(() => {
        // gsap.to('.roundBox:nth-child(odd)', {
        //     transform: 'translateY(-100px)',
        // })
        // gsap.to('.roundBox:nth-child(even)', {
        //     transform: 'translateY(100px)',
        // })
        gsap.to('.ornamentSlide',{
            xPercent:-300,
            scrollTrigger:{
                trigger:'.thirdPage',
                scrub:1,
                start:'top top',
                pin:true
            }
        })
    })
    return (
        <>
            <div className='thirdPage w-full'>
                <div className='h-[300vh] bg-green-300 relative overflow-hidden'>
                    <div className='ornamentDiv sticky top-0 left-0 h-[100vh] w-full overflow-hidden flex '>
                        <div className='ornamentSlide h-screen w-full bg-[#DEAC80] flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-5xl text-center md:text-6xl font-[Ubuntu] font-medium '>Tharu Ornaments</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-[#B5C18E] flex-shrink-0 grid grid-cols-2 md:grid-cols-6 items-center justify-items-center py-10 md:py-[150px] px-0 md:px-10 md:grid-rows-1 grid-rows-3 gap-[50px] relative'>
                            {ornamentData.map((getData, index) => (
                                <div className='roundBox md:nth-[odd]:-translate-y-[100px] nth-[odd]:-translate-y-[0] md:nth-[even]:translate-y-[100px] nth-[even]:translate-y-[0]' key={index}>
                                    <Ornaments getData={getData} />
                                </div>
                                // 
                            ))}
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-[#DEAC80] flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-5xl text-center md:text-6xl font-[Ubuntu] font-medium '>Tharu Cultures</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-[#B5C18E] flex-shrink-0 grid grid-cols-2 md:grid-cols-6 items-center justify-items-center py-10 md:py-[150px] px-0 md:px-10 md:grid-rows-1 grid-rows-3 gap-[50px] relative'>
                            {
                                culture.map((image, i) => (
                                    <div key={i} className='roundBox md:nth-[odd]:-translate-y-[100px] nth-[odd]:-translate-y-[0] md:nth-[even]:translate-y-[100px] nth-[even]:translate-y-[0]'>
                                        <Culture image={image} />
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className='h-screen'>
                        <Foods/>
                    </div>
                    <div className='h-screen'>
                        <AllImage/>
                    </div>
                    
                </div>
               
            </div>
        </>
    )
}

export default ThirdPage