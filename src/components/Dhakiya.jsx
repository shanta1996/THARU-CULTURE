import React from 'react'

const Dhakiya = ({image}) => {
    return (
        <>
            <div className='h-[200px] w-[200px] rounded-full overflow-hidden'>
                <img src={image.image} className='h-full w-full object-cover bg-center' alt="" />
            </div>
        </>
    )
}

export default Dhakiya