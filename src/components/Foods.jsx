import React from 'react'
import foodData from '../utils/foodData.json'

const Foods = () => {
  
    return (
        <div className='bg-[#B5C18E] w-full h-full flex items-center justify-center relative'>
            <p className='text-5xl md:text-9xl tracking-tight md:leading-none leading-16 text-center font-medium font-[ubuntu] py-[60px] bg-[#DEAC80]  absolute bottom-0 w-full uppercase'>tharu Foods</p>
            <div className='grid grid-cols-4 gap-[60px] justify-items-center '>
            {
                foodData.map((foodImg, i) => (
                            <div key={i} className='foods h-[250px] w-[250px] rounded-2xl overflow-hidden'>
                                <img src={foodImg.image} alt="tharufood" className='h-full w-full object-cover' />
                            </div>
                ))
            }
</div>
        </div>
    )
}

export default Foods