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
  const {id} = item

  return (
    <>
      <div className="p-2 mt-2 ">
        <div className="relative">
          <Image
            src={heroCard }
            alt="hero card"
            className="w-full h-full min-h-[500px] rounded-[20px]"
          />
          <div className="absolute flex flex-col justify-end top-0 text-white w-full rounded-[20px] h-full p-3 px-5">
            <div className="flex justify-between items-center">
              <div>
                <p>
                  {item.location}
                </p>
                <Link href={`residences/${item.slug}`}>
                  <h2 className="font-bangla-mn sub-heading text-3xl mt-2">
                    {item.title}
                  </h2>
                </Link>
              </div>
              <Link href={`residences/${item.slug}`} className="hover:-mr-2 transition-all ease-linear">
                <HiArrowNarrowRight size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ResidenceSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="mt-9 container mx-auto p-1 md:p-0 mb-10">
      <h1 className="sub-heading font-bangla-mn capitalize">Nos Résidences</h1>
      <div className="relative">
        <Slider {...settings}>
          {
            residence.map((item, i) => (
            <SliderCard item={item} key={i}/>
          ))
        }
        </Slider>
        <div className="absolute top-0 -right-1 h-full w-16 _sideBlurbg"></div>
      </div>
    </section>
  );
}
