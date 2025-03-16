
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  label: string;
  href: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

const SocialLink = ({ 
  label, 
  href, 
  icon: Icon, 
  color, 
  className 
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "cute-button hover:scale-105 hover:shadow-md",
        color,
        className
      )}
    >
      <Icon size={18} strokeWidth={2} />
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;
