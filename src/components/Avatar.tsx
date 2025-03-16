
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar = ({ src, alt, className, size = 'md' }: AvatarProps) => {
  const sizeClass = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  }[size];

  return (
    <div className={cn(
      "rounded-full overflow-hidden border-4 border-pastel-pink shadow-lg",
      sizeClass,
      className
    )}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
