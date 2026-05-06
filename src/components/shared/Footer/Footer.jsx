import Image from 'next/image';
import Link from 'next/link';

const exploreLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
];

const supportLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <div className="text-2xl font-bold tracking-tight text-primary">
            <Link
              href="/"
              className="flex items-center border-b-2 border-transparent  transition-colors hover:border-orange-500/50"
            >
              <Image
                src="/Logos/iniAstraTechLogoWhite-01.png"
                alt="iniAstra Tech Logo"
                width={1080}
                height={1080}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <p className="mt-4 max-w-sm text-base leading-7 text-base-content/70">
            Empowering businesses with precision-engineered digital products and
            kinetic design thinking.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content">
            Explore
          </h4>
          {exploreLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-base-content/70 transition-all duration-200 hover:translate-x-1 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content">
            Support
          </h4>
          {supportLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-base-content/70 transition-all duration-200 hover:translate-x-1 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content">
            Newsletter
          </h4>
          <p className="text-sm text-base-content/70">
            Get the latest tech insights.
          </p>
          <div className="join w-full max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="input join-item w-full rounded-[10px] border-base-300 bg-base-100 text-sm text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none"
            />
            <button className="btn join-item border-0 bg-primary text-primary-content hover:bg-primary/90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M2 21V3l20 9-20 9zm2-3.1L16.85 12 4 6.1v4.53L11 12 4 13.37v4.53z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-base-300 px-6 py-4">
        <div className="mx-auto max-w-7xl text-center text-sm text-base-content/50 lg:px-8">
          © 2026 iniAstra Tech. Smart Digital Solutions for a Kinetic Future.
        </div>
      </div>
    </footer>
  );
}
