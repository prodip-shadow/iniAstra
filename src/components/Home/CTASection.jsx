import Button from '@/components/buttons/Button';

export default function CTASection() {
  return (
    <section
      id="contact"
      className="bg-slate-950/10 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 md:p-12 lg:p-14">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-4 sm:space-y-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-base-content/70">
                Contact
              </span>

              <div className="space-y-3 sm:space-y-4">
                <h2 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                  Ready to start a cleaner digital experience?
                </h2>
                <p className="max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-base-content/70 md:text-lg">
                  Share your idea, and we&apos;ll shape it into a simple,
                  professional product experience with clear design and solid
                  execution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 pt-2">
                <Button href="#" text="Start a Project" color="primary" />
                <Button href="#services" text="View Services" color="outline" />
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <article className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">
                  Typical response
                </p>
                <div className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-white">
                  24h
                </div>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-base-content/60">
                  Quick follow-up on new project inquiries.
                </p>
              </article>

              <article className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60">
                  Delivery style
                </p>
                <div className="mt-2 sm:mt-3 text-base sm:text-lg font-medium text-white">
                  Simple, focused, professional
                </div>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-base-content/60">
                  Clean layouts, clear messaging, and practical UI.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
