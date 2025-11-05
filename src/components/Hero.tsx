import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const brazilTime = time.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Location & Time */}
          <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{brazilTime} GMT-3</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              Hi you{" "}
              <span className="inline-block animate-pulse">♡</span>
              <br />
              <span className="text-foreground">I am </span>
              <span className="text-gradient glow-effect">Luana.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              I create digital experiences since 2021
            </p>
          </div>

          {/* Role */}
          <div className="space-y-2">
            <p className="text-lg text-foreground">
              <span className="text-primary font-semibold">Cloud Engineer</span> |{" "}
              <span className="text-secondary font-semibold">Front-end Developer</span> |{" "}
              <span className="text-primary font-semibold">IA</span> |{" "}
              <span className="text-secondary font-semibold">Digital Marketing</span>
            </p>
            <p className="text-muted-foreground">creating functional digital experiences</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/luanasa" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/luamartins/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
