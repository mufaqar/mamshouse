import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PageBanner } from "../../src/components";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Calendar } from "react-multi-date-picker";
import { DateObject } from "react-multi-date-picker";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  calculateDays,
  startEndDate,
} from "../../src/store/features/BookingTabSlice/TotalBookingDays";
import { useRouter } from "next/router";
import axios from "axios";
import Modal from "react-modal";
import ArrowDownImg from "../../public/svg/arrow-down.svg";
import NotFound from "../404";
import Loading from "../../src/components/loading";
import Head from "next/head";

const Slug = ({ slug }) => {
  const router = useRouter();
  const id = router.query.slug;
  const lang = router.query.lang || "en";

  const getTotalDays = useSelector((state) => state.TotalBookingDays.days);
  const getStartDate = useSelector((state) => state.TotalBookingDays.startDate);
  const getEndDate = useSelector((state) => state.TotalBookingDays.endDate);

  const [data, setData] = useState();
  // console.log("🚀 ~ ~ Slug ~ data", data);
  const [shortInfo, setShortInfo] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState(false);
  const [days, setDays] = useState(getTotalDays);
  const [showComponent, setShowComponent] = useState(false);

  const [EmptyDateAlertModelState, setEmptyDateAlertModelState] =
    useState(false);

  const title = data?.slug.current;
  const slugParms = slug;

  const renderState = (daysProps) => {
    setDays(daysProps);
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    async function getSinglePost() {
      await axios
        .post("/api/getsinglepost", { id: slug, lang })
        .then(function (response) {
          setData(response.data[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getSinglePost();
    setTimeout(() => {
      setShowComponent(true);
    }, 4000);
  }, []);

  const OrderSubmit = () => {
    const orderdata = {
      title: data.title,
      getStartDate,
      getEndDate,
      totalprice: 230,
      paymentApproved: false,
      name: data.name,
      email: data.email,
      mobile: data.mobile,
    };
    // sessionStorage.setItem("item", JSON.stringify(data2));

    fetch(`https://mamshouse.vercel.app/api/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({
        orderdata,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("2nd responce", response);
        window.location.href = response.session.url;
      });
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Head>
        <title>
          {data?.title} | {process.env.NEXT_PUBLIC_SITE_NAME}
        </title>
        <meta name="description" content={data?.short_info} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {title === slugParms ? (
        <>
          <PageBanner
            srcUrl={data?.feature_banner?.asset?.url}
            heading="Les Residences"
            info={data?.short_info}
            pageType="residence"
            ArrowDownImg={ArrowDownImg}
          />
          <section className="mt-9 container mx-auto p-2 md:p-0 mb-5">
            <Link href="/residences">
              <h1 className="text-sm font-bangla-mn flex capitalize">
                <HiArrowNarrowLeft size={14} className="-mt-[0.001] mr-1" /> Nos
                Résidences
              </h1>
            </Link>
            <h1 className="sub-heading font-bangla-mn capitalize">
              "{data?.title}"
            </h1>
            {/* Gallery */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-3 ">
              {/* 1 */}
              <div className="relative max-h-[700px] col-span-2">
                <Image
                  src={data?.gallery[0]?.asset?.url}
                  alt={data?.title}
                  width={500}
                  height={500}
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
                      Afficher la description
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
                      {data?.description}
                    </p>
                  )}
                </div>
              </div>
              {/* 2 */}
              <div className="md:max-h-[700px] col-span-2 md:col-span-1">
                <div className="h-[40%]">
                  <Image
                    src={data?.gallery[1]?.asset?.url}
                    alt={data?.title}
                    width={500}
                    height={500}
                    className="w-full h-full _shadow object-cover rounded-3xl"
                  />
                </div>
                <div className="h-[60%] pt-4 md:pt-6">
                  <Image
                    src={data?.gallery[2]?.asset?.url}
                    alt={data?.title}
                    width={500}
                    height={500}
                    className="w-full h-full _shadow object-cover rounded-3xl"
                  />
                </div>
              </div>
              {/* 3 */}
              <div className="col-span-2 md:col-span-3 lg:col-span-2 md:max-h-[700px]">
                <div className="md:h-[50%]">
                  <Image
                    src={data?.gallery[3]?.asset?.url}
                    alt={data?.title}
                    width={500}
                    height={500}
                    className="w-full h-full _shadow object-cover rounded-3xl"
                  />
                </div>
                <div className="md:h-[50%] pt-6 p-6">
                  <h6 className=" text-xl">
                    <strong className="text-4xl font-semibold">
                      {days === 1
                        ? data?.price_per_unit
                        : days * data?.price_per_unit}
                      €
                    </strong>
                    <sub className="ml-1">
                      {days === 1 ? "par nuit" : `${days} units`}
                    </sub>
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
                  <button
                    onClick={() => {
                      getStartDate.length > 0 && getEndDate.length > 0
                        ? OrderSubmit()
                        : setEmptyDateAlertModelState(true);
                    }}
                    className={`border w-full p-2 mt-3 rounded-full text-base font-semibold ${
                      !selectDate
                        ? "hover:bg-black cursor-pointer hover:text-white border-black text-black"
                        : "text-gray-200 cursor-default border-gray-200"
                    } `}
                  >
                    réserver maintenant
                  </button>
                  {selectDate && (
                    <p className="mt-1 text-sm text-center text-red-500">
                      Please select date first!
                    </p>
                  )}
                  <h6
                    className={`text-sm font-semibold ${
                      selectDate ? "mt-1" : "mt-3"
                    }  mb-4 text-center underline cursor-pointer`}
                    onClick={() => {
                      setOpen(!open);
                      setSelectDate(false);
                    }}
                  >
                    {open ? "-" : "+"} de détails
                  </h6>
                </div>
              </div>
            </div>
          </section>
          {open && (
            <ResidenceOrder
              renderState={renderState}
              features={data?.features}
            />
          )}
          {/* models triggred when start and end date not exist or length less then or equal 0 */}
          {EmptyDateAlertModelState && (
            <section className="max-w-[500px] fixed bottom-2 left-6">
              <div
                id="alert-2"
                class="flex p-4 mb-4 text-yellow-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-yellow-500"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Info</span>
                <div class="ml-3 text-sm font-medium capitalize mr-3 text-yellow-500">
                  Please select start & end date first!
                </div>
                <button
                  type="button"
                  class="ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                  onClick={()=>setEmptyDateAlertModelState(false)}
                >
                  <span class="sr-only">Dismiss</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </section>
          )}
        </>
      ) : showComponent ? (
        <NotFound />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Slug;

const ResidenceOrder = ({ renderState, features }) => {
  const dispatch = useDispatch();
  const weekDays = ["Su.", "Mo.", "Tu.", "We.", "Th.", "Fr.", "Sa."];
  const [values, setValues] = useState([new DateObject()]);

  var getStartDate = moment(
    `${values[0].year}/${values[0].month.number}/${values[0].day}`
  );
  let getEndDate = moment(
    values.length >= "2" &&
      `${values[1].year}/${values[1].month.number}/${values[1].day}`
  );
  var totalDays = getEndDate.diff(getStartDate, "days");

  useEffect(() => {
    getEndDate._isValid && dispatch(calculateDays(totalDays));
    dispatch(
      startEndDate({
        startDate: `${values[0].year}/${values[0].month.number}/${values[0].day}`,
        endDate: getEndDate._isValid
          ? `${values[1].year}/${values[1].month.number}/${values[1].day}`
          : `${values[0].year}/${values[0].month.number}/${values[0].day}`,
      })
    );
    getEndDate._isValid ? renderState(totalDays + 1) : renderState(1);
  }, [values]);

  return (
    <>
      <div className="container p-4 md:pl-0 md:pr-0 md:pb-0 mx-auto mb-10 md:grid md:grid-cols-5 pt-3 gap-4">
        <div className="pl-0 col-span-3 md:border-r-2 border-gray-200 md:px-4">
          <h6 className="font-medium text-xl mt-4">
            {getEndDate._isValid ? totalDays + 1 : 1} nuits à{" "}
            <strong>Poppengine</strong>
          </h6>
          <p className="text-base mt-1 text-gray-700">
            {values[0].weekDay.shortName}. {values[0].day}{" "}
            {values[0].month.name} -{" "}
            {getEndDate._isValid && values[1].weekDay.shortName}.{" "}
            {getEndDate._isValid && values[1].day}{" "}
            {getEndDate._isValid && values[1].month.name}
          </p>
          <Calendar
            value={values}
            onChange={setValues}
            onClick={() => alert("111")}
            range
            multiple
            numberOfMonths={2}
            showOtherDays
            className="_calendar"
            weekDays={weekDays}
            currentDate
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
            {features.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex mb-7 justify-start gap-4 items-center"
                >
                  <Image
                    src={item.icon.asset.url}
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

export async function getServerSideProps({ params }) {
  const { slug } = params;

  return {
    props: {
      slug,
    },
  };
}
