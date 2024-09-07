import gsap, { Power4 } from 'gsap'
import React, { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('#loader', {
            y: '-100%',
            duration: 0.8,
            delay: 4.9,
            ease: Power4.easeIn
        });
    }, []);
    return (
        <section className="fixed top-0 left-0 w-full h-full bg-[#000] z-[999] flex-center" id='loader'>
            <h1 className='textBgColor lg:text-[6vw] text-[10vw] font-bold absolute animation-load opacity-0 uppercase'>circket</h1>
            <h1 className='textBgColor lg:text-[6vw] text-[10vw] font-bold absolute animation-load opacity-0 uppercase'>series</h1>
            <h1 className='textBgColor lg:text-[6vw] text-[10vw] font-bold absolute animation-load opacity-0 uppercase'>experiences</h1>
        </section>
    )
}

export default Loader