import React from 'react';

const Page2Bottom = () => {
  return (
    <div className="h-[80vh] w-full py-[4.5vw] flex items-center justify-between relative z-10">
      <h1 className="text-[4vw] w-[60%] leading-[4vw]">
        We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
      </h1>
      <div className="w-[20%]">
        <img
          src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
          alt="Holding Thumb"
          className="w-full rounded-lg"
        />
        <p className="font-light mt-2 text-[1vw]">
          We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
        </p>
      </div>
    </div>
  );
};

export default Page2Bottom;
