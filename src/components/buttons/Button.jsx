import Link from 'next/link';

const colorVariants = {
  brand: 'btn-primary',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  neutral: 'btn-neutral',
  outline: 'btn-outline border-base-300 text-base-content hover:bg-base-200',
  
};

export default function Button({
  text,
  color,
  href,
  className = '',
  type = 'button',
  onClick,
}) {
  const colorClassName = colorVariants[color] ?? colorVariants.primary;
  const baseClassName = `btn ${colorClassName} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClassName}>
      {text}
    </button>
  );
}
