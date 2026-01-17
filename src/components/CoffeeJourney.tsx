"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CoffeeBranchImage, CoffeeBeansScatteredImage, CoffeeLeafImage } from "./CoffeeDecorationsImage";

gsap.registerPlugin(ScrollTrigger);

interface JourneyStep {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const journeySteps: JourneyStep[] = [
    {
        number: "01",
        title: "Highland Origins",
        description:
            "Our coffee grows in the misty highlands of Ethiopia at elevations between 1,500 and 2,200 meters, where the climate and rich volcanic soil create the perfect conditions for exceptional flavor development.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Hand-Picked Selection",
        description:
            "Every cherry is hand-picked at peak ripeness by our partner farmers. This selective harvesting ensures only the finest beans make it into our lots, preserving the nuanced flavors unique to each region.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Artisan Processing",
        description:
            "Whether washed for clarity or natural for fruit-forward complexity, our processing methods are refined over generations. Each bean is carefully dried and sorted to meet our exacting quality standards.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Expert Cupping",
        description:
            "Our Q-graders evaluate every lot through rigorous cupping sessions, scoring for aroma, flavor, acidity, and body. Only beans that meet our specialty threshold are selected for export.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Global Journey",
        description:
            "From our warehouses in Addis Ababa, our green coffee travels to roasters in over 25 countries, carrying with it the authentic taste of Ethiopian coffee heritage and the stories of our farming communities.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
];

export default function CoffeeJourney() {
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the connecting line
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 60%",
                        },
                    }
                );
            }

            // Animate each step
            if (stepsRef.current) {
                const steps = stepsRef.current.querySelectorAll(".journey-step");
                steps.forEach((step, index) => {
                    gsap.fromTo(
                        step,
                        { x: index % 2 === 0 ? -60 : 60, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: step,
                                start: "top 80%",
                            },
                        }
                    );
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="story"
            className="section-padding bg-cream relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

            {/* Organic Stylized Decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none select-none transform -rotate-12 -translate-x-1/3 -translate-y-1/4 opacity-10">
                <CoffeeBranchImage className="w-full h-full" />
            </div>

            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] pointer-events-none select-none transform rotate-45 translate-x-1/3 opacity-10">
                <CoffeeLeafImage className="w-full h-full" />
            </div>

            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none select-none transform rotate-90 -translate-x-1/3 translate-y-1/3 opacity-10">
                <CoffeeBranchImage className="w-full h-full" />
            </div>

            <div className="absolute top-2/3 left-20 w-40 h-40 pointer-events-none select-none animate-float-slow opacity-15">
                <CoffeeBeansScatteredImage className="w-full h-full rotate-45" />
            </div>

            <div className="absolute bottom-1/3 right-10 w-48 h-48 pointer-events-none select-none animate-float-delayed opacity-10">
                <CoffeeBeansScatteredImage className="w-full h-full -rotate-12" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                        The Journey
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-4 mb-6"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        From Seed to Cup
                    </h2>
                    <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
                        Every cup of Green Acres coffee tells a story — of highland origins,
                        artisan craftsmanship, and a commitment to excellence that spans generations.
                    </p>
                </div>

                {/* Journey timeline */}
                <div ref={stepsRef} className="relative">
                    {/* Connecting line */}
                    <div
                        ref={lineRef}
                        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-forest to-gold origin-top hidden md:block"
                        style={{ transform: "translateX(-50%)" }}
                    />

                    {/* Steps */}
                    <div className="space-y-16 md:space-y-24">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.number}
                                className={`journey-step flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Content card */}
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div
                                        className={`bg-white rounded-2xl p-8 shadow-lg shadow-forest/5 border border-cream-dark ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                                            } max-w-md`}
                                    >
                                        <span className="text-gold text-5xl font-bold opacity-30">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-forest mt-2 mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-foreground-muted leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center icon */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-forest text-gold flex items-center justify-center shadow-lg shadow-forest/20">
                                        {step.icon}
                                    </div>
                                </div>

                                {/* Spacer for alignment */}
                                <div className="flex-1 hidden md:block" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <p className="text-foreground-muted mb-6 text-lg">
                        Experience the difference that heritage and quality make
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-all hover:scale-105 shadow-lg"
                    >
                        Partner With Us
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
