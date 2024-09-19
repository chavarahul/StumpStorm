import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { TimelineDemo } from "./time";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollCarousel = () => {
    const sectionRef = useRef(null);
    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: "(min-width: 1024px)",
                isTablet: "(min-width: 768px) and (max-width: 1023px)",
                isMobile: "(max-width: 767px)",
            },
            (context) => {
                let { isDesktop, isTablet } = context.conditions;

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: isDesktop ? "top 45%" : isTablet ? "top 35%" : "top 30%",
                    onEnter: () => {
                        gsap.to("body", { backgroundColor: "#171717", duration: 1 });
                        document.querySelectorAll(".textColorChange").forEach((el) => {
                            el.style.color = "#FFFFFF";
                        })
                    },
                    onLeave: () => {
                        gsap.to("body", { backgroundColor: "#EFEAE3", duration: 1 });
                        document.querySelectorAll(".textColorChange").forEach((el) => {
                            el.style.color = "#000000";
                        })
                    },
                    onLeaveBack: () => {
                        gsap.to("body", { backgroundColor: "#EFEAE3", duration: 1 });
                        document.querySelectorAll(".textColorChange").forEach((el) => {
                            el.style.color = "#000000";
                        })
                    },
                    onEnterBack: () => {
                        gsap.to("body", { backgroundColor: "#171717", duration: 1 });
                        document.querySelectorAll(".textColorChange").forEach((el) => {
                            el.style.color = "#FFFFFF";
                        })
                    },
                });
            }
        );

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[70vh] mt-20 px-10 max-sm:px- max-md:mt-10">
            <TimelineDemo/>
        </section>
    );
};

export default HorizontalScrollCarousel;
