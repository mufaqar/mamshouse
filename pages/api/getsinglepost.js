// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from "../../src/config/sanityClient";

export default async function handler(req, res) {
  const {id, lang} = req.body
  console.log('req.body', req.body)
  const paths = await sanityClient.fetch(`
  *[_type == "residences" && slug.current == $id]{
       _id,
       "title": title[$lang],
       feature_banner{
        asset->{
          url
        }
      },
      slug,
      feature_poster{
        asset->{
          url
        }
      },
      "short_info" : short_info[$lang],
      gallery[]{
        asset->{
          url
        }
      },
      price_per_unit,
      "description" : description[$lang],
      features[]{
        "title" : title[$lang],
        icon{
          asset->{
            url
          }
        }
      }
     }
  `, { id, lang });

  res.status(200).json(paths);
}
