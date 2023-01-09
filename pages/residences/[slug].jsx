import Link from "next/link";
import React, { useState } from "react";
import ResidenceBannerImage from "../../public/images/residence-banner.png";
import { PageBanner } from "../../src/components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { One, Two, Three, Four } from "../../public";
import { Calendar } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";

const Slug = () => {
  const [shortInfo, setShortInfo] = useState(false);
  return (
    <>
      <PageBanner src={ResidenceBannerImage} />
      <section className="mt-9 container mx-auto p-2 md:p-0 mb-5">
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
          <div className="relative max-h-[700px] col-span-2">
            <Image
              src={One}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              className={`absolute top-0 p-6 ${
                shortInfo && "backdrop-blur-md"
              } rounded-3xl h-full `}
            >
              {!shortInfo ? (
                <button
                  className="text-xl font-semibold text-white flex item-center"
                  onClick={() => setShortInfo(true)}
                >
                  Afficher la description{" "}
                  <MdOutlineKeyboardArrowDown size={30} />
                </button>
              ) : (
                <RxCross2
                  size={25}
                  className="text-white cursor-pointer hover:scale-110"
                  onClick={() => setShortInfo(false)}
                />
              )}
              {shortInfo && (
                <p className="font-normal p-4 md:p-10 text-xl text-white h-full overflow-x-scroll lg:overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur. Nullam pharetra nunc
                  id vitae sed pellentesque nibh non sed. Sed amet laoreet diam
                  interdum nunc facilisi egestas. Mi convallis volutpat sed
                  ultrices suspendisse ultrices. Feugiat augue consectetur eu
                  blandit ac. Neque nulla in mattis gravida pretium iaculis
                  vulputate. Feugiat in sapien in eu. Pretium nibh urna vel
                  molestie porttitor suspendisse orci pellentesque in. Platea
                  quis orci urna semper hendrerit. Lacus aenean a faucibus
                  lorem. Quis elit euismod maecenas mi id.
                </p>
              )}
            </div>
          </div>
          {/* 2 */}
          <div className="md:max-h-[700px] col-span-2 md:col-span-1">
            <div className="h-[40%]">
              <Image
                src={Two}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="h-[60%] pt-4 md:pt-6">
              <Image
                src={Three}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 md:max-h-[700px]">
            <div className="md:h-[50%]">
              <Image
                src={Four}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="md:h-[50%] pt-6 p-6">
              <h6 className=" text-xl">
                <strong className="text-4xl font-semibold">149 €</strong>
                <sub>par nuit</sub>
              </h6>
              <div className="mt-6 border-b-2 border-gray-200 pb-4">
                <h5 className="font-bold text-[22px]">Arrivée</h5>
                <p className="text-sm font-normal text-gray-300">
                  Quand voulez vous arrivez ?
                </p>
              </div>
              <div className="mt-6 pb-4">
                <h5 className="font-bold text-[22px]">Départ</h5>
                <p className="text-sm font-normal text-gray-300">
                  Quand voulez vous partir ?
                </p>
              </div>
              <button className="border w-full p-2 mt-4 border-black rounded-full text-base font-semibold hover:bg-black hover:text-white">
                réserver maintenant
              </button>
              <h6 className="text-sm font-semibold mt-4 text-center cursor-pointer">
                + de détails
              </h6>
            </div>
          </div>
        </div>
      </section>
      <ResidenceOrder />
    </>
  );
};

export default Slug;

const ResidenceOrder = () => {
  const [values, setValues] = useState([
    new DateObject().setDay(4).subtract(1, "month"),
    new DateObject().setDay(4).add(1, "month"),
  ]);
  console.log(values[0]);
  console.log(values[0].month);
  console.log(values[0].year);
  console.log(values[0].dayOfBeginning);


  

  return (
    <>
      <div className="container mx-auto mb-10 grid grid-cols-5 gap-4">
        <div className="pl-0 col-span-3 border-r-2 border-gray-200 px-4">
          <h6 className="font-medium text-xl mt-4">
            6 nuits à <strong>Poppengine</strong>
          </h6>
          <p className="text-sm mt-1 text-gray-700">
            Mar. 24 Janvier - Lun. 30 Janvier
          </p>
          <Calendar
            value={values}
            onChange={setValues}
            range
            numberOfMonths={2}
            showOtherDays
            className="_calendar"
          />
        </div>
        <div className="col-span-2 px-4">2</div>
      </div>
    </>
  );
};
