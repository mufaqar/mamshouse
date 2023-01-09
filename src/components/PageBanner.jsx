import Image from "next/image";
import React from "react";
import { HiOutlineArrowSmRight } from 'react-icons/hi';


export default function PageBanner({ src }) {
  return (
    <main
      className="md:h-screen h-[700px] w-full PageBanner"
      style={{ background: `url(${src.src})` }}
    >
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="max-w-[670px] text-center text-white p-1 md:p-0">
          <h1 className="main-heading font-bangla-mn">Les Residences</h1>
          <p className="font-light text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere
            cursus in cursus eleifend. Nisi in dolor aliquet nunc quis tortor.
            Fusce at enim et amet viverra. Dui suspendisse scelerisque justo
            ultrices in convallis orci id. Purus at elit nulla pretium neque
            purus eget.
          </p>
          <div className="flex justify-center ">
            <button className="mt-8 flex items-center font-semibold  text-xs">Voir nos résidences <HiOutlineArrowSmRight size={17} className="ml-1" /></button>
          </div>
        </div>
      </div>
    </main>
  );
}
