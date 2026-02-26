import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".contact-elem", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="contact" className="py-32 px-6 max-w-7xl mx-auto border-t border-foreground/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

                <div className="flex flex-col gap-10 contact-elem">
                    <div>
                        <h2 className="font-sans font-bold text-5xl md:text-7xl text-primary tracking-tighter mb-6">Get <span className="font-serif italic text-accent font-light">in Touch.</span></h2>
                        <p className="font-mono text-sm text-foreground/60 max-w-sm leading-relaxed tracking-wide">
                            Tell us about your tree care needs. Our team will provide a free, no-obligation estimate right away.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <a href="tel:5551234567" className="group flex items-center gap-6 bg-primary text-background p-6 rounded-[2rem] hover:bg-accent transition-colors">
                            <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-primary/20">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <span className="block font-mono text-xs uppercase tracking-widest mb-1 opacity-70 group-hover:text-primary">Call Us</span>
                                <span className="block font-sans font-bold text-2xl group-hover:text-primary">(555) 123-4567</span>
                            </div>
                        </a>

                        <div className="bg-foreground/5 p-6 rounded-[2rem] border border-foreground/10">
                            <span className="block font-mono text-xs uppercase tracking-widest mb-2 text-foreground/60">Service Area</span>
                            <p className="font-sans font-medium">Western New York &amp; Northwestern Pennsylvania.</p>
                        </div>
                    </div>
                </div>

                <div className="contact-elem bg-background rounded-[2rem] p-8 md:p-12 border border-foreground/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="48" stroke="#0D0D12" strokeWidth="2" strokeDasharray="4 4" /></svg>
                    </div>

                    <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-2">Request an Estimate</h3>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Your Name</label>
                                <input type="text" className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Your Email</label>
                                <input type="email" className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Property Address</label>
                            <input type="text" className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="123 Oak St, Buffalo, NY" />
                        </div>

                        <div className="col-span-2 flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">How can we help?</label>
                            <textarea rows="4" className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors resize-none" placeholder="Describe the required intervention..."></textarea>
                        </div>

                        <button type="submit" className="mt-4 w-full bg-accent text-primary py-4 rounded-xl font-sans font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            Send Request
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
