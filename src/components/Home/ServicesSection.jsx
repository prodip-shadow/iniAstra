import ServiceCard from '@/components/cards/ServiceCard';

const services = [
  {
    icon: 'devices',
    title: 'Design & Dev',
    description:
      'Modern Mobile & Web applications built with performance-first architectures and clean code.',
  },
  {
    icon: 'neurology',
    title: 'AI & ML',
    description:
      'Seamless integration of intelligent models to automate workflows and provide deep data insights.',
  },
  {
    icon: 'palette',
    title: 'Brand Design',
    description:
      "Graphics, motion design, and high-fidelity UX that tells your brand's unique story and values.",
  },
  {
    icon: 'trending_up',
    title: 'Growth & SEO',
    description:
      'Digital marketing strategies and technical SEO to ensure your business reaches the right audience.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-base-content md:text-5xl">
            Our Expertise
          </h2>
          <p className="text-base leading-7 text-base-content/70 md:text-lg">
            Tailored technological solutions designed to bridge the gap between
            vision and reality. We specialize in high-performance digital
            products.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
