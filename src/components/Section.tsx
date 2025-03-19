import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  title: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, title, className, children }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("py-16 px-4", className)}
    >
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-center font-quicksand font-bold text-2xl md:text-3xl mb-10 relative">
          <span className="relative z-10">{title}</span>
          <span className="absolute inset-x-0 bottom-0 h-3 bg-pastel-lavender/30 -z-0 transform -translate-y-2"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
