// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from "../../src/config/sanityClient";

export default async function handler(req, res) {
  const {id} = req.body
  console.log("🚀 ~ id", id)
  const paths = await sanityClient.fetch(`
  *[_type == "residences" && _id == $id]{
       _id,
       feature_banner{
        asset->{
          url
        }
      },
     }
  `, { id });

  res.status(200).json({ name: paths });
}
