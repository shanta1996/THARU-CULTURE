import React from 'react'
import foodData from '../utils/foodData.json'

const Foods = () => {
  
    return (
        <div className=' bg-[#B5C18E] w-full h-full flex items-center justify-center relative'>
            <p className='text-5xl md:text-9xl tracking-tight md:leading-none leading-16 text-center font-medium font-[ubuntu] mt-11 md:mt-auto py-7 md:py-[60px] 2xl:py-[100px]  bg-transparent md:bg-[#DEAC80]  absolute md:bottom-0 bottom-auto md:top-auto top-0 w-full uppercase '>tharu Foods</p>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-[10px] md:gap-[30px] 2xl:gap-[60px] justify-items-center align-top md:px-2 md:mt-0 mt-[150px]  2xl:px-10 px-5'>
            {
                foodData.map((foodImg, i) => (
                            <div key={i} className='foods h-[150px] w-[150px] md:h-[200px] md:w-[200px] 2xl:h-[300px] 2xl:w-[300px] rounded-2xl overflow-hidden'>
                                <img src={foodImg.image} alt="tharufood" className='h-full w-full object-cover' />
                            </div>
                ))
            }
</div>
        </div>
    )
}

export default Foods