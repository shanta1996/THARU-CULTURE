
import React from 'react'

const HistoryCard = ({getData}) => {
 
    const{title,description}=getData
    return (
        <>
            <div className='card w-full mx-auto md:w-[90%] p-3 border rounded-2xl overflow-hidden duration-500 ease-linear m-5'>
                <h3 className='text textHeading text-2xl font-semibold my-2'>{title}</h3>
              
                <p className='text-md md:text-lg 2xl:text-xl mt-5 '>{description}</p>
              
            </div>
        </>
    )
}

export default HistoryCard