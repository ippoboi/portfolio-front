const Footer = () => {
  return (
    <div className="sticky bg-primary-black w-full">
      <div className="max-w-6xl mx-auto py-5 px-5 flex justify-between items-center mt-10">
        <div className="text-secondary-white ">
          <p className="small_title">
            Dimitar <br /> Dimitrov
          </p>
          <p className="small_spaced_text font-light">
            GROW YOUR BUSINESS
            <br /> WITH A WEBSITE
          </p>
        </div>
        <div className="text-white">
          <p>Socials</p>
        </div>
      </div>
      <div>
        <p className="text-secondary-white text-center small_spaced_text mb-[18px] font-light text-[14px] mt-[50px]">
          COPYRIGHT - DIMITAR DIMITROV @2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
