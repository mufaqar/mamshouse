import Image from 'next/image'
import React from 'react'
import {MainBanner} from '../../public' 


export default function Main() {
  return (
    <main className='relative bg-no-repeat bg-cover w-full md:h-screen 2xl:h-[90vh]'>
      <Image src={MainBanner} alt={`main banner`} className="w-full h-[500px] md:h-screen object-cover 2xl:h-[90vh]"/>
      <div className='absolute top-[30%] md:left-[10%] lg:left-[20%] max-w-4xl px-10'>
        <h1 className='lg:text-[42px] md:text-[36px] text-[25px] font-light text-white font-bangla-mn '>Mamshouse is a selection of incredible places in the rural landscape of Senegal</h1>
        <button className='main-btn px-10 text-white border-white '>Make a Reservation</button>
      </div>
    </main>
  )
}
