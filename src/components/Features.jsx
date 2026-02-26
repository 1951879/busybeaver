import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Zap, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DiagnosticShuffler = () => {
    const cards = [
        { label: "Decades of Experience", desc: "Generations of local tree care knowledge." },
        { label: "Specialized Equipment", desc: "Professional bucket trucks and lowering gear." },
        // { label: "Certified Arborists", desc: "Expert advice for your tree's health." }
    ];

    const [activeCards, setActiveCards] = useState([...cards]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCards(prev => {
                const next = [...prev];
                next.unshift(next.pop());
                return next;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-64 w-full flex items-center justify-center pointer-events-none">
            {activeCards.map((card, i) => (
                <div
                    key={card.label}
                    className="absolute w-full p-6 bg-background rounded-[2rem] border border-foreground/10 shadow-xl transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                        transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
                        zIndex: 10 - i,
                        opacity: 1 - i * 0.2
                    }}
                >
                    <Monitor className="w-6 h-6 text-accent mb-4" />
                    <h4 className="font-sans font-bold text-foreground text-lg">{card.label}</h4>
                    <p className="font-mono text-xs text-foreground/60 mt-2">{card.desc}</p>
                </div>
            ))}
        </div>
    );
};

const TelemetryTypewriter = () => {
    const [text, setText] = useState('');
    const fullText = "STORM DAMAGE OR EMERGENCY?\nWE ARE READY TO HELP.\nAVAILABLE 24/7.\nREMOVING HAZARDS SAFELY.\nPROTECTING YOUR PROPERTY.";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
            } else {
                setTimeout(() => { index = 0; setText(''); }, 3000);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-64 w-full p-6 bg-primary rounded-[2rem] border border-foreground/10 shadow-xl flex flex-col pt-8 text-left">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span className="font-mono text-xs text-accent uppercase tracking-widest">Fast Response</span>
            </div>
            <p className="font-mono text-xs md:text-sm text-accent whitespace-pre-wrap leading-relaxed">
                {text}
                <span className="inline-block w-2 h-3 bg-accent ml-1 animate-pulse"></span>
            </p>
        </div>
    );
};

const CursorProtocolScheduler = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
            tl.set(cursorRef.current, { x: 0, y: 0, scale: 1, opacity: 0 })
                .to(cursorRef.current, { opacity: 1, duration: 0.5 })
                .to(cursorRef.current, { x: 80, y: 40, duration: 1, ease: "power2.inOut" })
                .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to(".sched-cell-target", { backgroundColor: "#C9A84C", color: "#0D0D12", duration: 0.2 }, "-=0.1")
                .to(cursorRef.current, { x: 220, y: 140, duration: 1, ease: "power2.inOut" }, "+=0.5")
                .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
                .to(".sched-save", { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.1")
                .to(cursorRef.current, { opacity: 0, duration: 0.5 })
                .to(".sched-cell-target", { backgroundColor: "transparent", color: "inherit", duration: 0.2 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative h-64 w-full p-6 bg-background rounded-[2rem] border border-foreground/10 shadow-xl flex flex-col justify-between text-left">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-sans font-bold text-foreground">Immaculate Cleanup</h4>
                <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <div className="grid grid-cols-7 gap-1 flex-1">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className="font-mono text-xs text-center text-foreground/50">{d}</div>
                ))}
                {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className={`h-8 rounded-md border border-foreground/5 flex items-center justify-center font-mono text-xs ${i === 9 ? 'sched-cell-target' : ''}`}>
                        {i + 1}
                    </div>
                ))}
            </div>
            <button className="sched-save mt-4 w-full bg-primary text-accent py-2 rounded-xl font-sans text-sm font-bold relative z-10 pointer-events-none">
                Spotless Yard Guarantee
            </button>

            {/* SVG Cursor */}
            <div ref={cursorRef} className="absolute top-10 left-10 z-20 pointer-events-none drop-shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.8 6.76 21.36L11.44 17.11C11.66 16.91 11.95 16.8 12.25 16.8H18.5C19.16 16.8 19.5 16 19.04 15.52L5.5 3.21Z" fill="#1A1A1A" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-32 px-6 max-w-7xl mx-auto relative z-20">
            <div className="mb-20 text-center md:text-left">
                <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight">Our Core Philosophy</h2>
                <p className="font-mono text-foreground/60 mt-4 max-w-xl mx-auto md:mx-0 text-sm">Dedicated to protecting your property and preserving the health of your trees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                {/* Card 1: Experience & Equipment */}
                <div className="feature-card flex flex-col gap-6">
                    <DiagnosticShuffler />
                    <div className="text-center md:text-left">
                        <h3 className="font-sans font-bold text-2xl text-primary mt-4">Professional Rigging</h3>
                        <p className="font-serif italic text-foreground/70 mt-2 text-lg">Decades of experience using professional, safe equipment.</p>
                    </div>
                </div>

                {/* Card 2: Speed */}
                <div className="feature-card flex flex-col gap-6">
                    <TelemetryTypewriter />
                    <div className="text-center md:text-left">
                        <h3 className="font-sans font-bold text-2xl text-primary mt-4">Fast & Safe</h3>
                        <p className="font-serif italic text-foreground/70 mt-2 text-lg">Safe and efficient tree removal when you need it most.</p>
                    </div>
                </div>

                {/* Card 3: Cleanup */}
                <div className="feature-card flex flex-col gap-6">
                    <CursorProtocolScheduler />
                    <div className="text-center md:text-left">
                        <h3 className="font-sans font-bold text-2xl text-primary mt-4">Spotless Cleanup</h3>
                        <p className="font-serif italic text-foreground/70 mt-2 text-lg">We treat your yard like our own, leaving it cleaner than we found it.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
