import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  href,
  target,
  rel,
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-out inline-flex items-center gap-2 tracking-wide";
  
  const variants = {
    primary: "bg-indigo text-white hover:bg-indigo/90 shadow-soft hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-ink/10 text-ink hover:border-ink hover:bg-white bg-transparent",
    ghost: "text-pencil hover:text-ink hover:bg-black/5"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};