// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { PageBanner } from "../../src/components";
// import { HiArrowNarrowLeft } from "react-icons/hi";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import Image from "next/image";
// import { Calendar } from "react-multi-date-picker";
// import { DateObject } from "react-multi-date-picker";
// import { AiFillStar } from "react-icons/ai";
// import { useDispatch, useSelector } from "react-redux";
// import moment from "moment";
// import {
//   calculateDays,
//   startEndDate,
// } from "../../src/store/features/BookingTabSlice/TotalBookingDays";
// import { sanityClient } from "../../src/config/sanityClient";
// import { useRouter } from "next/router";


// const Slug = ({data}) => {

//   const [shortInfo, setShortInfo] = useState(false);
//   const [open, setOpen] = useState(false);

//   const getTotalDays = useSelector((state) => state.TotalBookingDays.days);
//   const [days, setDays] = useState(getTotalDays);

//   const dispatch = useDispatch();

//   const renderState = (daysProps) => {
//     setDays(daysProps);
//   };

//   const handleResize = () => {
//     if (window.innerWidth > 768) {
//       setOpen(false);
//     } else {
//       setOpen(true);
//     }
//   };
//   // create an event listener
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//   });

//   const handleBooking = () => { };

//   return (
//     <>
//       <PageBanner
//         srcUrl={data.feature_banner?.asset?.url}
//         heading="Les Residences"
//         info={data?.short_info}
//         pageType="residence"
//       />
//       <section className="mt-9 container mx-auto p-2 md:p-0 mb-5">
//         <Link href="/residences">
//           <h1 className="text-sm font-bangla-mn flex capitalize">
//             <HiArrowNarrowLeft size={14} className="-mt-[0.001] mr-1" /> Nos
//             Résidences
//           </h1>
//         </Link>
//         <h1 className="sub-heading font-bangla-mn capitalize">
//           {data.title}
//         </h1>
//         {/* Gallery */}
//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3 ">
//           {/* 1 */}
//           <div className="relative max-h-[700px] col-span-2">
//             <Image
//               src={data.gallery[0]?.asset?.url}
//               alt={data.title}
//               width={500}
//               height={500}
//               className="w-full h-full object-cover _shadow rounded-3xl"
//             />
//             <div
//               className={`absolute top-0 p-6 ${shortInfo && "backdrop-blur-md"
//                 } rounded-3xl h-full `}
//             >
//               {!shortInfo ? (
//                 <button
//                   className="text-xl font-semibold text-white flex item-center"
//                   onClick={() => setShortInfo(true)}
//                 >
//                   Afficher la description
//                   <MdOutlineKeyboardArrowDown size={30} />
//                 </button>
//               ) : (
//                 <RxCross2
//                   size={25}
//                   className="text-white cursor-pointer hover:scale-110"
//                   onClick={() => setShortInfo(false)}
//                 />
//               )}
//               {shortInfo && (
//                 <p className="font-normal p-4 md:p-10 text-xl text-white h-full overflow-x-scroll lg:overflow-hidden">
//                   {data.description}
//                 </p>
//               )}
//             </div>
//           </div>
//           {/* 2 */}
//           <div className="md:max-h-[700px] col-span-2 md:col-span-1">
//             <div className="h-[40%]">
//               <Image
//                 src={data.gallery[1]?.asset?.url}
//                 alt={data.title}
//                 width={500}
//                 height={500}
//                 className="w-full h-full _shadow object-cover rounded-3xl"
//               />
//             </div>
//             <div className="h-[60%] pt-4 md:pt-6">
//               <Image
//               src={data.gallery[2]?.asset?.url}
//               alt={data.title}
//               width={500}
//               height={500}
//                 className="w-full h-full _shadow object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//           {/* 3 */}
//           <div className="col-span-2 md:col-span-3 lg:col-span-2 md:max-h-[700px]">
//             <div className="md:h-[50%]">
//               <Image
//               src={data.gallery[3]?.asset?.url}
//               alt={data.title}
//               width={500}
//               height={500}
//                 className="w-full h-full _shadow object-cover rounded-3xl"
//               />
//             </div>
//             <div className="md:h-[50%] pt-6 p-6">
//               <h6 className=" text-xl">
//                 <strong className="text-4xl font-semibold">
//                   {days === 1 ? data?.price_per_unit : days * data?.price_per_unit} €
//                 </strong>
//                 <sub className="ml-1">
//                   {days === 1 ? "par nuit" : `${days} units`}{" "}
//                 </sub>
//               </h6>
//               <div className="mt-6 border-b-2 border-gray-200 pb-4">
//                 <h5 className="font-bold text-[22px]">Arrivée</h5>
//                 <p className="text-sm font-normal text-gray-300">
//                   Quand voulez vous arrivez ?
//                 </p>
//               </div>
//               <div className="mt-6 pb-4">
//                 <h5 className="font-bold text-[22px]">Départ</h5>
//                 <p className="text-sm font-normal text-gray-300">
//                   Quand voulez vous partir ?
//                 </p>
//               </div>
//               <button
//                 onClick={handleBooking}
//                 className="border w-full p-2 mt-4 border-black rounded-full text-base font-semibold hover:bg-black hover:text-white"
//               >
//                 réserver maintenant
//               </button>
//               <h6
//                 className="text-sm font-semibold mt-4 text-center underline cursor-pointer"
//                 onClick={() => setOpen(!open)}
//               >
//                 {open ? "-" : "+"} de détails
//               </h6>
//             </div>
//           </div>
//         </div>
//       </section>
//       {open && <ResidenceOrder renderState={renderState} features={data.features} />}
//     </>
//   );
// };

// export default Slug;

