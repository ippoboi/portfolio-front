// import { sanity } from "../../../lib/sanity";

import PostTile from "@components/post-tile";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div className="flex flex-col w-full text-primary-black mb-20">
      <section className="min-h-[500px] flex justify-end items-center flex-col lg:items-start gap-20 mx-auto mt-10 lg:mt-0 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-xs">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="text-highlight-purple">SALES</div>
              <div>27 AUGUST 2023</div>
            </div>
            <h1 className="big_title">HOW TO GET HIGH PAYING CLIENTS</h1>
            <div className="h-[1px] w-20 bg-primary-black"></div>
            <p className="small_spaced_text">
              READ TO THIS 5 MINUTE LONG ARTICLE ON HOW TO OUTREACH HIGH PAYING
              CLIENTS, SO YOU CAN LIVE OF YOUR FREELANCING NICHE.
            </p>
            <div className="flex items-center gap-5">
              <Image
                src={"/images/ProfilePhoto.jpg"}
                alt=""
                width={50}
                height={50}
              />
              <div className="small_spaced_text">
                <div className="text-highlight-purple text-[14px]">
                  DIMITAR DIMITROV
                </div>
                <div className="text-[14px]">WEB DESIGNER</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end">
            <div className="w-96 h-96 absolute border border-primary-black -top-[10px] right-[10px]"></div>
            <Image
              src={"/images/Hero-Section-Photo.webp"}
              alt=""
              width={500}
              height={500}
              className="w-96 h-96 object-cover border border-primary-black pb-[10px] pr-[10px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col mx-auto text-primary-black mt-20 xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-xs">
        <div>
          <p>
            READ TO THIS 5 MINUTE LONG ARTICLE ON HOW TO OUTREACH HIGH PAYING
            CLIENTS, SO YOU CAN LIVE OF YOUR FREELANCING NICHE. READ TO THIS 5
            MINUTE LONG ARTICLE ON HOW TO OUTREACH HIGH PAYING CLIENTS, SO YOU
            CAN LIVE OF YOUR FREELANCING NICHE. READ TO THIS 5 MINUTE LONG
            ARTICLE ON HOW TO OUTREACH HIGH PAYING CLIENTS, SO YOU CAN LIVE OF
            YOUR FREELANCING NICHE.
          </p>
        </div>
      </section>
      <section className="bg-primary-black w-full my-20">
        <div className="xl:max-w-5xl lg:max-w-4xl md:max-w-2xl max-w-xs w-full mx-auto py-10">
          <div className="text-white spaced_text">READ MORE</div>
          <div className="flex gap-2 w-full mt-2">
            <PostTile
              PostTitle={
                "TIME TO GET YOUR FIRST CLIENTS AND START LIVING THE LIFE YOU WANT"
              }
              PostDescription={
                "All you need to know to start right away and sell your services or products to clients"
              }
              imageUrl={"/images/Hero-Section-Photo.webp"}
              altTag={"Hero Section Photo"}
            />
            <PostTile
              PostTitle={
                "TIME TO GET YOUR FIRST CLIENTS AND START LIVING THE LIFE YOU WANT"
              }
              PostDescription={
                "All you need to know to start right away and sell your services or products to clients"
              }
              imageUrl={"/images/Hero-Section-Photo.webp"}
              altTag={"Hero Section Photo"}
            />
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="text-primary-black flex flex-col mx-auto gap-10 pt-20 pb-32 justify-center items-center px-5 lg:px-0"
      >
        <div className="text-center">
          <h2 className="lg:text-[24px] text-[16px] tracking-small-title uppercase">
            A BUSINESS IDEA ? A BUSINESS TO GROW ONLINE ?
          </h2>
          <p className="lg:text-[16px] text-[14px] tracking-small-title uppercase text-gray-800 mt-2">
            YOU CAN CONTACT ME TO DISCUSS IT TOGETHER
          </p>
        </div>
        <a className="outline_btn_black mx-auto lg:mx-0" href="#contact">
          WORK WITH ME
        </a>
      </section>
    </div>
  );
}

// export async function getStaticPaths() {
//   const paths = await client.fetch(
//     `*[_type == "post" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.params;
//   const post = await sanity.fetch(
//     `
//     *[_type == "post" && slug.current == $slug][0]
//   `,
//     { slug }
//   );

//   return {
//     props: {
//       post,
//     },
//   };
// }
