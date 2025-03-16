
import React from 'react';
import Avatar from '@/components/Avatar';
import Section from '@/components/Section';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';
import SocialLink from '@/components/SocialLink';
import { 
  Code, 
  PaintBucket, 
  Lightbulb, 
  Database, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pastel-lavender/30 to-white">
        <div className="container max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="animate-float">
            <Avatar 
              src="./lua.jpeg" 
              alt="Profile" 
              size="xl"
            />
          </div>
          <h1 className="mt-8 font-quicksand font-bold text-4xl md:text-5xl">
            Hi, I'm <span className="text-primary">Luana</span> 👋
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-lg">
            Cloud Engineer, Developer & IA Student creating cute and functional digital experiences
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <SocialLink 
              label="Email Me" 
              href="mailto:luamartinstravel@gmail.com" 
              icon={Mail} 
              color="bg-pastel-pink text-primary-foreground"
            />
            <SocialLink 
              label="GitHub" 
              href="https://github.com/luanasa" 
              icon={Github}
              color="bg-pastel-blue text-primary-foreground" 
            />
            <SocialLink 
              label="LinkedIn" 
              href="https://www.linkedin.com/in/luamartins/" 
              icon={Linkedin}
              color="bg-pastel-lavender text-primary-foreground" 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="cute-card text-center sm:text-left flex flex-col sm:flex-row gap-8 items-center">
          <div className="w-full sm:w-1/3 flex-shrink-0">
            <img 
              src="./Computer.jpg" 
              alt="Fun Profile" 
              className="w-full h-auto rounded-2xl shadow-md"
            />
          </div>
          <div className="space-y-4">
            <p>
              Hello! I’m a creative professional with a deep passion for crafting stunning designs and writing clean, efficient code. 
              When I’m not immersed in creating seamless digital experiences, you can find me exploring my artistic side through crocheting,
              sculpting ceramics, or enjoying cozy moments with my cats. ✨
            </p>
            <p>
              I believe in creating work that's not just functional but also brings a smile 
              to people's faces. That's why I love incorporating playful elements into my 
              professional projects.
            </p>
            <div className="pt-2">
              <div className="cute-outline border-pastel-pink inline-block px-4 py-2">
                <p className="text-sm italic">
                  "Creativity is where aesthetics meet purpose—turning ideas into experiences that are not only visually captivating but also intuitively functional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="My Skills" className="bg-gradient-to-b from-white to-pastel-mint/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard title="UI/UX" icon={PaintBucket} color="bg-pastel-pink" />
          <SkillCard title="Frontend" icon={Code} color="bg-pastel-lavender" />
          <SkillCard title="Backend" icon={Database} color="bg-pastel-blue" />
          <SkillCard title="IA" icon={Lightbulb} color="bg-pastel-yellow" />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience & Education">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-pastel-pink" />
            <h3 className="font-quicksand font-bold text-xl">Work Experience</h3>
          </div>
          <div className="space-y-4">
            <ExperienceCard 
              title="Cloud Infrastructure Technician"
              company="Fortes Tecnologia"
              period="2023 - Present"
              description="Expert in cloud platform administration, database management, version control, training material creation, client problem resolution, and strategic team consulting."
            />
            <ExperienceCard 
              title="Web Developer"
              company="Freelancer"
              period="2021 - Present"
              description="Developed responsive websites and implemented front-end solutions using modern frameworks."
            />
          </div>

          <div className="flex items-center gap-3 mt-10 mb-6">
            <GraduationCap className="text-pastel-lavender" />
            <h3 className="font-quicksand font-bold text-xl">Education</h3>
          </div>
          <div className="space-y-4">
            <ExperienceCard 
              title="Specialization in Program Analysis and Development"
              company="Descomplica Faculdade Digital"
              period="2022 - 2022"
              description="Specialized in designing, developing, and optimizing software solutions through comprehensive program analysis and efficient development practices."
            />
              <ExperienceCard 
              title="MBA in Digital Marketing and Sales"
              company="Descomplica Faculdade Digital"
              period="2022 - 2023"
              description="Specializing in strategic planning, customer engagement, and data-driven sales optimization."
            />
            <ExperienceCard 
              title="Bachelor in Systems For The Internet"
              company="UNIGRANDE"
              period="2017 - 2021"
              description="Studied programming fundamentals, data structures, and web development."
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Connect!" className="bg-gradient-to-b from-pastel-mint/30 to-white">
        <div className="cute-card text-center">
          <p className="mb-6">
            I'm always open to new opportunities, collaborations, or just a friendly chat!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SocialLink 
              label="Email Me" 
              href="mailto:luamartinstravel@gmail.com" 
              icon={Mail} 
              color="bg-pastel-pink text-primary-foreground"
            />
            <SocialLink 
              label="GitHub" 
              href="https://github.com/luanasa" 
              icon={Github}
              color="bg-pastel-blue text-primary-foreground" 
            />
            <SocialLink 
              label="LinkedIn" 
              href="https://www.linkedin.com/in/luamartins/?locale=en_US" 
              icon={Linkedin}
              color="bg-pastel-lavender text-primary-foreground" 
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} • Made with ❤️ by Luana Sá</p>
      </footer>
    </div>
  );
};

export default Index;
