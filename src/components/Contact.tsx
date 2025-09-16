import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Heart, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { elementRef, className } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} id="contact" className={`py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black mb-12">
            Let's work together<span className="text-accent">.</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-xl text-text-light leading-relaxed">
                Ready to bring your ideas to life? I'd love to hear about your project 
                and explore how we can create something amazing together.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:luamartinstravel@gmail.com"
                  className="flex items-center gap-4 group hover:text-accent transition-smooth"
                >
                  <div className="w-12 h-12 bg-surface-subtle rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-light">Email</div>
                    <div className="font-medium">luamartinstravel@gmail.com</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
                
                <a 
                  href="https://github.com/luanasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:text-accent transition-smooth"
                >
                  <div className="w-12 h-12 bg-surface-subtle rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-light">GitHub</div>
                    <div className="font-medium">@luanasa</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/luamartins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group hover:text-accent transition-smooth"
                >
                  <div className="w-12 h-12 bg-surface-subtle rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-text-light">LinkedIn</div>
                    <div className="font-medium">Luana Martins</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
              </div>
            </div>
            
            <div className="bg-surface-subtle p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-text-light mb-8">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you.
              </p>
              
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => window.open('mailto:luamartinstravel@gmail.com')}
              >
                Send me an email
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-24 pt-12 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-light flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-accent" /> by Luana Martins
            </p>
            <p className="text-text-light text-sm">
              © 2025 — Designed & Built with care
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;