import Image from 'next/image'
import React from 'react'
import {MainBanner} from '../../public' 


export default function Main() {
  return (
    <main className=' bg-no-repeat bg-cover w-full '>
      <Image src={MainBanner} alt={`main banner`} className="w-full h-[500px] md:h-auto object-cover"/>
    </main>
  )
}
