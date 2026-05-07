'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import AboutMemberCard from '@/components/cards/AboutMemberCard';
import AboutClientCard from '@/components/cards/AboutClientCard';

const leadershipTeam = [
  {
    name: 'Bob Brockgreitens',
    role: 'Business Development Lead',
    image:
      'https://ui-avatars.com/api/?name=Bob+Brockgreitens&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Lynn Bud Avery',
    role: 'Foreign Advisor',
    image:
      'https://ui-avatars.com/api/?name=Lynn+Bud+Avery&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Abdur Rashid Sohag',
    role: 'Advisor',
    image:
      'https://ui-avatars.com/api/?name=Abdur+Rashid+Sohag&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Sheznan Tayab Navid',
    role: 'Technical Lead Engineer',
    image:
      'https://ui-avatars.com/api/?name=Sheznan+Tayab+Navid&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Shoriful Islam Tareq',
    role: 'Software Engineer',
    image:
      'https://ui-avatars.com/api/?name=Shoriful+Islam+Tareq&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Durjoy Barua',
    role: 'Cloud Engineer',
    image:
      'https://ui-avatars.com/api/?name=Durjoy+Barua&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'NM Abrar',
    role: 'ML/AI Engineer',
    image:
      'https://ui-avatars.com/api/?name=NM+Abrar&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Tanzir Rifat',
    role: 'Sr. Web Developer',
    image:
      'https://ui-avatars.com/api/?name=Tanzir+Rifat&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
];

const clients = [
  {
    name: 'Alpha Omega Computing',
    subtitle: 'Technology partner',
    image:
      'https://ui-avatars.com/api/?name=Alpha+Omega+Computing&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'Tatonka Hotel de Playa',
    subtitle: 'Hospitality branding',
    image:
      'https://ui-avatars.com/api/?name=Tatonka+Hotel+de+Playa&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
  {
    name: 'In',
    subtitle: 'Internal brand system',
    image:
      'https://ui-avatars.com/api/?name=Tatonka+Hotel+de+Playa&background=0B1020&color=FFFFFF&size=256&bold=true&format=svg',
  },
];

function SectionLabel({ number, title, eyebrow, titleRef }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-orange-400">
        <span className="text-sm font-semibold tracking-[0.35em]">
          {number}
        </span>
        <span className="h-px w-12 bg-(--brand-outline)" />
      </div>
      <span className="inline-flex rounded-full border border-(--brand-outline) bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-(--foreground)">
        {eyebrow}
      </span>
      <h2
        ref={titleRef}
        className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  const shellRef = useRef(null);
  const sectionRefs = useRef([]);
  const titleRefs = useRef([]);
  const textRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        shellRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25 },
      )
        .fromTo(
          sectionRefs.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.14 },
          '-=0.05',
        )
        .fromTo(
          titleRefs.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.2',
        )
        .fromTo(
          textRefs.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
          '-=0.2',
        )
        .fromTo(
          cardRefs.current,
          { opacity: 0, y: 14, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.05 },
          '-=0.12',
        );
    }, shellRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={shellRef}
      className="relative min-h-screen overflow-hidden bg-(--background) px-4 py-10 sm:px-6 lg:px-8"
      style={{ color: 'var(--foreground)' }}
    >
      <div className="relative mx-auto max-w-7xl space-y-24 lg:space-y-28">
        <section
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          className="grid gap-10 pt-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-orange-400">
              <span className="text-sm font-semibold tracking-[0.35em]">
                01
              </span>
              <span className="h-px w-12 bg-(--brand-outline)" />
            </div>
            <span className="inline-flex rounded-full border border-(--brand-outline) bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-(--foreground)">
              Vision
            </span>
            <Image
              src="/Logos/iniAstraTechLogoWhite-01.png"
              alt="iniAstra Tech logo"
              height={1080}
              width={1080}
              className="h-auto w-56 sm:w-64"
            />
            <p className="max-w-md text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              Designing and building interactive digital products with a clean,
              modern, and business-first approach.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <SectionLabel
                number=""
                eyebrow="Who we are"
                title="We are iniAstraTech, a business team specializing in interactive online and software services."
                titleRef={(el) => {
                  titleRefs.current[0] = el;
                }}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-(--surface-1)/80 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-300/90">
                  Focus
                </div>
                <p
                  ref={(el) => {
                    textRefs.current[0] = el;
                  }}
                  className="mt-3 text-sm leading-7 text-white/70"
                >
                  Web design, AI and ML integration, web development, mobile app
                  development, UI/UX design, graphic design, digital marketing,
                  domain registration, and web hosting.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-(--surface-1)/80 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-300/90">
                  Delivery
                </div>
                <p
                  ref={(el) => {
                    textRefs.current[1] = el;
                  }}
                  className="mt-3 text-sm leading-7 text-white/70"
                >
                  Strategy, design, development, launch, and support. We keep
                  the experience stable, maintainable, and professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          className="space-y-10"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              number="02"
              eyebrow="People"
              title="Leadership Team Members"
              titleRef={(el) => {
                titleRefs.current[1] = el;
              }}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {leadershipTeam.map((member, index) => (
              <AboutMemberCard
                key={member.name}
                member={member}
                index={index}
                cardRef={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </section>

        <section
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          className="space-y-10 pb-16"
        >
          <SectionLabel
            number="03"
            eyebrow="Clients"
            title="Trusted by teams that value clean execution."
            titleRef={(el) => {
              titleRefs.current[2] = el;
            }}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {clients.map((client, index) => (
              <AboutClientCard
                key={client.name}
                client={client}
                cardRef={(el) => {
                  if (el) cardRefs.current[leadershipTeam.length + index] = el;
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
