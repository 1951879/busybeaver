import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Card 1: Geometric Motif
const AssessmentVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-64 h-64 opacity-20 rotating-geom">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#FAF8F5" strokeWidth="0.5" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" />
            <circle cx="50" cy="50" r="5" fill="#FAF8F5" />
        </svg>
    </div>
);

// Card 2: Scanning Laser
const ExtractionVisual = () => (
    <div className="w-full h-full relative bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#2A2A35_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
    </div>
);

// Card 3: Waveform
const ReclamationVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
    </div>
);

export default function Protocol() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Rotate geom
            gsap.to(".rotating-geom", {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });

            // // Scan laser
            // gsap.fromTo(".laser-scan",
            //     { top: "0%" },
            //     { top: "100%", duration: 2, repeat: -1, ease: "power1.inOut", yoyo: true }
            // );

            // // Pulse wave
            // gsap.to(".waveform-path", {
            //     strokeDasharray: "200",
            //     strokeDashoffset: 400,
            //     duration: 3,
            //     repeat: -1,
            //     ease: "none"
            // });

            const cards = gsap.utils.toArray(".protocol-card");

            cards.forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    endTrigger: containerRef.current,
                    end: "bottom bottom",
                });

                // Add blur and scale down effect as next card comes up
                // if (i < cards.length - 1) {
                //     gsap.to(card, {
                //         scale: 0.9,
                //         opacity: 0.5,
                //         ease: "none",
                //         scrollTrigger: {
                //             trigger: cards[i + 1],
                //             start: "top bottom",
                //             end: "top top",
                //             scrub: true,
                //         }
                //     });
                // }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: "01",
            title: "Thorough Evaluation",
            desc: "We carefully assess your trees and property to plan the safest approach.",
            Visual: AssessmentVisual
        },
        {
            num: "02",
            title: "Safe Removal",
            desc: "Careful and controlled removal of trees, protecting your home and landscape.",
            Visual: ExtractionVisual
        },
        {
            num: "03",
            title: "Complete Cleanup",
            desc: "We remove all debris, grind stumps, and leave your yard looking pristine.",
            Visual: ReclamationVisual
        }
    ];

    return (
        <section ref={containerRef} className="relative bg-primary">
            {steps.map((step, i) => (
                <div key={i} className="protocol-card h-[100dvh] w-full flex items-center justify-center p-6 sticky top-0 bg-primary">
                    <div className="absolute inset-0 z-0">
                        <step.Visual />
                    </div>
                    <div className="relative z-10 max-w-2xl bg-primary/40 backdrop-blur-md border border-foreground/10 p-12 md:p-20 rounded-[3rem] shadow-2xl flex flex-col gap-6 w-full text-center">
                        <span className="font-mono text-xl text-accent/80 tracking-widest">{step.num}</span>
                        <h2 className="font-sans font-bold text-4xl md:text-5xl text-background">{step.title}</h2>
                        <p className="font-serif italic text-xl text-background/70">{step.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
