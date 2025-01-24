import React from 'react'

const Dhakiya = ({image,imgRef}) => {
    return (
        <>
            <div ref={imgRef} className=' h-[250px] w-[250px] rounded-3xl overflow-hidden'>
                <img src={image.image} className='h-full w-full object-cover bg-center' alt="" />
            </div>
        </>
    )
}

export default Dhakiya