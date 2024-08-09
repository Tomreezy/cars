import React from 'react'
import image from "../assets/cars.png"


const Hero = () => {
  return (
    <div className='relative h-[70vh] overflow-hidden fontUsed '>
        <div className='absloute left-0 right-0 overflow-hidden'>
            <img src={image} className='size-full object-contain '/>
            <div className='image absolute z-10  w-full  h-full left-0 top-0'></div>
            <section className='absolute  space-y-3 z-30 left-[25%] top-[40%]'>
                <p className=' text-2xl text-white font-bold'>New  Wines for sale</p>
                <p className=' text-white text-lg'>Let's find what moves you</p>
                <div className='bg-red-700 border border-red-700 border-solid flex items-center my-2 w-[50vw] rounded-lg overflow-hidden '>
                    <input placeholder='Try Maddock' className='bg-twhite outline-none w-[70%] py-3 px-3 ' type='text' />
                    <button className='p-1 flex  mx-auto font-semibold text-white'>Search Wines</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Hero