import React from 'react'


const Hero = () => {
  const words = ['Join exciting cricket tournaments, feel', ' the spirit of the game, and enjoy a', 'seamless, engaging user experience', ' on our platform!'];
  const words2 = ['Cricket', 'play', 'experience']
  return (
    <>
      <section className='relative px-10 max-md:px-5 min-h-[78vh] max-md:min-h-[60vh] max-lg:-z-20  flex items-end justify-between max-xl:flex-col max-xl:justify-center'>
        <div className="w-1/2 max-xl:w-full max-xl:order-2  xl:min-h-[60vh] mb-10 flex items-end justify-start ">
          <div className="xl:w-[60%] w-full max-md:min-h-[25vh]  min-h-[20vh] flex items-end flex-col">
            {
              words?.map((t, ind) => (
                <div className="w-full h-10 max-md:h-max  overflow-hidden max-md:mb-5">
                  <p className='text-black font-semibold text-xl max-md:text-lg whitespace-nowrap w-full h-full' id='textHideShow'>{t}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-1/2 max-xl:w-full xl:min-h-[60vh] min-h-[35vh] mb-10 flex items-end text-right justify-end ">
          <div className="w-full  xl:min-h-[54vh] min-h-[35vh] flex items-end flex-col justify-end">
            {
              words2?.map((t, ind) => (
                <div className="w-full -z-10 xl:h-[9rem] max-xl:h-[8.1rem] max-lg:h-[7rem] max-md:h-[5.5rem]  overflow-hidden flex items-end justify-end">
                  <p className='w-full h-full text-black font-bold xl:text-[7rem] lg:text-[5.8rem] md:text-[4.9rem] sm:text-5xl text-5xl uppercase' id='textHideShow'>{t}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute bottom-0 w-[95%] -z-20  borderColor"></div>
      </section>
      <div id="hero-shape" className='mt-20 -z-10'>
        <div id="hero-1"></div>
        <div id="hero-2"></div>
        <div id="hero-3"></div>
      </div>
    </>
  )
}

export default Hero