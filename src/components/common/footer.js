import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa' // Import the GitHub and Envelope (for Gmail) icons

const Footer = () => {
  return (
    <footer className='min-h-[35vh] relative w-full  flex-colm mt-10 lg:mt-28'>
      <div className="flex-center min-h-[30vh] textColorChange text-center uppercase xl:text-[10rem] lg:text-9xl md:text-7xl max-lg:min-h-[15vh] max-md:text-5xl max-lg:w-[90%] border-b border-[#EFEAE3] font-semibold">
        Stump storm
      </div>
      <div className="mt-4 mb-7 flex-bet  w-[73%] max-md:flex-col">
        <p className='textColorChange'>© 2024 Stump storm. All rights reserved.</p>
        <div className="socail flex space-x-4 max-md:mt-10">
          <a href="https://github.com/chavarahul" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30}  />
          </a>
          <a href="mailto:chavarahul7@gmail.com" className=''>
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
