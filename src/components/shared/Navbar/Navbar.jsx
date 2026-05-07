'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems = [
  { label: 'Services', href: '#services', active: true },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef(null);
  const logoBgRef = useRef(null);
  const routesBgRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    const logoBgElement = logoBgRef.current;
    const routesBgElement = routesBgRef.current;

    if (!navElement || !logoBgElement || !routesBgElement) {
      return undefined;
    }

    const animationState = {
      blur: 0,
      glass: 0,
    };

    const applyStyles = () => {
      const blurValue = `${animationState.blur}px`;
      // dark liquid glass overlay - smooth fade animation
      const logoGlassValue = `rgba(6, 8, 15, ${animationState.glass})`;

      [logoBgElement, routesBgElement].forEach((element) => {
        element.style.backgroundColor = logoGlassValue;
        // blur + saturate with smooth brightness fade
        element.style.backdropFilter = `blur(${blurValue}) saturate(120%) brightness(${98 - animationState.glass * 28}%)`;
        element.style.webkitBackdropFilter = `blur(${blurValue}) saturate(120%) brightness(${98 - animationState.glass * 28}%)`;
      });
    };

    const animateToScrollState = () => {
      const progress = Math.min(window.scrollY / 140, 1);
      gsap.to(animationState, {
        blur: gsap.utils.interpolate(0, 34, progress),
        glass: gsap.utils.interpolate(0, 0.22, progress),
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: applyStyles,
      });
    };

    // ensure initial transparent state before any scroll
    applyStyles();
    animateToScrollState();
    window.addEventListener('scroll', animateToScrollState, { passive: true });

    return () => window.removeEventListener('scroll', animateToScrollState);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-4 sm:top-8 z-50 w-full border-none bg-transparent transition-colors duration-300"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="mx-auto flex h-12 sm:h-14 w-full max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          ref={logoBgRef}
          className="shrink-0 rounded-lg sm:rounded-2xl p-1"
          style={{
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
          }}
        >
          <Link
            href="/"
            className="flex items-center border-b-2 p-2 sm:p-3 border-transparent transition-colors hover:border-orange-500/50"
          >
            <Image
              src="/Logos/whitelogoforwebsite2-01.png"
              alt="iniAstra Tech Logo"
              width={1080}
              height={1080}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>

        <div
          ref={routesBgRef}
          className="hidden items-center gap-0.5 sm:gap-1 rounded-lg sm:rounded-2xl px-4 sm:px-6 py-1 sm:py-1.5 md:flex"
          style={{
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            WebkitBackdropFilter: 'blur(0px)',
          }}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`shrink-0 border-b-2 p-2 sm:p-3 text-xs sm:text-sm font-semibold transition-all duration-300 text-white ${
                item.active
                  ? 'border-orange-500'
                  : 'border-transparent hover:border-orange-500/50 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:hidden">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle btn-sm sm:btn-md border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu dropdown-content mt-2 sm:mt-3 w-48 sm:w-56 rounded-lg sm:rounded-[10px] border border-white/10 bg-slate-950/90 p-2 sm:p-3 shadow-xl backdrop-blur-2xl text-sm">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`transition-colors text-xs sm:text-sm ${
                      item.active
                        ? 'font-semibold text-orange-400'
                        : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
