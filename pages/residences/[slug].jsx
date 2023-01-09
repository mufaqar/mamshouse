import Link from "next/link";
import React from "react";
import ResidenceBannerImage from "../../public/images/residence-banner.png";
import { PageBanner } from "../../src/components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { heroCard } from "../../public";
import Image from "next/image";

const Slug = () => {
  return (
    <>
      <PageBanner src={ResidenceBannerImage} />
      <section className="mt-9 container mx-auto p-1 md:p-0 mb-4">
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
        <div className="grid grid-cols-5 gap-4 mt-3">
          <div className="max-h-[700px] col-span-2">
            <Image src={heroCard} alt="" className="w-full h-full object-cover rounded-3xl"/>
          </div>
          <div className="max-h-[700px]">
            <div className="h-[40%]"> <Image src={heroCard} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
            <div className="h-[60%] pt-6"> <Image src={heroCard} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
          </div>
          <div className=" col-span-2 max-h-[700px]">
            <div className="h-[50%]"> <Image src={heroCard} alt="" className="w-full h-full object-cover rounded-3xl"/> </div>
            <div className="h-[50%] pt-6">
              <h6 className="font-normal text-xl"><strong className="text-4xl font-medium">149 €</strong> <sub>par nuit</sub></h6>
              <div>
                <h5 className="font-bold text-[22px]">Arrivée</h5>
                <p className="text-sm font-semibold">Quand voulez vous arrivez ?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

