export default function InfrastructureSection() {
  return (
    <section className="bg-slate-950/10 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left: heading and intro */}
          <div>
            <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold text-orange-300 mb-4">
              Infrastructure
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-white max-w-xl">
              Resilient systems that scale with your product
            </h2>

            <p className="mt-4 text-base text-gray-300 max-w-lg">
              We design scalable architecture, observability, and cost-efficient
              cloud strategies tailored for performance and reliability —
              communicated through abstract visuals and icons (no people
              photography).
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white"
              >
                Contact Sales
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right: flat feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M3 12h3v7h12v-7h3V7H3v5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Fast Deployments
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    CI/CD, canary releases and infra-as-code for safe launches.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Global Reach
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Multi-region deployments, CDN and latency optimisation.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M4 7h16v2H4zM4 11h10v2H4zM4 15h7v2H4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Observability
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Monitoring, alerting and dashboards to keep systems healthy.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Cost Efficient
                  </h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Architecture patterns that reduce cloud spend while scaling.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
