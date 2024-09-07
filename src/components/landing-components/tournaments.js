import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Example = () => {
    return <HorizontalScrollCarousel />;
};

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
                let { isDesktop, isTablet, isMobile } = context.conditions;

                ScrollTrigger.create({
                    trigger: sectionRef.current,
                    start: isDesktop ? "top 35%" : isTablet ? "top 35%" : "top 15%",
                    // end:isDesktop?'bottom 40%' : isTablet ? "" : "",
                    onEnter: () => {
                        gsap.to("body", { backgroundColor: "#171717", duration: 1 });
                    },
                    onLeave: () => {
                        gsap.to("body", { backgroundColor: "#EFEAE3", duration: 1 });
                    },
                    onLeaveBack: () => {
                        gsap.to("body", { backgroundColor: "#EFEAE3", duration: 1 });
                    },
                    onEnterBack: () => {
                        gsap.to("body", { backgroundColor: "#171717", duration: 1 });
                    },
                    markers: true,
                });
            }
        );

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[70vh] mt-20">
        </section>
    );
};

export default Example;
