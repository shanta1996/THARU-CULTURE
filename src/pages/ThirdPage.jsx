import React, { useRef } from 'react'
import ornamentData from '../utils/Ornaments.json'
import Ornaments from '../components/Ornaments'
import culture from '../utils/cultures.json'
import Dhakiya from '../components/Dhakiya'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const ThirdPage = () => {
    const imgRef=useRef(null)
    useGSAP(()=>{
        gsap.to('')
    })
    return (
        <>
            <div className='w-full'>
                <div className='h-[400vh] bg-green-300 relative'>
                    <div className='ornamentDiv h-[100vh] w-full flex bg-red-300'>
                        <div className='ornamentSlide h-screen w-full bg-yellow-200 flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-6xl font-[Ubuntu] font-medium '>Tharu Ornaments</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-yellow-500 flex-shrink-0 flex items-center justify-center gap-[80px] relative'>
                            {ornamentData.map((getData, index) => (
                                <Ornaments imgRef={imgRef} key={index} getData={getData} />
                            ))}
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-yellow-200 flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-6xl font-[Ubuntu] font-medium '>Tharu Cultures</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-green-200 flex-shrink-0 flex items-center  gap-[80px] relative'>
                            {
                                culture.map((image,i)=>(
                                   <Dhakiya imgRef={imgRef} key={i} image={image} />
                                ))
                            }
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdPage