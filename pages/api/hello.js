// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sanityClient } from "../../src/config/sanityClient";

export default async function handler(req, res) {

  const paths = await sanityClient.fetch(`
  *[_type == "residences" && defined(slug.current)]{
       "params": {
         "slug" : slug.current,
       }
     }
  `)

  res.status(200).json({ name: 'John Doe' })
}
