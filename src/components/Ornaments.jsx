import React from 'react'

const Ornaments = ({getData,imgRef}) => {
    return (
        <>
            <div ref={imgRef}>
               <div className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full overflow-hidden'>
                    <img src={getData.image} className='h-full w-full object-cover bg-center' alt="" />
                </div>
                <h4 className='text-xl text-center capitalize mt-2'>{getData.title}</h4>
            </div> 
        </>
    )
}

export default Ornaments