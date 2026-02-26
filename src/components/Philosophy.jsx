import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".phil-text .word", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                opacity: 0,
                y: 30,
                duration: 1.2,
                stagger: 0.08,
                ease: "power3.out"
            });

            gsap.to(".parallax-bg", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: 150,
                ease: "none"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const splitWords = (text) => text.split(' ').map((word, i) => (
        <span key={i} className="word inline-block mr-3 md:mr-4 leading-tight">{word}</span>
    ));

    return (
        <section ref={sectionRef} className="relative py-48 px-6 bg-primary text-background overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
                    alt="Dark Woods Texture"
                    className="parallax-bg w-full h-[130%] object-cover opacity-30 -top-[15%] absolute mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
                <h3 className="font-sans text-xl md:text-3xl text-accent/80 font-medium phil-text overflow-hidden">
                    {splitWords("Most tree services focus on: rapid, destructive clearing.")}
                </h3>
                <h2 className="font-serif italic text-4xl md:text-8xl font-light phil-text max-w-4xl overflow-hidden leading-[1.1]">
                    {splitWords("We focus on:")}{" "}
                    <strong className="text-accent font-serif font-light word inline-block mr-3 md:mr-4">careful</strong>{" "}
                    {splitWords("planning and protecting your property.")}
                </h2>
            </div>
        </section>
    );
}
