import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">touch.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8 md:p-12">
            <div className="space-y-8">
              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="glass"
                  size="lg"
                  className="h-auto py-6 flex-col gap-3"
                  asChild
                >
                  <a href="mailto:luamartinstravel@gmail.com">
                    <Mail className="w-8 h-8" />
                    <div className="text-center">
                      <div className="font-semibold">Email</div>
                      <div className="text-xs text-muted-foreground">Send a message</div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  className="h-auto py-6 flex-col gap-3"
                  asChild
                >
                  <a href="https://github.com/luanasa" target="_blank" rel="noopener noreferrer">
                    <Github className="w-8 h-8" />
                    <div className="text-center">
                      <div className="font-semibold">GitHub</div>
                      <div className="text-xs text-muted-foreground">Check my code</div>
                    </div>
                  </a>
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  className="h-auto py-6 flex-col gap-3"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/luamartins/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-8 h-8" />
                    <div className="text-center">
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">Let's connect</div>
                    </div>
                  </a>
                </Button>
              </div>

              {/* CTA */}
              <div className="text-center space-y-4 pt-8 border-t border-border">
                <h3 className="text-2xl font-bold">Ready to start a project?</h3>
                <p className="text-muted-foreground">
                  Let's collaborate and create something amazing together.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:luamartinstravel@gmail.com">
                    <Send className="w-5 h-5" />
                    Start a conversation
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
