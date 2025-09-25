import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and improved deployment efficiency by 40%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      location: 'Austin, TX',
      description: 'Built responsive web applications and RESTful APIs. Collaborated with design teams to create seamless user experiences.',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Redis', 'GraphQL', 'TypeScript'],
    },
    {
      title: 'Software Developer',
      company: 'StartupCo',
      period: '2019 - 2020',
      location: 'Remote',
      description: 'Developed MVP features for an early-stage fintech startup. Implemented real-time data processing and payment integrations.',
      technologies: ['React', 'Python', 'Django', 'MySQL', 'Stripe API', 'WebSocket'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey building impactful software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block"></div>
                  
                  <Card className="ml-0 md:ml-20 p-8 bg-card-gradient border-primary/20 hover:shadow-glow transition-all duration-300">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{exp.location}</p>
                      <p className="text-foreground leading-relaxed">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-primary/20 text-primary hover:bg-primary/30"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;