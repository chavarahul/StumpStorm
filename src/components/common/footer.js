import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={`${location.pathname === '/events' ? "min-h-[50vh]" : "min-h-[35vh] "} relative w-full flex flex-col items-center mt-10 lg:mt-28 bg-neutral-900 text-white`}>
      <div
        className={`${location.pathname === '/events' && 'mt-10'} flex items-center justify-center min-h-[30vh] text-center uppercase xl:text-[10rem] lg:text-9xl md:text-7xl max-lg:min-h-[15vh] max-md:text-5xl max-lg:w-[90%] border-b border-[#EFEAE3] font-semibold`}
      >
        Stump Storm
      </div>
      <div className={` mb-7 flex items-center justify-between w-[73%] max-md:flex-col ${location.pathname === '/events' ? "mt-10" : "mt-4"}`}>
        <p>© 2024 Stump Storm. All rights reserved.</p>
        <div className="social flex space-x-4 max-md:mt-10">
          <a href="https://github.com/chavarahul" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:chavarahul7@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
