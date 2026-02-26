import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reviews() {
    const scrollRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal scroll
            const reviews = gsap.utils.toArray('.review-card');

            gsap.to(reviews, {
                xPercent: -100 * (reviews.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: scrollRef.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + scrollRef.current.offsetWidth
                }
            });
        }, scrollRef);
        return () => ctx.revert();
    }, []);

    const reviewsList = [
        { name: "James T.", date: "2 weeks ago", text: "Incredible operation. They removed two massive oaks leaning over my house in under a day. Left the yard cleaner than they found it." },
        { name: "Sarah W.", date: "1 month ago", text: "Professional from start to finish. The team moved like a well-oiled machine. Highly recommend for any dangerous tree work." },
        { name: "Robert K.", date: "2 months ago", text: "I've hired many tree services over the years. Busy Beaver is the only one I'll use from now on. True precision work." },
        { name: "Elena R.", date: "3 months ago", text: "The crane work was fascinating to watch. They plucked a dead pine from our backyard without touching a single perennial." }
    ];

    return (
        <section id="reviews" className="relative bg-primary text-background py-32 overflow-hidden border-t border-background/5">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="font-mono text-sm tracking-widest uppercase">Verified 5.0 Rating</span>
                </div>
                <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight">Client Stories</h2>
            </div>

            <div ref={scrollRef} className="h-screen flex items-center bg-primary">
                <div className="flex gap-8 px-6 md:px-32 w-max">
                    {reviewsList.map((rev, i) => (
                        <div key={i} className="review-card w-[85vw] md:w-[600px] h-[400px] bg-background text-foreground rounded-[2rem] p-12 flex flex-col justify-between shadow-2xl flex-shrink-0">
                            <p className="font-serif italic text-2xl md:text-3xl leading-relaxed">"{rev.text}"</p>
                            <div className="flex justify-between items-end border-t border-foreground/10 pt-6">
                                <div>
                                    <h4 className="font-sans font-bold text-xl">{rev.name}</h4>
                                    <p className="font-mono text-xs text-foreground/50 mt-1 uppercase tracking-wider">{rev.date}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                    <span className="font-serif text-accent italic">G</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
