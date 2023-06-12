import React from "react";
import Slider from "react-slick";
// slick slider style imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { heroCard } from "../../public";
import Image from "next/image";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { residence } from "../../public/mock.data/mockdata";


const SliderCard = ({item}) => {
  const { _id } = item

  return (
    <>
      <div className="p-2 mt-2 ">
        <div className="">
          <Image
            src={item.feature_poster?.asset.url}
            alt="hero card"
            width={500}
            height={520}  
            className="w-full shadow-lg h-[520px] rounded-[20px]"
          />
          <div className="flex flex-col  justify-end top-[26px] -mt-[7.5rem] text-white w-full  ">
            <div className="flex justify-between items-center bg-gradient-to-t from-black/50 to-transparent rounded-[20px] rounded-t-none p-3 pt-10">
              <div>
                <p>
                  {item?.location}
                </p>
                <Link href={`residences/${item.slug.current}`}>
                  <h2 className="font-bangla-mn sub-heading text-2xl lg:text-3xl mt-2">
                    {item.title}
                  </h2>
                </Link>
              </div>
              <Link href={`residences/${item.slug.current}`} className="hover:-mr-2 transition-all ease-linear">
                <HiArrowNarrowRight size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ResidenceSlider({residencesData}) {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow:3,
    speed: 500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-9 container mx-auto p-1 md:p-0 mb-10" id="residences">
      <h1 className="sub-heading font-bangla-mn pl-3 capitalize">Nos Résidences</h1>
      <div className="relative">
        <Slider {...settings}>
          {
            residencesData.map((item, i) => (
            <SliderCard item={item} key={i}/>
          ))
        }
        </Slider>
        <div className="absolute top-0 -right-1 h-full w-16 _sideBlurbg"></div>
      </div>
    </section>
  );
}
