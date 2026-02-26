import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="relative mt-24 bg-primary text-background rounded-t-[4rem] px-8 py-20 pb-12 overflow-hidden flex flex-col justify-between">
            {/* Abstract Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <img
                    src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000"
                    alt="Dark Woods Texture"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
                    <h2 className="font-sans font-bold text-4xl md:text-6xl text-accent tracking-tighter">Busy Beaver</h2>
                    <p className="font-serif italic text-xl md:text-2xl text-background/80 max-w-md">
                        Precision arboriculture and large-scale tree removal for Western NY & Northwestern PA.
                    </p>

                    <div className="mt-8 flex items-center gap-3 bg-secondary/10 w-max px-6 py-3 rounded-full border border-background/10">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-sm tracking-widest uppercase">Fully Insured</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-mono uppercase tracking-widest text-xs text-background/50">Connect</h4>
                    <a href="#" className="font-sans font-medium text-lg hover:text-accent transition-colors">Request a Quote</a>
                    <a href="#" className="font-sans font-medium text-lg hover:text-accent transition-colors">Click to Call</a>
                    <a href="#services" className="font-sans font-medium text-lg hover:text-accent transition-colors">Our Services</a>
                    <a href="#gallery" className="font-sans font-medium text-lg hover:text-accent transition-colors">View Gallery</a>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="font-mono uppercase tracking-widest text-xs text-background/50">Trust</h4>
                    <a href="#reviews" className="font-sans font-medium text-lg hover:text-accent transition-colors flex items-center gap-2">
                        Google Reviews
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </a>
                    <span className="font-serif italic text-background/50 text-sm mt-4">Licensed & Insured.</span>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-background/10">
                <p className="font-mono text-xs text-background/40">© {new Date().getFullYear()} Busy Beaver Services. All Rights Reserved.</p>
                <div className="flex gap-6 font-mono text-xs text-background/40 max-[400px]:flex-col text-center">
                    <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                    <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
