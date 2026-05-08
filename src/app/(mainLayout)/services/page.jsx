'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button from '@/components/buttons/Button';
import ServiceShowcaseCard from '@/components/cards/ServiceShowcaseCard';
import { servicesData } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.1,
          ease: 'power3.out',
        },
      );

      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0.2,
            x: idx % 2 === 0 ? -180 : 180,
            y: 30,
            rotate: idx % 2 === 0 ? -4 : 4,
            scale: 0.94,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 94%',
              end: 'top 44%',
              scrub: 1.1,
              invalidateOnRefresh: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-linear-to-b from-slate-950 to-slate-900">
      {/* Header Section */}
      <div className="relative px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center gap-3 text-orange-400">
            <span className="text-sm sm:text-base font-semibold tracking-[0.35em]">
              01
            </span>
            <span className="h-px w-12 bg-orange-400/80" />
          </div>

          <h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tight text-white leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            All Services
          </h1>

          <p
            ref={subtitleRef}
            className="mx-auto max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 md:text-lg"
          >
            Every service from the home preview is shown here, along with the
            rest of the catalog, so users can explore the full range without
            leaving the theme.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative px-4 pb-20 sm:px-6 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="h-full"
              >
                <ServiceShowcaseCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
