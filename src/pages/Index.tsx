
import React from 'react';
import Avatar from '@/components/Avatar';
import Section from '@/components/Section';
import SkillCard from '@/components/SkillCard';
import ExperienceCard from '@/components/ExperienceCard';
import SocialLink from '@/components/SocialLink';
import TranslationButton from '@/components/TranslationButton';
import TranslatableText from '@/components/TranslatableText';
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
          <div className="fixed top-4 left-4 z-50">
            <TranslationButton />
          </div>
          <div className="animate-float">
            <Avatar 
              src="./lua.jpeg" 
              alt="Profile" 
              size="xl"
            />
          </div>
          <h1 className="mt-8 font-quicksand font-bold text-4xl md:text-5xl">
            <TranslatableText textKey="hero.greeting" as="span" /> <span className="text-primary">Luana</span> 💗
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-lg">
            <TranslatableText textKey="hero.title" />
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <SocialLink 
              label={<TranslatableText textKey="social.email" />} 
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
      <Section id="about" title={<TranslatableText textKey="about.title" />}>
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
              <TranslatableText textKey="about.p1" />
            </p>
            <p>
              <TranslatableText textKey="about.p2" />
            </p>
            <div className="pt-2">
              <div className="cute-outline border-pastel-pink inline-block px-4 py-2">
                <p className="text-sm italic">
                  <TranslatableText textKey="about.quote" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title={<TranslatableText textKey="skills.title" />} className="bg-gradient-to-b from-white to-pastel-mint/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard title="UI/UX" icon={PaintBucket} color="bg-pastel-pink" />
          <SkillCard title="Frontend" icon={Code} color="bg-pastel-lavender" />
          <SkillCard title="Backend" icon={Database} color="bg-pastel-blue" />
          <SkillCard title="IA" icon={Lightbulb} color="bg-pastel-yellow" />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title={<TranslatableText textKey="experience.title" />}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-pastel-pink" />
            <h3 className="font-quicksand font-bold text-xl">
              <TranslatableText textKey="experience.work" />
            </h3>
          </div>
          <div className="space-y-4">
            <ExperienceCard 
              title={<TranslatableText textKey="experience.job1.title" />}
              company="Fortes Tecnologia"
              period="2023 - Present"
              description={<TranslatableText textKey="experience.job1.description" />}
            />
            <ExperienceCard 
              title={<TranslatableText textKey="experience.job2.title" />}
              company="Freelancer"
              period="2021 - Present"
              description={<TranslatableText textKey="experience.job2.description" />}
            />
          </div>

          <div className="flex items-center gap-3 mt-10 mb-6">
            <GraduationCap className="text-pastel-lavender" />
            <h3 className="font-quicksand font-bold text-xl">
              <TranslatableText textKey="experience.education" />
            </h3>
          </div>
          <div className="space-y-4">
            <ExperienceCard 
              title={<TranslatableText textKey="experience.edu1.title" />}
              company="Descomplica Faculdade Digital"
              period="2022 - 2022"
              description={<TranslatableText textKey="experience.edu1.description" />}
            />
            <ExperienceCard 
              title={<TranslatableText textKey="experience.edu2.title" />}
              company="Descomplica Faculdade Digital"
              period="2022 - 2023"
              description={<TranslatableText textKey="experience.edu2.description" />}
            />
            <ExperienceCard 
              title={<TranslatableText textKey="experience.edu3.title" />}
              company="UNIGRANDE"
              period="2017 - 2021"
              description={<TranslatableText textKey="experience.edu3.description" />}
            />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title={<TranslatableText textKey="contact.title" />} className="bg-gradient-to-b from-pastel-mint/30 to-white">
        <div className="cute-card text-center">
          <p className="mb-6">
            <TranslatableText textKey="contact.message" />
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SocialLink 
              label={<TranslatableText textKey="social.email" />}
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
        <p>© {new Date().getFullYear()} • <TranslatableText textKey="footer.copyright" /></p>
      </footer>
    </div>
  );
};

export default Index;
