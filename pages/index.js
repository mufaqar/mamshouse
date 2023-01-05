
import Head from "next/head";
// import { Inter } from "@next/font/google";
import { sanityClient } from "../src/config/sanityClient";
import { Filter, HomeCard, Main } from "../src/components";


// const inter = Inter({ subsets: ["latin"] });
export default function Home({ booking }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Main/>
     <section className="-mt-32"><Filter/></section>
     <section className="mt-12 mb-20"> <HomeCard/></section>
    </>
  );
}



export async function getServerSideProps(pageContext) {
  const locale = pageContext.locale;
  const booking = await sanityClient.fetch(
    `*[_type == "booking"]{
    "title": title[$locale],
    _id
  }`,
    { locale }
  );

  return {
    props: {
      booking,
    },
  };
}


