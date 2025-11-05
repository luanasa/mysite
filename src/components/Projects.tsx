import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Minimalist Design",
    description: "A minimalist, responsive, and easy-to-navigate portfolio designed to showcase my favorite projects.",
    tags: ["HTML5", "CSS", "JavaScript"],
    liveUrl: "https://luanasa.github.io/portfolio-lua/index.html",
    githubUrl: "https://github.com/luanasa/portfolio-lua",
  },
    {
    id: 2,
    title: "Personal Marketing Portfolio",
    category: "Minimalist Design",
    description: "A clean, responsive, and human-centered portfolio built to highlight my creative and technical work through a seamless, minimalist experience.",
    tags: ["Tailwind", "React", "TypeScript"],
    liveUrl: "https://my-digital-studio.vercel.app/",
    githubUrl: "https://github.com/luanasa/my-digital-studio",
  },
    {
    id: 3,
    title: "Physiotherapy Website | Dra. Lauribênia Martins",
    category: "Website",
    description: "A responsive and conversion-focused website designed to present physiotherapy services with clarity, empathy, and professionalism.",
    tags: ["Vite", "Tailwind", "TypeScript", "React"],
    liveUrl: "https://lauribenia-fisio.vercel.app/",
    githubUrl: "https://github.com/luanasa/lauribenia_fisio",
  },
  {
    id: 4,
    title: "Pixel Forest Pomodoro Timer",
    category: "Pomodoro Timer",
    description: "A charming pixel art Pomodoro timer inspired by forests and Studio Ghibli aesthetic. Features cute pixelated forest creatures, encouraging messages, and forest-themed sounds created with Tone.js library.",
    tags: ["Vite", "Tailwind", "TypeScript", "Tone.js"],
    liveUrl: "https://ghibli-timer.vercel.app/",
    githubUrl: "https://github.com/luanasa/ghibli-timer",
  },
  {
    id: 5,
    title: "Vida+ App",
    category: "Machine Learning",
    description: "A preventative health app that helps you build healthy habits by tracking sleep, stress, physical activity, and hydration. With smart alerts, wearable integration, and detailed reports.",
    tags: ["Tailwind", "React", "TypeScript"],
    liveUrl: "https://vidamaisapp-h9ak.vercel.app/",
    githubUrl: "https://github.com/luanasa/vidamaisapp",
  },
    {
    id: 6,
    title: "Git-Finder App",
    category: "Dashboard",
    description: "A responsive web app that lets users explore GitHub profiles and repositories quickly and intuitively.",
    tags: ["Tailwind", "React", "TypeScript"],
    liveUrl: "https://git-find-app.vercel.app/",
    githubUrl: "https://github.com/luanasa/GitFindApp",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Some <span className="text-gradient">projects.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border overflow-hidden card-hover group"
            >
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="inline-block">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Button variant="glass" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
