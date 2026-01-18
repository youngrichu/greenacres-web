"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CoffeeBranchImage, CoffeeBeansScatteredImage, CoffeeLeafImage } from "./CoffeeDecorationsImage";

gsap.registerPlugin(ScrollTrigger);

interface CoffeeType {
    name: string;
    grade: string;
    process: string;
    notes: string[];
    description: string;
    accentColor: string;
}

const coffeeTypes: CoffeeType[] = [
    {
        name: "Yirgacheffe G1",
        grade: "Grade 1",
        process: "Washed",
        notes: ["Jasmine", "Lemon", "Bergamot"],
        description: "Exceptional clarity with delicate floral aromatics and bright citrus acidity. The quintessential Ethiopian coffee.",
        accentColor: "from-gold-light to-gold",
    },
    {
        name: "Sidama G2",
        grade: "Grade 2",
        process: "Natural",
        notes: ["Blueberry", "Wine", "Chocolate"],
        description: "Rich berry sweetness with wine-like complexity and a smooth chocolate finish that lingers.",
        accentColor: "from-gold to-forest-light",
    },
    {
        name: "Guji Natural",
        grade: "Grade 1",
        process: "Natural",
        notes: ["Peach", "Honey", "Tropical"],
        description: "Explosive tropical fruit with honey sweetness and silky body. A modern classic.",
        accentColor: "from-gold-light to-gold",
    },
    {
        name: "Djimmah Forest",
        grade: "Grade 3",
        process: "Sun-dried",
        notes: ["Earthy", "Spice", "Full-bodied"],
        description: "Wild forest character with deep earthy tones and bold spice notes. Authentic and powerful.",
        accentColor: "from-forest-light to-forest",
    },
    {
        name: "Limmu Washed",
        grade: "Grade 2",
        process: "Washed",
        notes: ["Wine", "Floral", "Sweet"],
        description: "Refined wine-like acidity balanced with elegant floral undertones and clean finish.",
        accentColor: "from-gold to-forest-light",
    },
    {
        name: "Lekempti Natural",
        grade: "Grade 2",
        process: "Natural",
        notes: ["Blueberry", "Bold", "Winey"],
        description: "Distinctive fruity bomb with intense blueberry and winey sweetness. Unforgettable.",
        accentColor: "from-gold to-forest-light",
    },
];

export default function CoffeeShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll(".coffee-card");

                cards.forEach((card, index) => {
                    gsap.fromTo(
                        card,
                        { y: 80, opacity: 0, rotateX: 10 },
                        {
                            y: 0,
                            opacity: 1,
                            rotateX: 0,
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
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
            id="coffee"
            className="section-padding bg-cream-dark relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl opacity-60" />

            {/* New Organic Decorations */}
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] pointer-events-none select-none overflow-hidden opacity-10 rotate-180">
                <CoffeeBranchImage className="w-full h-full" />
            </div>

            <div className="absolute top-40 -left-20 w-[400px] h-[400px] pointer-events-none select-none opacity-5 -rotate-45">
                <CoffeeLeafImage className="w-full h-full" />
            </div>

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none select-none translate-x-1/4 translate-y-1/4 opacity-10 -rotate-12">
                <CoffeeBranchImage className="w-full h-full" />
            </div>

            <div className="absolute bottom-20 left-10 w-64 h-64 pointer-events-none select-none animate-float-slow opacity-10">
                <CoffeeBeansScatteredImage className="w-full h-full rotate-12" />
            </div>

            <div className="absolute top-20 right-20 w-48 h-48 pointer-events-none select-none animate-float-delayed opacity-5">
                <CoffeeLeafImage className="w-full h-full -rotate-12" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                        Premium Selection
                    </span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest mt-4"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Our Coffee Collection
                    </h2>
                    <p className="text-foreground-muted mt-4 max-w-2xl mx-auto text-lg">
                        Handpicked specialty grades from Ethiopia&apos;s finest coffee-growing regions,
                        processed to perfection for discerning roasters worldwide.
                    </p>
                </div>

                {/* Coffee cards grid */}
                <div
                    ref={cardsRef}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {coffeeTypes.map((coffee) => (
                        <Card
                            key={coffee.name}
                            className="coffee-card group bg-white/40 backdrop-blur-md border border-gold/10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden rounded-2xl"
                        >
                            {/* Accent Glow on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${coffee.accentColor} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />

                            {/* Decorative Underscore */}
                            <div className={`absolute top-0 left-0 h-1 w-0 bg-gradient-to-r ${coffee.accentColor} group-hover:w-full transition-all duration-700 ease-in-out`} />

                            <CardHeader className="pb-2 relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <h3
                                            className="text-2xl font-bold text-forest group-hover:text-gold transition-colors duration-500"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {coffee.name}
                                        </h3>
                                        <p className="text-coffee/80 text-xs font-semibold tracking-widest uppercase mt-1">
                                            {coffee.process}
                                        </p>
                                    </div>
                                    <Badge variant="secondary" className="bg-forest/5 text-forest border border-forest/10 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">
                                        {coffee.grade}
                                    </Badge>
                                </div>
                            </CardHeader>

                            <CardContent className="pb-6 relative z-10">
                                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                                    {coffee.description}
                                </p>

                                {/* Flavor notes */}
                                <div className="flex flex-wrap gap-2">
                                    {coffee.notes.map((note) => (
                                        <Badge
                                            key={note}
                                            variant="outline"
                                            className="border-gold/20 text-coffee bg-gold/5 text-[11px] font-medium py-0.5"
                                        >
                                            {note}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Botanical card decoration */}
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 pointer-events-none select-none opacity-5 group-hover:opacity-10 group-hover:rotate-12 transition-all duration-700">
                                    <CoffeeLeafImage className="w-full h-full" />
                                </div>
                            </CardContent>

                            <CardFooter className="pt-4 border-t border-gold/5 bg-gold/[0.02] relative z-10">
                                <div className="flex justify-between items-center w-full">
                                    <span className="text-[11px] font-semibold text-forest/40 uppercase tracking-widest">
                                        Export Quality
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-gold hover:text-gold-light hover:bg-transparent font-bold text-xs uppercase tracking-wider gap-2 group/btn"
                                    >
                                        Inquire
                                        <svg
                                            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* View more CTA */}
                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="h-14 px-10 bg-forest hover:bg-forest-light text-white font-semibold rounded-full shadow-lg shadow-forest/20 transition-all hover:scale-105"
                        asChild
                    >
                        <a href="#contact" className="inline-flex items-center gap-3">
                            Request Full Catalog
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
