import Image from 'next/image';
import Button from '@/components/buttons/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 -mt-16 pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUz2G6Lp6XV57V-5rxEh0eRVizmpoaS3iQvKfl1udVKi8sBVMlUa06uza0GSpAPWmfhfNy71L4mBShL2ndrOXrHIKDpkNuOLDSr70FcqXGxr-CeDLIXkjGeM3rEm5RTA0mDqi5aw_KVUQJRBxNUgtHs9u2Pe51eKxyz8kIqXnwOl4Dp6mhe2U--bvzCXFLA0PLNthHifItujwf-xcgB3IQJecuEGxIm1tJgbTLck78rJajs-paeFzANfhuSwjBruzFGkJEjh6KzUE"
          alt="Hero Background"
          fill
          loading="eager"
          unoptimized
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-950/70 to-slate-950/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-40 top-0 h-128 w-lg rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto">
          <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400 backdrop-blur-sm">
            Next-Gen Digital Lab
          </span>

          <div className="space-y-8 mt-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl">
              Smart Digital Solutions for Modern Businesses
            </h1>
            <p className="text-xl sm:text-lg leading-8 text-gray-300 drop-shadow-lg max-w-3xl mx-auto">
              We design, develop, and integrate intelligent systems to help your
              business grow. Transform your operational efficiency with kinetic
              technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button href="#contact" text="Get Started" color="primary" />
            <Button href="#services" text="View Services" color="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
