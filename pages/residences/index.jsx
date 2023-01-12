import React from "react";
import { PageBanner, ResidenceSlider } from "../../src/components";
import ResidenceBannerImage from "../../public/images/residence-banner.png";
import { sanityClient } from "../../src/config/sanityClient";

export default function Residences({ residences }) {
 
  return (
    <div>
      <PageBanner
        src={ResidenceBannerImage}
        heading=" Les Residences"
        info="Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere cursus in cursus eleifend. Nisi in dolor aliquet nunc quis tortor. Fusce at enim et amet viverra. Dui suspendisse scelerisque justo ultrices in convallis orci id. Purus at elit nulla pretium neque purus eget."
        pageType="residence"
      />
      <ResidenceSlider residencesData={residences} />
    </div>
  );
}

export async function getServerSideProps(pageContext) {
  const locale = pageContext.query.lang || 'en';
  const residences = await sanityClient.fetch(
    `*[_type == "residences"]{
        _id,
        "title": title[$locale],
        "location": location[$locale], 
        slug,
        feature_poster{
          asset->{
            url
          }
        },
        feature_banner{
          asset->{
            url
          }
        },
        "short_info" : short_info[$locale],
        gallery[]{
          asset->{
            url
          }
        },
        price_per_unit,
        "description" : description[$locale],
        features[]{
          title,
          icon{
            asset->{
              url
            }
          }
        }


  }`,
    { locale }
  );

  return {
    props: {
      residences,
    },
  };
}
