import Link from 'next/link';
import Button from '@/components/buttons/Button';

const navigationItems = [
  { label: 'Services', href: '#services', active: true },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          iniAstra Tech
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.active
                  ? 'border-b-2 border-primary pb-1 text-sm font-semibold text-primary transition-colors duration-300'
                  : 'text-sm font-semibold text-base-content/70 transition-colors duration-300 hover:text-primary'
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle border border-base-300 bg-base-100 text-base-content hover:bg-base-200"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul className="menu dropdown-content mt-3 w-56 rounded-[10px] border border-base-300 bg-base-100 p-3 shadow-xl">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={item.active ? 'font-semibold text-primary' : ''}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button
            href="#contact"
            text="Get Started"
            color="primary"
            className="h-11 rounded-[10px] px-4 text-sm font-semibold transition-transform hover:scale-[0.98] active:scale-95"
          />
        </div>
      </div>
    </nav>
  );
}
