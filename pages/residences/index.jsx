import React from "react";
import { PageBanner, ResidenceSlider } from "../../src/components";
import ResidenceBannerImage from "../../public/images/residence-banner.png";

export default function Residences() {
  return (
    <div>
      <PageBanner
        src={ResidenceBannerImage}
        heading=" Les Residences"
        info="Lorem ipsum dolor sit amet consectetur. In ipsum ac in posuere cursus in cursus eleifend. Nisi in dolor aliquet nunc quis tortor. Fusce at enim et amet viverra. Dui suspendisse scelerisque justo ultrices in convallis orci id. Purus at elit nulla pretium neque purus eget."
        pageType="residence"
      />
      <ResidenceSlider />
    </div>
  );
}
