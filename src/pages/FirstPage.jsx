import React from 'react'

const FirstPage = () => {
    const handleMousMove=(e)=>{
        
    }
    return (
        <>
            <div className=' w-full relative'>
                <div className='h-screen text-9xl font-["Ubuntu"] font-bold flex items-center justify-center hidden'>Scroll to Explore</div>
                <div onMouseMove={(e)=>handleMousMove(e)} style={{clipPath: 'circle(100% at 50% 50%)'}} className=' h-screen w-full absolute top-0 bg-zinc-100 flex items-center justify-center'>
                    <div className='bg-red-00 font-["Ubuntu"] font-bold relative'>
                        <h1 className='text-9xl tracking-tight '>THARU CULTURE</h1>
                        <div className='h-[60px] w-[60px] overflow-hidden rounded-full absolute top-1/2 -translate-y-[110px] left-2  '>
                        <img src="/sirbindi.png" className='object-cover' alt="" />
                        </div>
                        <div className='h-[50px] w-[50px] absolute right-0 translate-x-[40px] bottom-0 translate-y-[30px] overflow-hidden rounded-full'>
                            <img src="/dhakiya2.PNG" className='object-cover w-full h-full' alt="" />
                        </div>
                    </div>
                </div>

            </div>

         
        </>
    )
}

export default FirstPage