import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import TranslatableText from './TranslatableText';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  deployUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  deployUrl,
  githubUrl,
  className
}: ProjectProps) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-lg border-pastel-lavender/50 hover:border-pastel-lavender/80",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" 
        />
      </div>
      <CardHeader>
        <CardTitle className="font-quicksand font-bold">{title}</CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-pastel-lavender/20 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {deployUrl && (
          <Button 
            variant="outline" 
            className="flex-1 bg-pastel-pink hover:bg-pastel-pink/80 text-primary-foreground"
            onClick={() => window.open(deployUrl, '_blank')}
          >
            <ExternalLink size={18} className="mr-2" />
            <TranslatableText textKey="projects.view" />
          </Button>
        )}
        {githubUrl && (
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github size={18} className="mr-2" />
            <TranslatableText textKey="projects.code" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
