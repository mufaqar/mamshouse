import React from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import Link from 'next/link';
import { IoLogoInstagram } from 'react-icons/io';
import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import Image from 'next/image';
import parse from 'html-react-parser';

export default function PageBanner({
  src,
  srcUrl,
  subHeading,
  heading,
  info,
  pageType,
  ArrowDownImg,
}) {
  return (
    <main
      className="md:h-screen h-[700px] w-full relative PageBanner"
      style={{ background: `url(${srcUrl ? srcUrl : src?.src})` }}
    >
      <div className="flex flex-col justify-center items-center h-full overlay w-full absolute top-0 right-0 bottom-0 bg-black/20">
        <div
          className={`max-w-[670px] text-center ${
            pageType === 'contact' ? 'text-black' : 'text-white'
          } p-1 md:p-0`}
        >
          {subHeading && (
            <h1 className="text-sm mb-10 font-light">{parse(subHeading)}</h1>
          )}
          <h1
            className={`main-heading font-bangla-mn ${
              heading === 'ACTIVITES' &&
              'lg:text-[100px] md:text-[86px] text-[60px]'
            }`}
          >
            {heading}
          </h1>
          <p className="font-light text-base mt-2">{info}</p>
          <div className="flex justify-center ">
            {pageType === 'residence' && (
              <button className="mt-8 flex items-center font-semibold  text-xs">
                <Link href="#residences">Voir nos résidences</Link>
                <HiOutlineArrowSmRight size={17} className="ml-1" />
              </button>
            )}
          </div>
          {pageType === 'contact' && (
            <ul className="w-full flex justify-center gap-2 md:gap-10 mt-6">
              <li>
                <Link
                  href="https://www.instagram.com/mamshouse"
                  target="__blank"
                  className="flex items-center gap-[2px]"
                >
                  <IoLogoInstagram size={18} />
                  <span className="font-light italic text-xs">@mamshouse</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@mamshouse.com"
                  target="__blank"
                  className="flex items-center gap-[2px]"
                >
                  <BsEnvelope size={15} />
                  <span className="font-light italic text-xs">
                    hello@mamshouse.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+221 123 456"
                  target="__blank"
                  className="flex items-center gap-[2px]"
                >
                  <BsTelephone size={14} />
                  <span className="font-light italic text-xs">
                    +221 123 456
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
        {ArrowDownImg && (
          <Image
            src={ArrowDownImg}
            alt="down Arrow"
            className="absolute bottom-5 w-7 animate-bounce transform translate-x-1/2 right-1/2"
          />
        )}
      </div>
    </main>
  );
}
