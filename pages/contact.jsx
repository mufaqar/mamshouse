import Link from "next/link";
import React from "react";
import { ContactUsBannerBg } from "../public";
import { Footer, PageBanner } from "../src/components";
import { FiMenu } from "react-icons/fi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { BsEnvelope,BsTelephone } from "react-icons/bs";



export default function Contact() {
  return (
    <div>
      <PageBanner
        src={ContactUsBannerBg}
        heading="Contact"
        pageType="contact"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />
      <section className="container mx-auto mt-28 p-2 md:p-0">
        <div className="md:flex items-center">
          <div className="md:8/12 lg:w-9/12">
            <div className="max-w-[500px]">
              <h3 className="font-bangla-mn text-[38px]">Nous contacter</h3>
              <p className="mt-2 font-light text-base">
                Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere
                cursus in cursus eleifend. Nisi in dolor aliquet nunc quis
                tortor. Fusce at enim et amet viverra.
              </p>
            </div>
          </div>
          <div className="md:w-4/12 lg:w-3/12 mt-8 md:mt-0">
            {/* socials */}
            <ul className="w-full flex p-0 md:pl-10 flex-col justify-center gap-6">
              <li>
                <Link
                  href="#"
                  target="__blank"
                  className="flex items-center gap-3"
                >
                  <IoLogoInstagram size={22} />
                  <span className="font-light text-base">@mamshouse</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="__blank"
                  className="flex items-center gap-3"
                >
                  <BsEnvelope size={18} />
                  <span className="font-light text-base">
                    hello@mamshouse.com
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="__blank"
                  className="flex items-center gap-3"
                >
                  <BsTelephone size={17} />
                  <span className="font-light text-base">+221 123 456</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div className="md:flex mt-20 items-center">
          <div className="md:w-8/12 lg:w-9/12">
            <div className="max-w-[500px]">
              <h3 className="font-bangla-mn text-[38px]">Reservation</h3>
              <p className="mt-2 font-light text-base">
                Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere.
              </p>
            </div>
          </div>
          <div className="md:4/12 lg:w-3/12 mt-8 md:mt-0">
            <button className="main-btn w-full">réserver maintenant</button>
            <button className="mt-6 text-center font-semibold text-xs flex items-center gap-1 justify-center w-full">réserver sur Whatsapp <HiOutlineArrowSmRight size={18}/></button>
          </div>
        </div>
        {/* 3 */}
        <div className="md:flex mt-20 mb-20 md:mb-40 items-center">
          <div className="md:w-8/12 lg:w-9/12">
            <div className="max-w-[500px]">
              <h3 className="font-bangla-mn text-[38px]">Locations</h3>
              <p className="mt-2 font-light text-base">
                Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere
                cursus in cursus eleifend. Nisi in dolor aliquet nunc quis
                tortor.
              </p>
            </div>
          </div>
          <div className="md:w-4/12 lg:w-3/12 mt-8 md:mt-0">
            <button className="text-sm gap-2 lg:whitespace-nowrap flex justify-center items-center">
                <GrHomeRounded size={14} />
                1 route du pilier, 22600 Poppengine, Sénégal
                <HiOutlineArrowSmRight size={16}/>
            </button>
            <button className="text-sm mt-3 gap-2 lg:whitespace-nowrap flex justify-center items-center">
                <GrHomeRounded size={14} />
                1 route du pilier, 22600 Poppengine, Sénégal
                <HiOutlineArrowSmRight size={16}/>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
