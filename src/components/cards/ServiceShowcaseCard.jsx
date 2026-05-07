function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-shrink-0 text-orange-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ServiceShowcaseCard({ service, className = '' }) {
  const badge = String(service.id).padStart(2, '0');

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-slate-800/70 via-slate-800/45 to-slate-900/35 p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute -right-14 top-0 h-36 w-36 rounded-full bg-orange-500/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 space-y-3">
          <span className="inline-flex text-sm font-semibold uppercase tracking-[0.3em] text-orange-300/90">
            {badge}
          </span>
          <div className="h-1 w-14 rounded-full bg-white/90" />
        </div>

        <div className="space-y-4">
          <h3 className="max-w-[12ch] text-3xl font-bold tracking-tight text-white leading-[1.05] sm:text-4xl">
            {service.title}
          </h3>
          <p className="max-w-xl text-sm font-semibold leading-7 text-white/90 sm:text-base">
            {service.description}
          </p>
        </div>

        <div className="mt-8 flex-1">
          <ul className="space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <CheckIcon />
                <span className="text-slate-100/95">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
