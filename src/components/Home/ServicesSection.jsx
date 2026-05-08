'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Button from '@/components/buttons/Button';
import ServiceShowcaseCard from '@/components/cards/ServiceShowcaseCard';
import { servicesData } from '@/data/services';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);
  const previewServices = servicesData.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#services',
          start: 'top 60%',
          once: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          descriptionRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.3',
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '-=0.2',
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
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950/10 py-12 sm:py-16 md:py-20 lg:py-42"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-3 text-orange-400">
            <span className="text-sm sm:text-base font-semibold tracking-[0.35em]">
              01
            </span>
            <span className="h-px w-12 bg-orange-400/80" />
          </div>
          <h2
            ref={headingRef}
            className="text-3xl font-bold tracking-tight text-white leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Services
          </h2>
          <p
            ref={descriptionRef}
            className="max-w-xl text-sm leading-7 text-base-content/70 sm:text-base sm:leading-8 md:text-lg"
          >
            Choose from the core services we provide. The first two are shown
            here, and the full collection lives on the services page.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {previewServices.map((service, idx) => (
            <div
              key={service.title}
              className="h-full"
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
            >
              <ServiceShowcaseCard service={service} />
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="flex pt-10 sm:pt-12">
          <Button
            href="/services"
            text="See more services →"
            color="outline"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-base-content text-center"
          ></Button>
        </div>
      </div>
    </section>
  );
}
