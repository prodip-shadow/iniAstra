import Image from 'next/image';
import Button from '@/components/buttons/Button';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-base-100 py-16 md:py-24">
      <div className="absolute -right-40 top-0 h-128 w-lg rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-base-300 bg-base-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Next-Gen Digital Lab
          </span>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-base-content md:text-6xl">
              Smart Digital Solutions for Modern Businesses
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-base-content/70">
              We design, develop, and integrate intelligent systems to help your
              business grow. Transform your operational efficiency with kinetic
              technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#contact" text="Get Started" color="primary" />
            <Button href="#services" text="View Services" color="secondary" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[10px] bg-primary/10 blur-3xl" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUz2G6Lp6XV57V-5rxEh0eRVizmpoaS3iQvKfl1udVKi8sBVMlUa06uza0GSpAPWmfhfNy71L4mBShL2ndrOXrHIKDpkNuOLDSr70FcqXGxr-CeDLIXkjGeM3rEm5RTA0mDqi5aw_KVUQJRBxNUgtHs9u2Pe51eKxyz8kIqXnwOl4Dp6mhe2U--bvzCXFLA0PLNthHifItujwf-xcgB3IQJecuEGxIm1tJgbTLck78rJajs-paeFzANfhuSwjBruzFGkJEjh6KzUE"
            alt="Modern office collaborative environment"
            width={1280}
            height={800}
            loading="eager"
            unoptimized
            className="relative h-125 w-full rounded-[10px] object-cover shadow-2xl shadow-black/10"
          />
        </div>
      </div>
    </section>
  );
}
