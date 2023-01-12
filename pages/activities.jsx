import React from "react";
import { ActivitiesPageBanner } from "../public";
import { PageBanner } from "../src/components";
import Image from "next/image";
import { sanityClient } from "../src/config/sanityClient";


export default function Activities({activities}) {
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
          {activities.map((item, i) => {
            return (
              <div key={i} className="md:grid gap-10 mt-10 md:mt-24 grid-cols-2">
                <div className={i%2 === 1 && 'bg-red-200 order-2'}>
                  <img
                    src={item.feature_image?.asset?.url}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>
                <div className={`lg:pr-[30%] mt-6 md:mt-0 ${i%2 === 1 && "text-right lg:pr-0 lg:pl-[30%]"}`}>
                  <h2 className="sub-heading ">{item.title}</h2>
                  <p className="text-[15px] font-normal mt-4 md:mt-4 lg:mt-10">{item.description}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}




export async function getServerSideProps(pageContext) {
  const locale = pageContext.locale;
  const activities = await sanityClient.fetch(
    `*[_type == "activities"]{
        _id,
        "title": title[$locale],
        "description": description[$locale],
        feature_image{
          asset->{
            url
          }
        },
  }`,
    { locale }
  );

  return {
    props: {
      activities,
    },
  };
}