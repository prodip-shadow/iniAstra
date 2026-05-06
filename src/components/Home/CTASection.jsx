import Button from '@/components/buttons/Button';

export default function CTASection() {
  return (
    <section id="contact" className="bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 md:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">
                Contact
              </span>

              <div className="space-y-4">
                <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Ready to start a cleaner digital experience?
                </h2>
                <p className="max-w-xl text-base leading-7 text-gray-300 md:text-lg">
                  Share your idea, and we&apos;ll shape it into a simple,
                  professional product experience with clear design and solid
                  execution.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="#" text="Start a Project" color="primary" />
                <Button href="#services" text="View Services" color="outline" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Typical response
                </p>
                <div className="mt-3 text-3xl font-semibold text-white">
                  24h
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Quick follow-up on new project inquiries.
                </p>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Delivery style
                </p>
                <div className="mt-3 text-lg font-medium text-white">
                  Simple, focused, professional
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-400">
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
