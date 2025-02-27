import React from 'react'

const Ornaments = ({getData}) => {
    return (
        <>
            <div>
               <div className='h-[150px] w-[150px] md:h-[200px] md:w-[200px] 2xl:h-[250px] 2xl:w-[250px] rounded-full overflow-hidden'>
                    <img src={getData.image} className='h-full w-full object-cover bg-center' alt="" />
                </div>
                <h4 className='text-xl text-center capitalize mt-2'>{getData.title}</h4>
            </div> 
        </>
    )
}

export default Ornaments