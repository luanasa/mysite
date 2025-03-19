
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  label: React.ReactNode;
  href: string;
  icon: LucideIcon;
  color?: string;
  className?: string;
}

const SocialLink = ({ 
  label, 
  href, 
  icon: Icon, 
  color = "bg-primary", 
  className 
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all hover:shadow-md", 
        color, 
        className
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </a>
  );
};

export default SocialLink;
