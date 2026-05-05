import Button from '@/components/buttons/Button';

export default function CTASection() {
  return (
    <section id="contact" className="bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[10px] bg-base-content px-8 py-10 text-base-100 brand-shadow md:px-12 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-content/80">
                Next-Gen Digital Lab
              </p>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s build something amazing together
              </h2>
              <p className="max-w-xl text-base leading-7 text-base-100/75 md:text-lg">
                Ready to take your business to the next level? Connect with us
                and start your digital journey today.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <div className="flex gap-3 text-base-100/80">
                <a
                  href="#"
                  className="btn btn-circle border-0 bg-base-100/10 text-base-100 hover:bg-base-100/20"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="btn btn-circle border-0 bg-base-100/10 text-base-100 hover:bg-base-100/20"
                  aria-label="Email"
                >
                  @
                </a>
                <a
                  href="#"
                  className="btn btn-circle border-0 bg-base-100/10 text-base-100 hover:bg-base-100/20"
                  aria-label="Share"
                >
                  ↗
                </a>
              </div>

              <Button href="#" text="Schedule a Consultation" color="accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
