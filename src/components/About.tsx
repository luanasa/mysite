import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { elementRef, className } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={elementRef} id="about" className={`py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-12">
              About me<span className="text-accent">.</span>
            </h2>
            
            <div className="space-y-8 text-lg text-text-light leading-relaxed">
              <p>
                Hello! I'm a creative professional with a deep passion for crafting 
                stunning designs and writing clean, efficient code. When I'm not 
                immersed in creating great digital experiences, you can find me 
                exploring my artistic side through crocheting, sculpting ceramics, 
                or enjoying cozy moments with my cats.
              </p>
              
              <p>
                I believe in creating work that's not just functional but also brings 
                a smile to people's faces. That's why I love incorporating playful 
                elements into my professional projects.
              </p>
              
              <blockquote className="border-l-4 border-accent pl-8 py-4 italic text-foreground font-medium text-xl bg-surface-subtle rounded-r-lg">
                "Creativity is where aesthetics meet purpose—turning ideas into 
                experiences that are not only visually captivating but also 
                intuitively functional."
              </blockquote>
            </div>
          </div>
          
          <div className="lg:col-span-4 animate-fade-up lg:animate-slide-in">
            <div className="space-y-8">
              {/* Skills showcase */}
              <div className="bg-surface-subtle p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    "Cloud Engineering",
                    "AI & Machine Learning", 
                    "Web Development",
                    "Mobile Apps"
                  ].map((skill, index) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-text-light">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Current status */}
              <div className="bg-surface-subtle p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Currently</h3>
                <p className="text-text-light">
                  Cloud Engineer | Software Developer | IA | Power BI and exploring 
                  the fascinating intersection of cloud computing and artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;