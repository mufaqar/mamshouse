import React from 'react'
import { PageBanner, ResidenceSlider } from '../../src/components'
import ResidenceBannerImage from '../../public/images/residence-banner.png'


export default function Residences() {
  return (
    <div>
      <PageBanner src={ResidenceBannerImage}/>
      <ResidenceSlider/>
    </div>
  )
}
