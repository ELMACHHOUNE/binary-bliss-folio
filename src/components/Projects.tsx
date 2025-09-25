import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and analytics dashboard. Built for scalability with microservices architecture.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS'],
      category: 'Web Application',
      icon: Globe,
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Task Management Mobile App',
      description: 'Cross-platform mobile app for team collaboration with real-time sync, offline support, and push notifications. Used by 10K+ active users.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux', 'Expo'],
      category: 'Mobile App',
      icon: Smartphone,
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization platform processing millions of events daily. Features custom charts, filtering, and export capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'D3.js', 'Python', 'ClickHouse', 'Docker'],
      category: 'Data Platform',
      icon: Database,
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web Application': return 'bg-blue-500/20 text-blue-400';
      case 'Mobile App': return 'bg-green-500/20 text-green-400';
      case 'Data Platform': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the impact I've made
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden bg-card-gradient border-primary/20 hover:shadow-glow transition-all duration-300 group hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-lg ${getCategoryColor(project.category)}`}>
                    <project.icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-hero-gradient hover:shadow-glow"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;