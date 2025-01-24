import React from 'react'

const TiltedText = ({tilt}) => {
  return (
    <>
        <div  ref={tilt} className='rotate-x-[30deg] font-["Ubuntu"] font-bold relative'>
                        <h1 className='text-9xl tracking-tight '>THARU CULTURE</h1>
                        <div className='h-[60px] w-[60px] overflow-hidden rounded-full absolute top-1/2 -translate-y-[95px] left-0 -translate-x-1/2 '>
                            <img src="/sirbindi.png" className='object-cover' alt="" />
                        </div>
                        <div className='h-[50px] w-[50px] absolute right-0 translate-x-[40px] bottom-0 translate-y-[30px] overflow-hidden rounded-full'>
                            <img src="/dhakiya2.PNG" className='object-cover w-full h-full' alt="" />
                        </div>
                    </div>
    </>
  )
}

export default TiltedText