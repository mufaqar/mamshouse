import Image from 'next/image'
import React from 'react'

export default function PageBanner({src}) {
  return (
    <div className='md:h-screen h-[700px] w-full PageBanner'  style={{ background: `url(${src.src})` }}>
        
    </div>
  )
}
