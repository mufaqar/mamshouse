import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';


export default function Header() {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <header className='absolute top-0 right-0 w-full shadow-sm bg-white'>
       <div className='flex justify-between px-2 md:px-8 items-center h-16 bg-white'>
        {/* logo */} 
        <div>
            <h1 className='uppercase mt-[14px] font-bangla-mn text-xl md:text-2xl leading-7'>mamshouse.</h1>
        </div>
        <nav className={`md:block ${!isMobile ? 'block' : 'hidden'}`}>
            <ul className={`flex font-semibold text-sm gap-20 items-center ${!isMobile && 'bg-white shadow-sm p-8 gap-8 absolute top-16 z-10 w-full left-0 flex-col'}`}>
                <li className='cursor-pointer'><Link href="#">Résidences</Link></li>
                <li className='cursor-pointer'><Link href="#">Activités</Link></li>
                <li className='cursor-pointer'><Link href="#">Contact</Link></li>
                <li className={`ml-6 cursor-pointer text-lg ${!isMobile && 'ml-0'}`}><Link href="#"><FaInstagram/></Link></li>
            </ul>
        </nav>
        {/* hamburger */}
        <div className='block md:hidden'>
          {
            isMobile ?  <FiMenu size={30} className="pt-1" onClick={()=>setIsMobile(!isMobile)}/> : <GrClose size={26} className="pt-1" onClick={()=>setIsMobile(!isMobile)}/>
          }
        </div>
       </div>
    </header>
  )
}
