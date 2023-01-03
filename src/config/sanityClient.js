import { createClient } from "next-sanity";
  const config = {
      projectId: "5x5wnf9u",
      dataset: "production",
      apiVersion: "2021-10-14",
      useCdn: false
  }
  
  export const sanityClient = createClient(config);