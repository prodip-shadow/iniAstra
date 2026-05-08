function CheckIcon() {
  return (
    <svg
      className="mt-1 h-4 w-4 shrink-0 text-orange-300"
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-linear-to-br from-slate-800/70 via-slate-800/45 to-slate-900/35 p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-orange-300/35 hover:bg-slate-800/70 hover:shadow-[0_28px_64px_rgba(0,0,0,0.30)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-orange-300/80 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/12 opacity-0 transition-[transform,opacity] duration-700 ease-out group-hover:translate-x-[380%] group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 space-y-3">
          <span className="inline-flex text-sm font-semibold uppercase tracking-[0.3em] text-orange-300/90 transition-transform duration-500 ease-out group-hover:translate-x-1">
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
