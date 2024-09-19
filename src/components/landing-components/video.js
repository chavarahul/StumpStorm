import React from 'react';
import cricVideo from '../common/videoplayback.mp4';

const Video = () => {
  return (
    <section className=' px-10 max-lg:px-5 mt-10 min-h-[60vh] z-[99] flex-center max-lg:min-h-[35vh] max-md:min-h-[15vh]'>
      <video
        autoPlay
        loop
        muted
        src={cricVideo}
        className='max-lg:'
      ></video>
    </section>
  );
};

export default Video;
