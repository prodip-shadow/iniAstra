'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ServiceCard from '@/components/cards/ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: 'devices',
    title: 'Design & Dev',
    description:
      'Modern Mobile & Web applications built with performance-first architectures and clean code.',
  },
  {
    icon: 'neurology',
    title: 'AI & ML',
    description:
      'Seamless integration of intelligent models to automate workflows and provide deep data insights.',
  },
  {
    icon: 'palette',
    title: 'Brand Design',
    description:
      "Graphics, motion design, and high-fidelity UX that tells your brand's unique story and values.",
  },
  {
    icon: 'trending_up',
    title: 'Growth & SEO',
    description:
      'Digital marketing strategies and technical SEO to ensure your business reaches the right audience.',
  },
];

export default function ServicesSection() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

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
          cardsRef.current,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
          },
          '-=0.2',
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32 bg-linear-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 sm:space-y-4">
          <h2
            ref={headingRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white font-audiowide leading-tight"
          >
            Our Expertise
          </h2>
          <p
            ref={descriptionRef}
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-6 sm:leading-7 md:leading-8 max-w-xl"
          >
            Tailored technological solutions designed to bridge the gap between
            vision and reality. We specialize in high-performance digital
            products.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="h-full"
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Accent Elements */}
      <div className="absolute -left-12 sm:-left-20 top-16 sm:top-24 h-40 sm:h-56 w-40 sm:w-56 bg-orange-500/6 rounded-full blur-xl opacity-10 pointer-events-none" />
      <div className="absolute -right-16 sm:-right-28 bottom-4 sm:bottom-8 h-48 sm:h-64 w-48 sm:w-64 bg-orange-500/4 rounded-full blur-xl opacity-10 pointer-events-none" />
    </section>
  );
}
