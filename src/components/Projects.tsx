import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Scene3D from './three/Scene3D';
import SimpleScene3D from './three/SimpleScene3D';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { elementRef, className } = useScrollAnimation({ threshold: 0.1 });
  const projects = [
    {
      title: "Personal Portfolio",
      subtitle: "Minimalist Design",
      description: "A minimalist, responsive, and easy-to-navigate portfolio designed to showcase my favorite projects.",
      tech: ["HTML5", "CSS", "JavaScript"],
      liveUrl: "https://luanasa.github.io/portfolio-lua/index.html",
      githubUrl: "https://github.com/luanasa/portfolio-lua",
    },
    {
      title: "Pixel Forest Pomodoro Timer",
      subtitle: "Pomodoro Timer",
      description: "The Pixel Forest Pomodoro Timer is a charming pixel art Pomodoro timer inspired by forests and the Studio Ghibli aesthetic. It helps users focus using the Pomodoro Technique, featuring cute pixelated forest creatures, encouraging messages, and a nostalgic checkerboard background. The timer also includes forest-themed sounds like chimes and melodies, created with the Tone.js library, which add an extra layer of immersion and joy to each interaction. The entire project is built using Vite for fast and efficient performance.",
      tech: ["Vite", "Tailwind", "TypeScript", "Tone.js"],
      liveUrl: "https://ghibli-timer.vercel.app/",
      githubUrl: "https://github.com/luanasa/ghibli-timer",
    },
    {
      title: "Vida+ App",
      subtitle: "Machine Learning",
      description: "Vida+ is a preventative health app that helps you build healthy habits by tracking sleep, stress, physical activity, and hydration. With smart alerts, wearable integration, and detailed reports, the app offers personalized suggestions to improve your quality of life.",
      tech: ["Tailwind", "React", "Typescript"],
      liveUrl: "https://vidamaisapp-h9ak.vercel.app/",
      githubUrl: "https://github.com/luanasa/vidamaisapp",
    },
    {
      title: "Modern Currency Converter",
      subtitle: "Real-Time Currency Conversion",
      description: "A complete and elegant currency converter, offering real-time conversion, historical charts and an exceptional user experience.",
      tech: ["Tailwind", "React", "Typescript", "Chart.js", "Vite" ],
      liveUrl: "https://conversor-de-moedas-lake.vercel.app/",
      githubUrl: "https://github.com/luanasa/conversor-de-moedas",
    },
        {
      title: "Online Invitation",
      subtitle: "Online Invitation",
      description: "A mini-site invitation for my birthday.",
      tech: ["Vite", "Typescript", "Tailwind"],
      liveUrl: "https://niver-luana.vercel.app/",
      githubUrl: "https://github.com/luanasa/niver-luana",
    },
  ];

  return (
    <section ref={elementRef} id="projects" className={`py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Diego-style heading */}
        <div className="mb-24 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Some projects<span className="text-accent">.</span>
          </h2>
        </div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-16 items-center animate-fade-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] bg-surface-subtle rounded-lg overflow-hidden shadow-strong relative group">
                  {index === 0 ? (
                    <Scene3D className="absolute inset-0" interactive />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-accent/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <span className="text-accent text-4xl font-bold">{'</>'}</span>
                        </div>
                        <p className="text-text-light font-medium text-lg">{project.subtitle}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              </div>
              
              {/* Project info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h4 className="text-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                    {project.subtitle}
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-lg text-text-light leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-surface-subtle text-sm font-medium rounded-full border border-border hover:border-accent transition-smooth"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <Button 
                      asChild
                      variant="default" 
                      className="bg-accent hover:bg-accent/90"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      asChild
                      variant="outline"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;