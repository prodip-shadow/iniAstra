'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function ErrorPage({ error, reset, scope = 'Page' }) {
  const shellRef = useRef(null);
  const panelRef = useRef(null);
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const elements = [
      shellRef.current,
      panelRef.current,
      titleRef.current,
      copyRef.current,
      actionsRef.current,
    ].filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        },
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.15,
          ease: 'power2.out',
        },
      );

      gsap.fromTo(
        copyRef.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: 0.25,
          ease: 'power2.out',
        },
      );

      gsap.fromTo(
        actionsRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: 0.35,
          ease: 'power2.out',
        },
      );
    }, shellRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={shellRef}
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-linear-to-b from-slate-950 to-slate-900 px-4 py-10 sm:px-6 lg:px-8"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent opacity-60" />

        <div className="relative z-10 space-y-6">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-300">
              {scope} error
            </span>

            <div ref={titleRef} className="space-y-3">
              <h1 className="font-audiowide text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Something broke.
              </h1>
              <p className="max-w-xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
                The page ran into an unexpected problem while rendering. You can
                retry immediately or return to the homepage and continue from
                there.
              </p>
            </div>

            <div
              ref={copyRef}
              className="space-y-3 text-sm text-gray-400 sm:text-base"
            >
              <p className="max-w-xl leading-6 sm:leading-7">
                Our design system stays intact here too: deep slate surfaces,
                bright orange accents, and motion that feels deliberate instead
                of noisy.
              </p>
              {process.env.NODE_ENV !== 'production' && error?.message ? (
                <p className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 font-mono text-xs leading-5 text-orange-200/90 sm:text-sm">
                  {error.message}
                </p>
              ) : null}
            </div>

            <div ref={actionsRef} className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300"
              >
                Back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
