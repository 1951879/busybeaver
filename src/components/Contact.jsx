import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const containerRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        serviceType: [],
        urgency: 'Standard',
        message: ''
    });

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            serviceType: checked
                ? [...prev.serviceType, value]
                : prev.serviceType.filter(type => type !== value)
        }));
    };

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            setFormData({ ...formData, [name]: formatPhoneNumber(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipient = "can.of.spam@outlook.com"; // Replace with your actual email
        const subject = encodeURIComponent(`New Service Request from ${formData.name}`);
        const servicesList = formData.serviceType.length > 0 ? formData.serviceType.join(", ") : "None selected";

        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Address: ${formData.address}\n` +
            `Service types: ${servicesList}\n` +
            `Urgency: ${formData.urgency}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

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
                            Tell us about your tree care needs. Our team will provide a free, no-obligation estimate.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <a href="tel:5551234567" className="group flex items-center gap-6 bg-primary text-background p-6 rounded-[2rem] hover:bg-accent transition-colors">
                            <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-primary/20">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <span className="block font-mono text-xs uppercase tracking-widest mb-1 opacity-70 group-hover:text-primary">Call Us</span>
                                <span className="block font-sans font-bold text-2xl group-hover:text-primary">(888) 854-7463</span>
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

                    <form className="relative z-10 flex flex-col gap-6" onSubmit={handleSubmit}>
                        <h3 className="font-sans font-bold text-2xl text-primary mb-2">Request an Estimate</h3>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Your Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="(555) 123-4567" />
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Property Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors" placeholder="123 Oak St, Buffalo, NY" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 flex flex-col gap-3">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Service Type <span className="lowercase opacity-60 font-sans tracking-normal">(optional)</span></label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {["Tree Removal", "Pruning & Trimming", "Stump Grinding", "Storm Clean-up", "Plant Health Care", "Other"].map((service) => {
                                        const isChecked = formData.serviceType.includes(service);
                                        return (
                                            <label key={service} className={`group flex items-center gap-3 font-sans text-sm cursor-pointer p-2 -ml-2 rounded-xl transition-all duration-300 w-fit ${isChecked ? 'text-primary' : 'text-foreground/70 hover:text-foreground'}`}>
                                                <div className="relative flex items-center justify-center w-5 h-5">
                                                    <input
                                                        type="checkbox"
                                                        name="serviceType"
                                                        value={service}
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className="absolute opacity-0 w-full h-full cursor-pointer z-10"
                                                    />
                                                    <div className={`w-full h-full border border-foreground/30 rounded flex items-center justify-center transition-all duration-300 ${isChecked ? 'bg-accent border-accent scale-100' : 'bg-transparent group-hover:border-foreground/50 scale-95'}`}>
                                                        <svg className={`w-3 h-3 text-primary transition-all duration-300 ${isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className={`leading-none mt-0.5 transition-colors duration-300 ${isChecked ? 'font-medium text-foreground' : ''}`}>{service}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Urgency</label>
                                <div className="flex gap-6 pt-2">
                                    <label className="group relative flex items-center gap-3 font-sans text-sm cursor-pointer w-fit">
                                        <input type="radio" name="urgency" value="Standard" checked={formData.urgency === 'Standard'} onChange={handleChange} className="absolute opacity-0 w-0 h-0" />
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${formData.urgency === 'Standard' ? 'border-primary' : 'border-foreground/30 group-hover:border-foreground/60'}`}>
                                            <div className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${formData.urgency === 'Standard' ? 'scale-100' : 'scale-0'}`} />
                                        </div>
                                        <span className={`leading-none mt-0.5 transition-colors duration-300 ${formData.urgency === 'Standard' ? 'text-foreground font-medium' : 'text-foreground/70 group-hover:text-foreground'}`}>Standard</span>
                                    </label>
                                    <label className="group relative flex items-center gap-3 font-sans text-sm cursor-pointer w-fit">
                                        <input type="radio" name="urgency" value="Urgent" checked={formData.urgency === 'Urgent'} onChange={handleChange} className="absolute opacity-0 w-0 h-0" />
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-300 ${formData.urgency === 'Urgent' ? 'border-accent' : 'border-foreground/30 group-hover:border-foreground/60'}`}>
                                            <div className={`w-2 h-2 rounded-full bg-accent transition-all duration-300 ${formData.urgency === 'Urgent' ? 'scale-100' : 'scale-0'}`} />
                                        </div>
                                        <span className={`leading-none mt-0.5 transition-colors duration-300 ${formData.urgency === 'Urgent' ? 'text-accent font-medium' : 'text-foreground/70 group-hover:text-foreground'}`}>Urgent</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 flex flex-col gap-2">
                            <label className="font-mono text-xs tracking-widest uppercase text-foreground/60">Additional notes <span className="lowercase opacity-60 font-sans tracking-normal">(optional)</span></label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="bg-transparent border-b border-foreground/20 py-3 font-sans outline-none focus:border-accent transition-colors resize-none" placeholder="Describe the required intervention..."></textarea>
                        </div>

                        <button type="submit" className="mt-4 w-full bg-accent text-primary py-4 rounded-xl font-sans font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            send through Email App
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
