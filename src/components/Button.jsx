import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  as = 'button',
  to,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg",
    secondary: "bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    ghost: "text-primary-600 hover:bg-primary-50",
    white: "bg-white text-primary-600 hover:bg-gray-50 shadow-md",
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
