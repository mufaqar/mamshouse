import React from "react";
import { ActivitiesPageBanner } from "../public";
import { PageBanner } from "../src/components";
import { EventsData } from "../public/mock.data/events";
import Image from "next/image";

export default function Activities() {
  return (
    <div>
      <PageBanner
        src={ActivitiesPageBanner}
        subHeading="SENEGAL, POPPENGINE"
        heading="ACTIVITES"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
      />

      <section className="container mx-auto md:mt-20 mb-20 p-2 md:p-0">
        <ul>
          {EventsData.map((item, i) => {
            console.log(
              "🚀 ~ file: activities.jsx:18 ~ EventsData.map ~ item",
              item
            );
            return (
              <div key={i} className="md:grid gap-10 mt-10 md:mt-24 grid-cols-2">
                <div className={i%2 === 1 && 'bg-red-200 order-2'}>
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div className={`lg:pr-[30%] mt-6 md:mt-0 ${i%2 === 1 && "text-right lg:pr-0 lg:pl-[30%]"}`}>
                  <h2 className="sub-heading ">{item.title}</h2>
                  <p className="text-[15px] font-normal mt-4 md:mt-4 lg:mt-10">{item.info}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
