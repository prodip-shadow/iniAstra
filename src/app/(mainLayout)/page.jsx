import CTASection from '@/components/Home/CTASection';
import HeroSection from '@/components/Home/HeroSection';
import InfrastructureSection from '@/components/Home/InfrastructureSection';
import ServicesSection from '@/components/Home/ServicesSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <InfrastructureSection />
      <CTASection />
    </main>
  );
}
