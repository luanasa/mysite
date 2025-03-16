
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ 
  id, 
  title, 
  children, 
  className,
  titleClassName
}: SectionProps) => {
  return (
    <section id={id} className={cn("cute-section", className)}>
      <div className="container max-w-4xl mx-auto">
        <h2 className={cn(
          "font-quicksand font-bold text-2xl md:text-3xl mb-8 text-center relative",
          titleClassName
        )}>
          <span className="relative z-10">{title}</span>
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-3 w-24 bg-pastel-pink/50 dark:bg-primary/30 rounded-full -z-0"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
