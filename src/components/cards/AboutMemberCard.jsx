import Image from 'next/image';

export default function AboutMemberCard({ member, cardRef, index }) {
  return (
    <article
      ref={cardRef}
      className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-(--surface-1)/90 p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5"
      style={{ boxShadow: '0 18px 50px rgba(0, 0, 0, 0.18)' }}
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-slate-900">
        <Image
          src={member.image}
          alt={member.name}
          height={1080}
          width={1080}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-300/90">
          0{index + 1}
        </div>
        <h3 className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-white/65 sm:text-sm">
          {member.role}
        </p>
      </div>
    </article>
  );
}
