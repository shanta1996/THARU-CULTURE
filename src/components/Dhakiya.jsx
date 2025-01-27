import React from 'react'

const Dhakiya = ({image}) => {
    return (
        <>
            <div className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full overflow-hidden'>
                <img src={image.image} className='h-full w-full object-cover bg-center' alt="" />
            </div>
        </>
    )
}

export default Dhakiya