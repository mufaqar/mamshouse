import Image from 'next/image';
import React from 'react';
import { MainBanner } from '../../public';
import Link from 'next/link';

export default function Main() {
  return (
    <main className="relative bg-no-repeat bg-cover w-full md:h-screen 2xl:h-[90vh]">
      <div className="h-full overlay w-full absolute top-0 right-0 bottom-0 bg-black/40"></div>
      <Image
        src={MainBanner}
        alt={`main banner`}
        className="w-full h-[500px] md:h-screen object-cover 2xl:h-[90vh]"
      />
      <div className="absolute top-[30%] md:left-[10%] lg:left-[20%] max-w-4xl px-10">
        <h1 className="lg:text-[42px] md:text-[36px] text-[25px] font-light text-white font-bangla-mn ">
          Mamshouse is a selection of incredible places in the rural landscape
          of Senegal
        </h1>
        <Link
          href="/residences#residences"
          className="main-btn px-10 text-white border-white "
        >
          make a reservation
        </Link>
      </div>
    </main>
  );
}
