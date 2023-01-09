import Link from "next/link";
import React from "react";
import ResidenceBannerImage from "../../public/images/residence-banner.png";
import { PageBanner } from "../../src/components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { heroCard } from "../../public";
import Image from "next/image";
import { One, Two, Three, Four } from "../../public";

const Slug = () => {
  return (
    <>
      <PageBanner src={ResidenceBannerImage} />
      <section className="mt-9 container mx-auto p-2 md:p-0 mb-5 md:mb-10">
        <Link href="/residences">
          <h1 className="text-sm font-bangla-mn flex capitalize">
            <HiArrowNarrowLeft size={14} className="-mt-[0.001] mr-1" /> Nos
            Résidences
          </h1>
        </Link>
        <h1 className="sub-heading font-bangla-mn capitalize">
          Nos Résidences
        </h1>
        {/* Gallery */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3 ">
        {/* 1 */}
          <div className="max-h-[700px] col-span-2">
            <Image src={One} alt="" className="w-full h-full object-cover rounded-3xl"/>
          </div>
           {/* 2 */}
          <div className="md:max-h-[700px] col-span-2 md:col-span-1">
            <div className="h-[40%]"> <Image src={Two} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
            <div className="h-[60%] pt-4 md:pt-6"> <Image src={Three} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
          </div>
           {/* 3 */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 md:max-h-[700px]">
            <div className="md:h-[50%]"> <Image src={Four} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
            <div className="md:h-[50%] pt-6 p-6">
              <h6 className=" text-xl"><strong className="text-4xl font-semibold">149 €</strong> <sub>par nuit</sub></h6>
              <div className="mt-6 border-b-2 border-gray-200 pb-4">
                <h5 className="font-bold text-[22px]">Arrivée</h5>
                <p className="text-sm font-normal text-gray-300">Quand voulez vous arrivez ?</p>
              </div>
              <div className="mt-6 pb-4">
                <h5 className="font-bold text-[22px]">Départ</h5>
                <p className="text-sm font-normal text-gray-300">Quand voulez vous partir ? </p>
              </div>
              <button className="border w-full p-2 mt-4 border-black rounded-full text-base font-semibold hover:bg-black hover:text-white">réserver maintenant</button>
              <h6 className="text-sm font-semibold mt-4 text-center cursor-pointer">+ de détails</h6>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

