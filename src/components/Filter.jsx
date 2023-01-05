import React, { useState } from 'react'
import { TbLocation } from 'react-icons/tb';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlineTeam } from 'react-icons/ai';


const FList = ({title,placeholder,icon}) => {
    return(
        <div className='flex'>
            <div className='transform text-[#C3C3C3] text-lg pt-2 -scale-x-100'>{icon}</div>
            <div className='pl-2'>
                <h6 className='text-[22px] font-bold'>{title}</h6>
                <p className='text-[#C3C3C3] text-sm font-medium'>{placeholder}</p>
            </div>
        </div>
    )
};

export default function Filter() {
  const [origin, setOrigin] = useState('Lieux')
  return (
    <div className='rounded-xl filter border-[2px] border-white p-8 container mx-auto'>
        <ul className='flex items-center font-bold pb-6 border-b-[2px] border-[#fffcf47b] text-sm gap-24'>
            <li className={`cursor-pointer ${origin === 'Lieux' && 'item'}`} onClick={()=>setOrigin('Lieux')}>Lieux</li>
            <li className={`cursor-pointer ${origin === 'Activités' && 'item'}`} onClick={()=>setOrigin('Activités')}>Activités</li>
            <li className={`cursor-pointer ${origin === 'Région' && 'item'}`} onClick={()=>setOrigin('Région')}>Région</li>
        </ul>
        <div className='flex flex-col md:flex-row justify-between md:px-10 pt-10 mb-5 gap-y-5 md:items-center'>
            <FList title="Location" placeholder="Quel bien vous irait ?" icon={<TbLocation/>}/>
            <FList title="Arrivée" placeholder="Quand voudriez vous partir ?" icon={<AiOutlineCalendar/>}/>
            <FList title="Départ" placeholder="Quand voudriez vous partir ?" icon={<AiOutlineCalendar/>}/>
            <FList title="Voyageurs" placeholder="Ajoutez un voyageur ?" icon={<AiOutlineTeam/>}/>
            {/* search */}
            <div>
               <div className='cursor-pointer inline-block border border-black p-2 rounded-full'><FiSearch/> </div>
            </div>
        </div>
    </div>
  )
}
