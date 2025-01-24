import React from 'react'
import historyData from '../utils/historyDescription.json'
import HistoryHeading from '../components/HistoryHeading'
import HistoryCard from '../components/HistoryCard'

const SecondPage = () => {
    return (
        <>
            <div className=' flex justify-between items-start p-12 relative'>
                <HistoryHeading/>
                <div className='w-[60%] flex flex-col justify-center items-end'>
                    <div className='imageDiv w-full mb-[300px] overflow-hidden'>
                        <img src="https://nepalbase.org/wp-content/uploads/2015/04/Tharu-community-meeting-_history-of-Tharu-3.jpg" className='image object-cover w-full h-full duration-200 ease-linear' alt="" />
                    </div>
                    {historyData.map((getData,index)=>(
                       <HistoryCard key={index} getData={getData} />
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default SecondPage