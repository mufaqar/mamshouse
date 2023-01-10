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
import { Feature } from "../../public/mock.data/feature";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenState } from "../../src/store/features/openBookingTabSlice/openBookingTabSlice";

const Slug = () => {
  const [shortInfo, setShortInfo] = useState(false);
  const openBookingTab = useSelector((state) => state.openBookingTab.open);
  console.log(
    "🚀 ~ file: [slug].jsx:22 ~ Slug ~ openBookingTab",
    openBookingTab
  );
  const dispatch = useDispatch();

  return (
    <>
      <PageBanner
        src={ResidenceBannerImage}
        heading=" Les Residences"
        info="Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere cursus in cursus eleifend. Nisi in dolor aliquet nunc quis tortor. Fusce at enim et amet viverra. Dui suspendisse scelerisque justo ultrices in convallis orci id. Purus at elit nulla pretium neque purus eget."
        pageType="residence"
      />
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
              className="w-full h-full object-cover _shadow rounded-3xl"
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
                className="w-full h-full _shadow object-cover rounded-3xl"
              />
            </div>
            <div className="h-[60%] pt-4 md:pt-6">
              <Image
                src={Three}
                alt=""
                className="w-full h-full _shadow object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 md:max-h-[700px]">
            <div className="md:h-[50%]">
              <Image
                src={Four}
                alt=""
                className="w-full h-full _shadow object-cover rounded-3xl"
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
              <h6
                className="text-sm font-semibold mt-4 text-center underline cursor-pointer"
                onClick={() => dispatch(changeOpenState())}
              >
                {openBookingTab ? "-" : "+"} de détails
              </h6>
            </div>
          </div>
        </div>
      </section>
      {openBookingTab && <ResidenceOrder />}
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
      <div className="container p-4 md:pl-0 md:pr-0 md:pb-0 mx-auto mb-10 md:grid md:grid-cols-5 pt-3 gap-4">
        <div className="pl-0 col-span-3 md:border-r-2 border-gray-200 md:px-4">
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
          <div>
            <button className="text-sm font-normal underline flex justify-end w-full pr-7 mt-4 leading-8">
              Effacer la sélection
            </button>
          </div>
        </div>
        <div className="col-span-2 px-4 pt-2">
          <h3 className="font-normal text-[#1E1E1E] text-xl">
            À propos de ce logement
          </h3>
          <ul className="mt-5">
            {Feature.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex mb-7 justify-start gap-4 items-center"
                >
                  <Image
                    src={item.icon.src}
                    alt={item.title}
                    width={20}
                    height={20}
                  />
                  <p className="text-sm ">{item.title}</p>
                </li>
              );
            })}
          </ul>
          <h3 className="font-normal mt-12 text-xl text-[#1E1E1E]">
            <strong>Avis des clients</strong> - 3 commentaires
          </h3>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <div>
                <h5 className="font-semibold text-sm">Qualité-prix</h5>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="70" max="100" /> <span>7,3</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-1">
                  <AiFillStar />
                  <h5 className="font-semibold text-sm">Confort</h5>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="70" max="100" /> <span>7,3</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-1">
                  <AiFillStar />
                  <h5 className="font-semibold text-sm">Localisation</h5>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="70" max="100" /> <span>4,3</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-semibold text-sm">Equipement</h5>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="50" max="100" /> <span>3,3</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-1">
                  <AiFillStar />
                  <h5 className="font-semibold text-sm">Propreté</h5>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="100" max="100" /> <span>5,0</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-1">
                  <h5 className="font-semibold text-sm">Communication</h5>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <progress id="file" value="30" max="100" /> <span>2,3</span>
                </div>
              </div>
            </div>
          </div>
          <button className="flex justify-center underline mt-8 w-full">
            Afficher les commentaires
          </button>
        </div>
      </div>
    </>
  );
};
