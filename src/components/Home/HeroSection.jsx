'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '@/components/buttons/Button';
import Orb from '@/components/Home/Orb';

export default function HeroSection() {
  const badgeRef = useRef(null);
  const titleWordsRef = useRef([]);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef([]);
  const [typedDescription, setTypedDescription] = useState('');

  const titleWords = useMemo(
    () => 'Smart Digital Solutions for Modern Businesses'.split(' '),
    [],
  );
  const fullDescription =
    'We design, develop, and integrate intelligent systems to help your business grow. Transform your operational efficiency with kinetic technology.';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleWordNodes = titleWordsRef.current.filter(Boolean);
      const buttonNodes = buttonsRef.current.filter(Boolean);

      gsap.set(titleWordNodes, { opacity: 0, y: -26 });
      gsap.set(buttonNodes, { opacity: 0, y: 26, scale: 0.96 });

      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      introTl
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.55 },
        )
        .to(titleWordNodes, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        })
        .to(
          buttonNodes,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.12,
          },
          '>-0.05',
        );

      const typingState = { count: 0 };
      gsap.to(typingState, {
        count: fullDescription.length,
        duration: 2.3,
        ease: 'none',
        delay: 0.45,
        onUpdate: () => {
          const nextValue = fullDescription.slice(
            0,
            Math.floor(typingState.count),
          );
          setTypedDescription(nextValue);
        },
      });

      gsap.to(descriptionRef.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.4,
        ease: 'none',
      });
    });

    return () => ctx.revert();
  }, [fullDescription]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black -mt-16 pt-16">
      {/* Background Orb Effect */}
      <div className="absolute inset-0">
        <Orb
          hue={210}
          hoverIntensity={0.8}
          rotateOnHover={true}
          forceHoverState={false}
          backgroundColor="#02040a"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-slate-950/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto">
          <span
            ref={badgeRef}
            className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[7px] sm:text-[8px] font-semibold uppercase tracking-[0.2em] text-orange-400 backdrop-blur-sm"
          >
            Next-Gen Digital Lab
          </span>

          <div className="space-y-8 mt-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight font-audiowide tracking-tight text-white drop-shadow-2xl">
              {titleWords.map((word, idx) => (
                <span
                  key={`${word}-${idx}`}
                  ref={(el) => {
                    if (el) titleWordsRef.current[idx] = el;
                  }}
                  className="inline-block mr-[0.32em]"
                >
                  {word}
                </span>
              ))}
            </h1>
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 drop-shadow-lg max-w-3xl mx-auto min-h-21 sm:min-h-16 opacity-0"
              aria-label={fullDescription}
            >
              <span aria-hidden="true">{typedDescription}</span>
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block w-[0.55ch] animate-pulse text-orange-300"
              >
                |
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-8">
            <div
              ref={(el) => {
                if (el) buttonsRef.current[0] = el;
              }}
            >
              <Button href="/contact" text="Get Started" color="primary" />
            </div>
            <div
              ref={(el) => {
                if (el) buttonsRef.current[1] = el;
              }}
            >
              <Button
                href="/services"
                className="inline-flex  items-center gap-2 rounded-md border border-white/10  px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 text-center"
                text="View Services"
                color="neutral"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
