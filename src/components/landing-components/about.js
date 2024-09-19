import React from 'react';

const About = () => {
  return (
    <section className="min-h-[50vh] w-full py-[4.5vw] lg:mt-20 mt-6 max-lg:flex-col px-10 max-sm:px-4 flex items-center  justify-between relative z-10" id='about'>
      <h1 className="text-[4.4vw] xl:text-[2.7vw] max-sm:leading-10 max-lg:mt-10 max-lg:w-full w-[60%] max-lg:order-2 max-lg:leading-[7vw] leading-[4vw] text-black font-semibold textColorChange max-md:text-center" >
        Immerse yourself in the world of cricket with our dynamic platform, where tournaments come alive through seamless interactions and unparalleled excitement
      </h1>
      <div className="w-[30%] -mt-10 max-lg:w-full  max-lg:h-[28rem] max-md:h-[20rem]">
        <img
          src={"https://i.pinimg.com/1200x/d1/32/0f/d1320feaa1cd18aeff4d6ba6550399e0.jpg"}
          alt="Holding Thumb"
          className="w-full rounded-[30px] h-full"
        />
      </div>
    </section>
  );
};

export default About;