// const ResidenceOrder = ({ renderState, features }) => {
//   const dispatch = useDispatch();
//   const weekDays = ["Su.", "Mo.", "Tu.", "We.", "Th.", "Fr.", "Sa."];
//   const [values, setValues] = useState([new DateObject()]);

//   var getStartDate = moment(
//     `${values[0].year}/${values[0].month.number}/${values[0].day}`
//   );
//   let getEndDate = moment(
//     values.length >= "2" &&
//     `${values[1].year}/${values[1].month.number}/${values[1].day}`
//   );
//   var totalDays = getEndDate.diff(getStartDate, "days");

//   useEffect(() => {
//     getEndDate._isValid && dispatch(calculateDays(totalDays));
//     dispatch(
//       startEndDate({
//         startDate: `${values[0].year}/${values[0].month.number}/${values[0].day}`,
//         endDate: getEndDate._isValid
//           ? `${values[1].year}/${values[1].month.number}/${values[1].day}`
//           : `${values[0].year}/${values[0].month.number}/${values[0].day}`,
//       })
//     );
//     getEndDate._isValid ? renderState(totalDays + 1) : renderState(1);
//   }, [values]);

//   return (
//     <>
//       <div className="container p-4 md:pl-0 md:pr-0 md:pb-0 mx-auto mb-10 md:grid md:grid-cols-5 pt-3 gap-4">
//         <div className="pl-0 col-span-3 md:border-r-2 border-gray-200 md:px-4">
//           <h6 className="font-medium text-xl mt-4">
//             {getEndDate._isValid ? totalDays + 1 : 1} nuits à{" "}
//             <strong>Poppengine</strong>
//           </h6>
//           <p className="text-sm mt-1 text-gray-700">
//             {values[0].weekDay.shortName}. {values[0].day}{" "}
//             {values[0].month.name} -{" "}
//             {getEndDate._isValid && values[1].weekDay.shortName}.{" "}
//             {getEndDate._isValid && values[1].day}{" "}
//             {getEndDate._isValid && values[1].month.name}
//           </p>
//           <Calendar
//             value={values}
//             onChange={setValues}
//             onClick={() => alert("111")}
//             range
//             multiple
//             numberOfMonths={2}
//             showOtherDays
//             className="_calendar"
//             weekDays={weekDays}
//           />
//           <div>
//             <button className="text-sm font-normal underline flex justify-end w-full pr-7 mt-4 leading-8">
//               Effacer la sélection
//             </button>
//           </div>
//         </div>
//         <div className="col-span-2 px-4 pt-2">
//           <h3 className="font-normal text-[#1E1E1E] text-xl">
//             À propos de ce logement
//           </h3>
//           <ul className="mt-5">
//             {features.map((item, i) => {
//               return (
//                 <li
//                   key={i}
//                   className="flex mb-7 justify-start gap-4 items-center"
//                 >
//                   <Image
//                     src={item.icon.asset.url}
//                     alt={item.title}
//                     width={20}
//                     height={20}
//                   />
//                   <p className="text-sm ">{item.title}</p>
//                 </li>
//               );
//             })}
//           </ul>
//           <h3 className="font-normal mt-12 text-xl text-[#1E1E1E]">
//             <strong>Avis des clients</strong> - 3 commentaires
//           </h3>
//           <div className="grid grid-cols-2 gap-8 mt-6">
//             <div>
//               <div>
//                 <h5 className="font-semibold text-sm">Qualité-prix</h5>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="70" max="100" /> <span>7,3</span>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <div className="flex items-center gap-1">
//                   <AiFillStar />
//                   <h5 className="font-semibold text-sm">Confort</h5>
//                 </div>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="70" max="100" /> <span>7,3</span>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <div className="flex items-center gap-1">
//                   <AiFillStar />
//                   <h5 className="font-semibold text-sm">Localisation</h5>
//                 </div>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="70" max="100" /> <span>4,3</span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <div>
//                 <h5 className="font-semibold text-sm">Equipement</h5>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="50" max="100" /> <span>3,3</span>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <div className="flex items-center gap-1">
//                   <AiFillStar />
//                   <h5 className="font-semibold text-sm">Propreté</h5>
//                 </div>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="100" max="100" /> <span>5,0</span>
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <div className="flex items-center gap-1">
//                   <h5 className="font-semibold text-sm">Communication</h5>
//                 </div>
//                 <div className="flex items-center gap-3 text-xs">
//                   <progress id="file" value="30" max="100" /> <span>2,3</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button className="flex justify-center underline mt-8 w-full">
//             Afficher les commentaires
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// const projectSlugQuery = `*[_type == "residences" && slug.current == $slug][0]{
//   _id,
//   "title": title[$locale],
//   "location": location[$locale], 
//   slug,
//   feature_poster{
//     asset->{
//       url
//     }
//   },
//   feature_banner{
//     asset->{
//       url
//     }
//   },
//   "short_info" : short_info[$locale],
//   gallery[]{
//     asset->{
//       url
//     }
//   },
//   price_per_unit,
//   "description" : description[$locale],
//   features[]{
//     "title" : title[$locale],
//     icon{
//       asset->{
//         url
//       }
//     }
//   }
// }`;


// export async function getStaticPaths() {

//   const paths = await sanityClient.fetch(`
//   *[_type == "residences" && defined(slug.current)]{
//        "params": {
//          "slug" : slug.current,
//        }
//      }
//   `);
//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {

//   const { slug } = context.params;
//   // const locale = context.locale;
//   const locale = 'en';
//   const project = await sanityClient.fetch(projectSlugQuery, { slug, locale });
//   return {
//     props: {
//       data: project ,
//       preview: true,
//     },
//   };
// }

import React from 'react'

export default function SlugC() {
  return (
    <div>SlugC</div>
  )
}