import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'primaryLg' | 'secondary' | 'ghost';

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  primaryLg: 'btn-primary-lg',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
};

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  href,
  showArrow = false,
  className,
  onClick,
  type = 'button',
}: ButtonProps) {
  const cls = `${variantClass[variant]}${className ? ` ${className}` : ''}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
