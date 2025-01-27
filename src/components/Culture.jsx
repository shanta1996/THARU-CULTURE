import React from 'react'

const Culture = ({image}) => {
    return (
        <>
            <div className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] 2xl:h-[250px] 2xl:w-[250px] rounded-full overflow-hidden'>
                <img src={image.image} className='h-full w-full object-cover bg-center' alt="" />
            </div>
        </>
    )
}

export default Culture