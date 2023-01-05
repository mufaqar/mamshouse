import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <header className='absolute top-0 right-0 w-full shadow-sm bg-white'>
       <div className='flex justify-between px-8 items-center h-16 bg-white'>
        {/* logo */} 
        <div>
            <h1 className='uppercase mt-[14px] font-bangla-mn text-2xl leading-7'>mamshouse.</h1>
        </div>
        <nav>
            <ul className='flex font-semibold text-sm gap-20 items-center'>
                <li className='cursor-pointer'><Link href="#">Résidences</Link></li>
                <li className='cursor-pointer'><Link href="#">Activités</Link></li>
                <li className='cursor-pointer'><Link href="#">Contact</Link></li>
                <li className='ml-6 cursor-pointer text-lg'><Link href="#"><FaInstagram/></Link></li>
            </ul>
        </nav>
       </div>
    </header>
  )
}
