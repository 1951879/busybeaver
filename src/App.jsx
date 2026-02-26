import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Navbar outline switch
            ScrollTrigger.create({
                start: 'top -100',
                end: 99999,
                toggleClass: { className: 'border-foreground/20', targets: '.island-nav' }
            });

            // Navbar theme detector
            const updateNavTheme = (theme) => {
                const nav = document.querySelector('.island-nav');
                if (nav) {
                    nav.classList.remove('nav-dark', 'nav-light');
                    if (theme) nav.classList.add(`nav-${theme}`);
                }
            };

            gsap.utils.toArray('[data-theme]').forEach(sec => {
                ScrollTrigger.create({
                    trigger: sec,
                    start: "top 60px",
                    end: "bottom 60px",
                    onEnter: () => updateNavTheme(sec.dataset.theme),
                    onEnterBack: () => updateNavTheme(sec.dataset.theme),
                });
            });

            // Hero animation
            gsap.from(".hero-anim", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="relative min-h-screen bg-background overflow-hidden selection:bg-accent selection:text-primary">

            <nav className="island-nav nav-dark fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-transparent backdrop-blur-xl border border-transparent px-6 py-3 rounded-full flex items-center gap-8 md:gap-12 shadow-2xl transition-all duration-500 w-[90%] md:w-max justify-between md:justify-center">
                <a href="#" className="font-sans font-bold nav-text text-xl tracking-tighter">Busy Beaver</a>
                <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest nav-link">
                    <a href="#features" className="hover:-translate-y-px font-medium">Services</a>
                    <a href="#gallery" className="hover:-translate-y-px font-medium">Gallery</a>
                    <a href="#reviews" className="hover:-translate-y-px font-medium">Reviews</a>
                </div>
                <a href="#contact" className="relative overflow-hidden bg-accent text-primary px-5 py-2 rounded-full font-sans font-bold text-sm tracking-wide hover:scale-105 active:scale-[0.98] transition-transform group whitespace-nowrap">
                    <span className="relative z-10">Get Quote</span>
                </a>
            </nav>

            {/* Hero Section */}
            <section data-theme="dark" className="relative h-[100dvh] w-full flex items-end pb-24 md:pb-32 px-6 md:px-16 overflow-hidden bg-primary">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent z-10 w-full h-[150%] top-auto bottom-0"></div>
                    <img
                        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
                        alt="Forest Canopy Texture"
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    />
                </div>

                <div className="relative z-20 max-w-5xl">
                    <h1 className="flex flex-col gap-2 md:gap-0">
                        <span className="hero-anim font-sans font-bold text-4xl md:text-5xl text-background tracking-tight uppercase">
                            Expert Arboriculture meets
                        </span>
                        <span className="hero-anim font-serif italic text-6xl md:text-8xl lg:text-[10rem] text-accent leading-[0.85] pr-8 font-light antialiased ml-[-4px]">
                            Precision.
                        </span>
                    </h1>
                    <p className="hero-anim mt-8 md:mt-12 font-mono text-background/70 max-w-md text-xs leading-relaxed uppercase tracking-widest">
                        Western NY & Northwestern PA's Premier Tree Care Professionals.
                    </p>
                    <div className="hero-anim mt-10">
                        <a href="#features" className="group inline-flex items-center gap-3 border border-background/20 rounded-full px-6 py-3 text-background font-mono text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
                            Get a Free Quote
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* <Features /> */}
            <div data-theme="dark"><Philosophy /></div>
            <div data-theme="dark"><Protocol /></div>
            <div data-theme="light"><Gallery /></div>
            <div data-theme="dark"><Reviews /></div>
            <div data-theme="light"><Contact /></div>
            <div data-theme="dark"><Footer /></div>

        </div>
    );
}
