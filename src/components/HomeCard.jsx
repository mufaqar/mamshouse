import {heroCard} from '../../public'
import {OwnImage} from './'
import { HiArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link';

export default function HomeCard() {
  return (
    <div className='container p-6 md:flex mx-auto'>
        <div>
            <div className='relative rounded-[30px] md:h-[673px] md:w-[450px]'>
                <OwnImage url={heroCard} alt="herocard"/>
                <div className='flex flex-col justify-end w-full px-8 h-full absolute top-0 rounded-[22px]'>
                    <div className='flex justify-between text-white pb-5 items-center'>
                        <h4 className='text-sm'><b>Poppengine,</b> Sénégal</h4>
                        <Link href="#" className="hover:-mr-2 transition-all ease-linear"><HiArrowNarrowRight size={30}/></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:pl-24 pt-16 w-full md:max-w-[680px]'>
            <h2 className='sub-heading font-bangla-mn'>TINY B.</h2>
            <p className='font-medium'>Facilisi dolor eget nulla elementum parturient cursus mauris vestibulum.
            Condimentum est nunc duis eros euismod consectetur sed. Et ullamcorper lobortis id aliquet lobortis malesuada eget mi pellentesque. Risus et at ornare tellus dictumst faucibus augue elementum. 
            <br/><br/>Lacus eget justo nam enim aliquet diam nisi adipiscing. Porta massa nunc aliquam porta adipiscing fames et mi. Laoreet justo enim at habitasse tincidunt.</p>
            <ul className='list-disc space-y-4 m-6'>
                <li>Lacus eget justo nam enim aliquet diam nisi adipiscing. Porta massa nunc aliquam porta adipiscing fames et mi. Laoreet justo enim at habitasse tincidunt.</li>
                <li>Laoreet justo enim at habitasse tincidunt.</li>
            </ul>
            <button className='mt-5 main-btn'>réserver maintenant</button>
        </div>
    </div>
  )
}
