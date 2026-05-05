const iconStyles = {
  devices: {
    wrapper: 'bg-primary/10 text-primary',
    svg: 'M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm2 0v7h12V7H6Zm3 12h6v2H9v-2Z',
  },
  neurology: {
    wrapper: 'bg-secondary/10 text-secondary',
    svg: 'M12 2a5 5 0 0 0-5 5c0 2.2 1.4 4 3.3 4.7L8 22h2.2l1.1-5h1.6l1.1 5H16l-2.3-10.3A5 5 0 0 0 17 7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3 3 3 0 0 1-6 0 3 3 0 0 1 3-3Z',
  },
  palette: {
    wrapper: 'bg-accent/10 text-accent',
    svg: 'M12 2a10 10 0 1 0 0 20h1a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h1a4 4 0 0 0 0-8h-1A4 4 0 0 1 13 5V4a2 2 0 0 0-1-2Zm-5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm5 1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z',
  },
  trending_up: {
    wrapper: 'bg-base-200 text-base-content',
    svg: 'M4 17l6-6 4 4 6-8v4h2V4h-7v2h3.2l-4.2 5.6-4-4L2.6 15.6 4 17Z',
  },
};

function ServiceIcon({ name }) {
  const icon = iconStyles[name] ?? iconStyles.devices;

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-[10px] ${icon.wrapper}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d={icon.svg} />
      </svg>
    </div>
  );
}

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="rounded-[10px] bg-base-100 p-8 shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="space-y-5">
        <ServiceIcon name={icon} />
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-base-content">
            {title}
          </h3>
          <p className="text-base leading-7 text-base-content/70">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
