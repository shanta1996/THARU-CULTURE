import React from 'react'
import historyData from '../utils/historyDescription.json'
import HistoryHeading from '../components/HistoryHeading'
import HistoryCard from '../components/HistoryCard'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
const SecondPage = () => {
    return (
        <>
            <div className='bg-[#B5C18E] secondPage flex-none md:flex justify-between items-start p-5 md:p-12 relative'>
                <HistoryHeading />
                <div className='w-full md:w-[50%] flex flex-col justify-center items-end md:mt-0 mt-10'>
                    <div className='imageDiv md:h-auto h-[300px] w-full mb-3 md:mb-[300px] overflow-hidden'>
                        <img src="https://nepalbase.org/wp-content/uploads/2015/04/Tharu-community-meeting-_history-of-Tharu-3.jpg" className='image object-cover w-full h-full duration-200 ease-linear' alt="" />
                    </div>
                    {historyData.map((getData, index) => (
                        <HistoryCard key={index} getData={getData} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default SecondPage