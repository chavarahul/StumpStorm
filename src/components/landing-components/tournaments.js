import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import your images
import winning from "../assets/winning.jpg";
import winning1 from "../assets/winning1.jpg";
import winning2 from "../assets/winning2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const imgs = [winning, winning1, winning2]; // Use only 3 images for the carousel

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const HorizontalScrollCarousel = () => {
    const sectionRef = useRef(null);
    const [imgIndex, setImgIndex] = useState(0);
    const dragX = useMotionValue(0);

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
                    start: isDesktop ? "top 45%" : isTablet ? "top 35%" : "top 15%",
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

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragX]);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
            setImgIndex((prev) => prev + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((prev) => prev - 1);
        }
    };

    return (
        <section ref={sectionRef} className="relative min-h-[70vh] mt-20 px-10">
            <h1 className="text-center mb-7 text-4xl font-semibold textColorChange text-black">Outstanding Cricket Match Performers</h1>
            <div className="relative overflow-hidden py-8 h-full">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                    }}
                    style={{
                        x: dragX,
                    }}
                    animate={{
                        translateX: `-${imgIndex * 100}%`,
                    }}
                    transition={SPRING_OPTIONS}
                    onDragEnd={onDragEnd}
                    className="flex cursor-grab items-center active:cursor-grabbing"
                >
                    <Images imgIndex={imgIndex} />
                </motion.div>

                <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
                {/* <GradientEdges /> */}
            </div>
        </section>
    );
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {imgs.map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: 'no-repeat'
                            //   height:
                        }}

                        animate={{
                            scale: imgIndex === idx ? 1 : 0.8,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-[4/3] w-full shrink-0 rounded-xl  h-[30rem]" // Adjusted width
                    />
                );
            })}
        </>
    );
};

const Dots = ({ imgIndex, setImgIndex }) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setImgIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
                            }`}
                    />
                );
            })}
        </div>
    );
};

export default HorizontalScrollCarousel;
