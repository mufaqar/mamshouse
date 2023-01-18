import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";

export default function HomeCard({ data }) {
  // console.log("🚀 ~ data", data);

  return (
    <>
      <div className="grid px-2 grid-cols-1 container mx-auto md:grid-col-2 lg:grid-cols-3 mt-20">
        <figure className="relative rounded-[30px]">
          <Image
            src={data?.feature_poster?.asset.url}
            alt="hero card"
            width={500}
            height={550}
            className="w-full _shadow h-[550px] rounded-[30px]"
          />
          <div className="flex flex-col justify-end w-full px-8 h-full absolute top-0 rounded-[22px]">
            <div className="flex justify-between text-white pb-5 items-center">
              <h4 className="text-sm">
                <b>Poppengine,</b> Sénégal
              </h4>
              <Link href={`/residences/${data.slug?.current}`} className="hover:-mr-2 transition-all ease-linear">
                <HiArrowNarrowRight size={30} />
              </Link>
            </div>
          </div>
        </figure>
        <div className="md:pl-10 lg:pl-24 md:pt-0 mt-8 lg:pt-12 w-full md:max-w-[680px] col-span-2">
          <h2 className="sub-heading font-bangla-mn">{data.title}</h2>
          <div className="portable_content">
            <BlockContent
              blocks={data?.description}
              serializers={{ 
                marks: { 
                    link: props => {
                        <div className="myCustomLinkClass" >{props.children}</div>
                    } 
                }
            }}
              projectId={"5x5wnf9u"}
              dataset={"production"}
            />
          </div>

          <div className="mt-10"><Link href={`/residences/${data.slug?.current}`} className="main-btn">réserver maintenant</Link></div>
        </div>
      </div>
    </>
  );
}
