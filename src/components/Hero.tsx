import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import luanaProfile from "@/assets/luana-profile.jpeg";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import HeroGeometry from './three/HeroGeometry';
import FloatingGeometry from './three/FloatingGeometry';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax } from '@/hooks/useParallax';

const Hero = () => {
  const { elementRef, className } = useScrollAnimation({ threshold: 0.2 });
  const parallax = useParallax(0.3);
  const currentTime = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  });

  return (
    <section ref={elementRef} className={`min-h-screen flex items-center justify-center relative overflow-hidden ${className}`}>
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${luanaProfile})`,
          filter: 'blur(40px) grayscale(100%)'
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Top info bar */}
      <div className="absolute top-8 right-8 text-right text-sm text-text-light">
        <div className="flex items-center gap-2 justify-end mb-1">
          <MapPin className="w-3 h-3" />
          <span>Based in Brazil</span>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Clock className="w-3 h-3" />
          <span>{currentTime} GMT-3</span>
        </div>
      </div>

      {/* Logo/Name in top left */}
      <div className="absolute top-8 left-8">
        <div className="bg-accent px-3 py-1 rounded text-accent-foreground font-bold text-sm">
          Luana
        </div>
      </div>

      {/* 3D Elements */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block" style={parallax.style}>
        <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={1.2} color="#ff6b6b" />
            <pointLight position={[-5, -5, 5]} intensity={0.8} color="#4ecdc4" />
            <HeroGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating elements */}
      <div className="absolute left-16 bottom-32 w-32 h-32 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <pointLight position={[2, 2, 2]} intensity={0.8} />
            <FloatingGeometry position={[-1, 0, 0]} geometry="torus" speed={0.8} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-left">
        <div className="animate-fade-up">
          {/* Main hero text */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
              <div>Hi there</div>
              <div className="flex items-baseline gap-4">
                I am{" "}
                <span className="text-accent">
                  Luana
                </span>
                <span className="text-accent text-4xl md:text-6xl">.</span>
              </div>
            </h1>
          </div>
          
          <div className="max-w-xl space-y-4 mb-12">
            <p className="text-xl text-text-light">
              I create digital experiences since 2021
            </p>
            <p className="text-lg text-text-light">
              Currently, <span className="text-foreground font-medium">Cloud Engineer | Software Developer | IA | Power BI</span> creating functional digital experiences
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              onClick={() => window.open('mailto:luamartinstravel@gmail.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://github.com/luanasa', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/luamartins/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;