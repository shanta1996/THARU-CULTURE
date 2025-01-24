import React, { useRef } from 'react'
import ornamentData from '../utils/Ornaments.json'
import Ornaments from '../components/Ornaments'
import culture from '../utils/cultures.json'
import Dhakiya from '../components/Dhakiya'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const ThirdPage = () => {
    useGSAP(() => {
        gsap.to('.roundBox:nth-child(odd)', {
            transform:'translateY(-100px)',
            // opacity:0
        })
        gsap.to('.roundBox:nth-child(even)', {
            transform:'translateY(100px)',
            // opacity:0
        })
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
                                <div className=' roundBox'  key={index}>
                                    <div className=' h-[200px] w-[200px] rounded-full overflow-hidden'>
                                        <img src={getData.image} className='h-full w-full object-cover bg-center' alt="" />
                                    </div>
                                    <h4 className='text-xl text-center capitalize mt-2'>{getData.title}</h4>
                                </div>
                                // <Ornaments imgRef={getData.imgRef} key={index} getData={getData} />
                            ))}
                        </div>
                        {/* <div className='ornamentSlide h-screen w-full bg-yellow-200 flex justify-center items-center flex-shrink-0'>
                            <h2 className='text-6xl font-[Ubuntu] font-medium '>Tharu Cultures</h2>
                        </div>
                        <div className='ornamentSlide h-screen w-full bg-green-200 flex-shrink-0 flex items-center  gap-[80px] relative'>
                            {
                                culture.map((image,i)=>(
                                   <Dhakiya imgRef={image.imgRef} key={i} image={image} />
                                ))
                            }
                           
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdPage