
import React from 'react';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  className?: string;
}

const ExperienceCard = ({ 
  title, 
  company, 
  period, 
  description, 
  className 
}: ExperienceCardProps) => {
  return (
    <div className={cn(
      "cute-card hover:border-pastel-pink hover:border-2 p-6",
      className
    )}>
      <div className="flex flex-col gap-1">
        <h3 className="font-quicksand font-bold text-lg">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm">
          <span className="font-medium text-gray-700">{company}</span>
          <span className="hidden sm:block text-gray-400">•</span>
          <span className="text-gray-500">{period}</span>
        </div>
        <p className="mt-3 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
