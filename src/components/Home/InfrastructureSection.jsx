export default function InfrastructureSection() {
  return (
    <section className="bg-slate-950/10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 items-center">
          {/* Left: heading and intro */}
          <div>
            <span className="inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs sm:text-sm font-semibold text-orange-300 mb-4">
              Infrastructure
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white max-w-xl leading-tight">
              Resilient systems that scale with your product
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 max-w-lg leading-6 sm:leading-7">
              We design scalable architecture, observability, and cost-efficient
              cloud strategies tailored for performance and reliability —
              communicated through abstract visuals and icons (no people
              photography).
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white text-center"
              >
                Contact Sales
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 text-center"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Right: flat feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-4 sm:p-6 h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 sm:p-3 text-primary shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 sm:h-6 w-5 sm:w-6"
                  >
                    <path d="M3 12h3v7h12v-7h3V7H3v5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Fast Deployments
                  </h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6">
                    CI/CD, canary releases and infra-as-code for safe launches.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-4 sm:p-6 h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 sm:p-3 text-accent shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 sm:h-6 w-5 sm:w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Global Reach
                  </h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6">
                    Multi-region deployments, CDN and latency optimisation.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-4 sm:p-6 h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-lg bg-primary/10 p-2.5 sm:p-3 text-primary shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 sm:h-6 w-5 sm:w-6"
                  >
                    <path d="M4 7h16v2H4zM4 11h10v2H4zM4 15h7v2H4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Observability
                  </h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6">
                    Monitoring, alerting and dashboards to keep systems healthy.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-white/6 bg-slate-900/40 p-4 sm:p-6 h-full">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="rounded-lg bg-accent/10 p-2.5 sm:p-3 text-accent shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 sm:h-6 w-5 sm:w-6"
                  >
                    <path d="M12 2l3 7h7l-5.5 4 2 8L12 17l-6.5 4 2-8L2 9h7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Cost Efficient
                  </h4>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 leading-5 sm:leading-6">
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
