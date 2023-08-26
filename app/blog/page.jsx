import HeroPostTile from "@components/hero-post-tile";
import PostTile from "@components/post-tile";

const Blog = () => {
  return (
    <div className="flex flex-col w-full gap-10 pb-10">
      {/* Hero Section */}
      <section className="w-full h-[600px]">
        <HeroPostTile
          PostTitle={
            "TIME TO GET YOUR FIRST CLIENTS AND START LIVING THE LIFE YOU WANT"
          }
          PostDescription={
            "All you need to know to start right away and sell your services or products to clients"
          }
          imageUrl={"/images/Hero-Section-Photo.webp"}
          altTag={"Hero Section Photo"}
        />
      </section>
      {/* Trending */}
      <section className="flex lg:items-start flex-col gap-2 mx-auto mt-10 lg:mt-0 max-w-xs md:max-w-lg lg:max-w-6xl 2xl:max-w-7xl">
        <h2 className="medium_big_title ">Trending</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-2 ">
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
      </section>
      {/* Discover */}
      <section className="flex lg:items-start flex-col gap-2 mx-auto mt-10 lg:mt-0 max-w-xs md:max-w-lg lg:max-w-6xl 2xl:max-w-7xl">
        <h2 className="medium_big_title">Discover</h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-2 ">
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
        <div className="flex items-center justify-center gap-5 my-10 mx-auto">
          <svg
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 20L0.999999 10.5L13 1" stroke="#171717" />
          </svg>
          <div className="flex gap-5">
            <div className="h-2 w-2 bg-highlight-purple"></div>
            <div className="h-2 w-2 bg-highlight-purple"></div>
            <div className="h-2 w-2 bg-highlight-purple"></div>
            <div className="h-2 w-2 bg-highlight-purple"></div>
            <div className="h-2 w-2 bg-highlight-purple"></div>
          </div>
          <svg
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L13 10.5L1 20" stroke="#171717" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Blog;
