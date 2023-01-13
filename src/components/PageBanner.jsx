import Image from "next/image";
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { BsEnvelope,BsTelephone } from "react-icons/bs";



export default function PageBanner({
  src,
  srcUrl,
  subHeading,
  heading,
  info,
  pageType,
}) {
  
  return (
    <main
      className="md:h-screen h-[700px] w-full PageBanner"
      style={{ background: `url(${srcUrl ? srcUrl : src?.src})` }}
    >
      <div className="flex flex-col justify-center items-center h-full ">
        <div
          className={`max-w-[670px] text-center ${
            pageType === "contact" ? "text-black" : "text-white"
          } p-1 md:p-0`}
        >
          {subHeading && (
            <h1 className="text-2xl mb-10 lg:mb-16 font-light">{subHeading}</h1>
          )}
          <h1
            className={`main-heading font-bangla-mn ${
              heading === "ACTIVITES" &&
              "lg:text-[100px] md:text-[86px] text-[60px]"
            }`}
          >
            {heading}
          </h1>
          <p className="font-light text-base mt-2">{info}</p>
          <div className="flex justify-center ">
            {pageType === "residence" && (
              <button className="mt-8 flex items-center font-semibold  text-xs">
                Voir nos résidences
                <HiOutlineArrowSmRight size={17} className="ml-1" />
              </button>
            )}
          </div>
          {pageType === "contact" && (
            <ul className="w-full flex justify-center gap-2 md:gap-12 mt-6">
              <li>
                <Link href="#" target="__blank" className="flex items-center gap-1">
                  <IoLogoInstagram size={18}/>
                  <span className="font-light text-xs">@mamshouse</span>  
                </Link>
              </li>
              <li>
              <Link href="#" target="__blank" className="flex items-center gap-1">
                <BsEnvelope size={15}/>
                <span className="font-light text-xs">hello@mamshouse.com</span>  
              </Link>
            </li>
            <li>
            <Link href="#" target="__blank" className="flex items-center gap-1">
              <BsTelephone size={14}/>
              <span className="font-light text-xs">+221 123 456</span>  
            </Link>
          </li>
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
