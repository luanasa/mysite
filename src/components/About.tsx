import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Cloud, Code, Brain, BarChart3, User } from "lucide-react";

const skills = [
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "Designing and implementing scalable cloud infrastructure solutions",
  },
  {
    icon: Code,
    title: "Front-end Development",
    description:
      "Crafting intuitive and responsive user interfaces using modern frameworks like React and TypeScript",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Leveraging AI and machine learning to solve complex problems",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Developing strategies that combine storytelling, design, and data to build meaningful brands and attract audiences",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">me.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference.
          </p>
        </div>

        {/* Cards de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border p-6 card-hover group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {skill.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Seção de bio com avatar */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Avatar className="size-40 shrink-0 rounded-full overflow-hidden border-4 border-primary/20">
                <AvatarImage
                  src="/luana-profile.jpeg"
                  alt="Luana Sá Martins"
                  className="w-full h-full object-cover object-center"
                />
                <AvatarFallback className="bg-gradient-primary">
                  <User className="w-10 h-10 text-primary-foreground" />
                </AvatarFallback>
              </Avatar>

              <p className="text-foreground text-lg leading-relaxed flex-1">
                Since 2021, I’ve been crafting digital experiences that bridge design,
                content, and technology. My work blends front-end development, UX
                writing, and digital strategy — transforming ideas into intuitive,
                human-centered interfaces. I believe every pixel and every word has the
                power to guide, inspire, and create meaningful connections between
                brands and people.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
