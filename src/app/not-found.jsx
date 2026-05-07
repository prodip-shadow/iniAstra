'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '@/components/buttons/Button';

export default function NotFound() {
  const shellRef = useRef(null);
  const panelRef = useRef(null);
  const accentRef = useRef(null);
  const titleRef = useRef(null);
  const copyRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      timeline
        .fromTo(
          shellRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25 },
        )
        .fromTo(
          panelRef.current,
          { opacity: 0, y: 22, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          '-=0.02',
        )
        .fromTo(
          accentRef.current,
          { opacity: 0, scaleX: 0.2 },
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.4,
            transformOrigin: 'left center',
          },
          '-=0.35',
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          '-=0.25',
        )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.28',
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          '-=0.22',
        );
    }, shellRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={shellRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <section
          ref={panelRef}
          className="relative w-full overflow-hidden rounded-3xl border p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10"
          style={{
            backgroundColor: 'var(--surface-1)',
            borderColor: 'rgba(255,255,255,0.08)',
          }}
        >
          <div
            ref={accentRef}
            className="mb-8 h-1 w-24 rounded-full"
            style={{
              background:
                'linear-gradient(90deg, var(--brand-start), var(--brand-end))',
            }}
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-3 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{
                  borderColor: 'var(--brand-outline)',
                  color: 'var(--foreground)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                }}
              >
                404 error
              </div>

              <div ref={titleRef} className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Page not found.
                </h1>
                <p
                  className="max-w-xl text-sm leading-7 sm:text-base sm:leading-8"
                  style={{ color: 'rgba(248,250,252,0.72)' }}
                >
                  The page you are looking for does not exist or has been moved.
                  Use the buttons below to return home or open the services
                  page.
                </p>
              </div>

              <div
                ref={copyRef}
                className="max-w-xl text-sm leading-7 sm:text-base sm:leading-8"
                style={{ color: 'rgba(248,250,252,0.62)' }}
              >
                <p>
                  This page stays aligned with the site theme by using only the
                  global background, surface, foreground, and brand tokens.
                </p>
              </div>

              <div ref={actionsRef} className="flex flex-col gap-3 sm:flex-row">
                <Button href="/" text="Back home" color="brand" />
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div
                className="relative flex h-72 w-72 items-center justify-center rounded-full border"
                style={{
                  borderColor: 'rgba(255,255,255,0.06)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                }}
              >
                <div
                  className="absolute inset-8 rounded-full"
                  style={{ border: '1px solid rgba(255,122,0,0.18)' }}
                />
                <div
                  className="absolute inset-16 rounded-full"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                />

                <div
                  className="absolute left-10 top-12 h-3 w-3 rounded-full brand-shadow"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                />
                <div
                  className="absolute right-12 top-20 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
                <div
                  className="absolute bottom-12 left-14 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />

                <div className="text-center">
                  <div
                    className="text-[11px] font-semibold uppercase tracking-[0.45em]"
                    style={{ color: 'rgba(248,250,252,0.5)' }}
                  >
                    404
                  </div>
                  <div className="mt-3 text-8xl font-bold tracking-tight text-white sm:text-9xl">
                    404
                  </div>
                  <div
                    className="mt-2 text-sm"
                    style={{ color: 'rgba(248,250,252,0.62)' }}
                  >
                    Page not found.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
