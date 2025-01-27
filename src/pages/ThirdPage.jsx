import React, { useRef } from 'react'
import ornamentData from '../utils/Ornaments.json'
import Ornaments from '../components/Ornaments'
import culture from '../utils/cultures.json'
import Dhakiya from '../components/Dhakiya'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Foods from '../components/Foods'
import AllImage from '../components/AllImage'


const ThirdPage = () => {
    useGSAP(() => {
        gsap.to('.roundBox:nth-child(odd)', {
            transform: 'translateY(-100px)',
            // opacity:0
        })
        gsap.to('.roundBox:nth-child(even)', {
            transform: 'translateY(100px)',
            // opacity:0
        })
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
                        <div className='ornamentSlide h-screen w-full bg-yellow-200 flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-6xl font-[Ubuntu] font-medium '>Tharu Ornaments</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-[#B5C18E] flex-shrink-0 flex items-center justify-center gap-[80px] relative'>
                            {ornamentData.map((getData, index) => (
                                <div className=' roundBox' key={index}>
                                    <Ornaments getData={getData} />
                                </div>
                                // 
                            ))}
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-yellow-200 flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-6xl font-[Ubuntu] font-medium '>Tharu Cultures</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-[#B5C18E] flex-shrink-0 flex items-center justify-center  gap-[50px] relative'>
                            {
                                culture.map((image, i) => (
                                    <div key={i} className=' roundBox'>
                                        <Dhakiya image={image} />
                                    </div>
                                ))
                            }


                        </div>
                    </div>
                    <div className='h-screen bg-green-600'>
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