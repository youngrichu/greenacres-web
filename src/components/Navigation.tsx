"use client";

import { useEffect, useState } from "react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#coffee", label: "Our Coffee" },
    { href: "#regions", label: "Regions" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-forest/95 backdrop-blur-md shadow-lg py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center transition-transform group-hover:scale-110">
                        <span className="text-forest font-bold text-lg">GA</span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-white font-semibold text-lg tracking-tight">
                            Green Acres
                        </span>
                        <span className="block text-gold text-xs tracking-widest uppercase">
                            Premium Coffee
                        </span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="ml-4 px-6 py-2.5 bg-gold text-forest font-semibold text-sm rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-lg"
                    >
                        Get a Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-forest/98 backdrop-blur-md transition-all overflow-hidden ${isMobileMenuOpen ? "max-h-96 py-6" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white/90 hover:text-gold transition-colors text-base font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 px-8 py-3 bg-gold text-forest font-semibold rounded-full"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
