import React from "react";

export const CoffeeBean1 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M48,12 C25,18 10,40 20,65 C25,85 55,95 75,85 C95,75 98,45 80,25 C68,12 55,10 48,12 Z M65,30 C75,35 80,55 70,68 C60,80 40,80 30,65 C25,50 30,35 45,25 C52,20 60,25 65,30 Z" opacity="0.9" />
        <path d="M45,25 C40,35 35,50 48,65 C55,75 65,70 70,68 C75,65 72,55 65,50 C55,42 55,30 65,30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
);

export const CoffeeBean2 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M30,20 C10,35 15,70 35,85 C55,95 85,85 90,60 C95,35 75,10 50,15 C40,18 35,18 30,20 Z" opacity="0.9" />
        <path d="M40,25 Q60,40 50,60 T75,80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
);

export const CoffeeLeaf1 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M50,95 C50,95 20,70 10,45 C5,25 25,5 50,5 C75,5 95,25 90,45 C80,70 50,95 50,95 Z" opacity="0.8" />
        <path d="M50,5 L50,95 M50,25 L70,15 M50,45 L80,35 M50,65 L75,60 M50,25 L30,15 M50,45 L20,35 M50,65 L25,60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
);

export const CoffeeLeaf2 = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className={className}
        {...props}
    >
        <path d="M10,50 C10,50 30,80 55,90 C80,95 95,75 90,50 C85,25 65,5 45,10 C20,15 10,50 10,50 Z" opacity="0.8" />
        <path d="M10,50 Q50,50 90,50 M25,50 L35,25 M45,50 L55,20 M65,50 L75,25 M35,50 L45,75 M55,50 L65,80 M75,50 L85,75" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
);

export const CoffeeBranch = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 200 100"
        fill="none"
        stroke="currentColor"
        className={className}
        {...props}
    >
        <path d="M0,50 Q50,40 100,50 T200,50" strokeWidth="2" />
        {/* Leaf 1 */}
        <path d="M40,48 Q30,20 50,10 Q70,20 60,48 Z" fill="currentColor" stroke="none" opacity="0.7" />
        <path d="M50,10 L50,48" strokeWidth="1" />
        {/* Leaf 2 */}
        <path d="M80,52 Q90,80 70,90 Q50,80 60,52 Z" fill="currentColor" stroke="none" opacity="0.7" />
        <path d="M70,90 L70,52" strokeWidth="1" />
        {/* Leaf 3 */}
        <path d="M120,48 Q110,20 130,10 Q150,20 140,48 Z" fill="currentColor" stroke="none" opacity="0.7" />
        <path d="M130,10 L130,48" strokeWidth="1" />
        {/* Bean Group */}
        <circle cx="160" cy="50" r="8" fill="currentColor" opacity="0.9" />
        <path d="M156,50 Q160,54 164,50" stroke="white" strokeWidth="1" />
        <circle cx="175" cy="45" r="8" fill="currentColor" opacity="0.9" />
        <path d="M171,45 Q175,49 179,45" stroke="white" strokeWidth="1" />
    </svg>
);
