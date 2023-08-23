const Footer = () => {
  return (
    <div className="sticky bg-primary-black w-full">
      <div className="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl max-w-xs mx-auto py-5 px-5 flex md:flex-row flex-col gap-16 md:gap-0 justify-between md:items-center items-start mt-10">
        <div className="text-secondary-white">
          <p className="small_title">
            Dimitar <br /> Dimitrov
          </p>
          <p className="small_spaced_text font-light">
            GROW YOUR BUSINESS
            <br /> WITH A WEBSITE
          </p>
        </div>
        <div className="text-white w-full text-center">
          <p>Socials</p>
        </div>
      </div>
      <div>
        <p className="text-secondary-white text-center tracking-small-text uppercase mb-[18px] font-light text-[10px] lg:text-[12px] font-light mt-[50px]">
          COPYRIGHT - DIMITAR DIMITROV @2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
