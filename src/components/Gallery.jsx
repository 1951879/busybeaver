import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".gallery-img", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const images = [
        { src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800", alt: "Tree canopy" },
        { src: "https://images.unsplash.com/photo-1516214104703-d2a148cb6897?auto=format&fit=crop&q=80&w=800", alt: "Forest landscape" },
        { src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800", alt: "Forest details" },
        { src: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800", alt: "Dark woods" },
        { src: "https://images.unsplash.com/photo-1440342359743-84fac1831cb6?auto=format&fit=crop&q=80&w=800", alt: "Abstract branches" }
    ];

    return (
        <section ref={containerRef} id="gallery" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight">Verified Operations</h2>
                    <p className="font-mono text-foreground/60 mt-4 max-w-xl text-sm">A visual manifest of completed arboreal interventions.</p>
                </div>
                <button className="h-max pb-2 border-b border-accent text-primary font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors">
                    View Full Archive
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`gallery-img overflow-hidden rounded-[2rem] bg-foreground/5 relative group cursor-pointer
            ${i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
            ${i === 3 ? "col-span-2 md:col-span-1 row-span-1" : ""}
            ${i === 4 ? "col-span-2 md:col-span-2 row-span-1" : ""}
            `}
                    >
                        <div className="absolute inset-0 bg-primary/20 z-10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-multiply"></div>
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
