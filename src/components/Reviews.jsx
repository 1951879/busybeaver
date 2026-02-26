import React, { useRef } from 'react';

export default function Reviews() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 632 : window.innerWidth * 0.85;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const reviewsList = [
        { name: "James T.", date: "2 weeks ago", text: "Incredible operation. They removed two massive oaks leaning over my house in under a day. Left the yard cleaner than they found it." },
        { name: "Sarah W.", date: "1 month ago", text: "Professional from start to finish. The team moved like a well-oiled machine. Highly recommend for any dangerous tree work." },
        { name: "Robert K.", date: "2 months ago", text: "I've hired many tree services over the years. Busy Beaver is the only one I'll use from now on. True precision work." },
        { name: "Elena R.", date: "3 months ago", text: "The crane work was fascinating to watch. They plucked a dead pine from our backyard without touching a single perennial." }
    ];

    return (
        <section id="reviews" className="relative bg-primary text-background py-32 overflow-hidden border-t border-background/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-mono text-sm tracking-widest uppercase text-background/70">Verified 5.0 Rating</span>
                    </div>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl tracking-tight text-background">Client Stories</h2>
                </div>

                <div className="hidden md:flex gap-4">
                    <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/5 hover:border-accent hover:text-accent transition-colors text-background">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/5 hover:border-accent hover:text-accent transition-colors text-background">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 md:gap-8 px-6 md:px-[calc(max(1.5rem,(100vw-80rem)/2+1.5rem))] overflow-x-auto snap-x snap-mandatory pb-12 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style>{`.snap-x::-webkit-scrollbar { display: none; }`}</style>
                {reviewsList.map((rev, i) => (
                    <div key={i} className="review-card snap-center w-[85vw] md:w-[600px] h-[400px] bg-background text-foreground rounded-[2rem] p-10 md:p-12 flex flex-col justify-between shadow-2xl flex-shrink-0">
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
        </section>
    );
}
