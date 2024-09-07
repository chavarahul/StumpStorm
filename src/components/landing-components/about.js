import React from 'react';

const Page2Bottom = () => {
  return (
    <div className="min-h-[50vh] w-full py-[4.5vw] lg:mt-20 mt-10 px-10 flex items-center justify-between relative z-10">
      <h1 className="text-[3vw] w-[60%] leading-[4vw] text-black font-semibold">
      Immerse yourself in the world of cricket with our dynamic platform, where tournaments come alive through seamless interactions and unparalleled excitement </h1>
      <div className="w-[20%] -mt-10">
        <img
          src={"https://i.pinimg.com/1200x/d1/32/0f/d1320feaa1cd18aeff4d6ba6550399e0.jpg"}
          alt="Holding Thumb"
          className="w-full rounded-[20px]"
        />
        <p className="font-normal mt-2 text-[1vw] text-black">
        Passionate about bringing cricket to life, solving challenges, and collaborating to turn your vision into reality.
        </p>
      </div>
    </div>
  );
};

export default Page2Bottom;
