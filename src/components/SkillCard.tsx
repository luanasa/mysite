
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

const SkillCard = ({ title, icon: Icon, color, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "cute-card group hover:scale-105",
      className
    )}>
      <div className={cn(
        "cute-icon-bg mb-3 mx-auto w-16 h-16 group-hover:animate-wiggle",
        color
      )}>
        <Icon size={32} className="text-white" strokeWidth={1.5} />
      </div>
      <h3 className="text-center font-quicksand font-bold">{title}</h3>
    </div>
  );
};

export default SkillCard;
