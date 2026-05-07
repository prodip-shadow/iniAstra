import Image from 'next/image';

export default function AboutClientCard({ client, cardRef }) {
  return (
    <article
      ref={cardRef}
      className="group flex min-h-60 flex-col items-center justify-center rounded-3xl border border-white/10 bg-(--surface-1)/90 p-6 text-center transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: '0 18px 50px rgba(0, 0, 0, 0.18)' }}
    >
      <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-4">
        <Image
          src={client.image}
          alt={client.name}
          height={1080}
          width={1080}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold tracking-tight text-white sm:text-xl">
        {client.name}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/65 sm:text-sm">
        {client.subtitle}
      </p>
    </article>
  );
}
