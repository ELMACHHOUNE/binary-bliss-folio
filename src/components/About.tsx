import { Card } from '@/components/ui/card';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaboration and knowledge sharing drive the best results.',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Always adapting to new technologies and industry trends.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with 5+ years of experience building 
            web applications that make a difference. From concept to deployment, 
            I bring ideas to life with modern technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card-gradient border-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-xl">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-card-gradient border-primary/20">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                My journey in software engineering began during my computer science studies, 
                where I discovered my love for creating digital solutions. Since then, I've 
                worked with startups and enterprises, building everything from responsive 
                web applications to scalable microservices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring junior developers, or exploring the latest frameworks and tools. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;