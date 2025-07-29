
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

const Portfolio = () => {
  const projects = [
    {
      title: 'Movie Collection App',
      description: 'A full-stack web application for managing movie collections with user authentication, CRUD operations, and responsive design. Features include movie search, ratings, and personal watchlists.',
      image: 'https://images.unsplash.com/photo-1489599732582-5f2b6b2e6c0e?w=800&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication'],
      github: 'https://github.com/rupanshumukhija07',
      category: 'Full-Stack Development'
    },
    {
      title: 'AWS Serverless Book Collection',
      description: 'A serverless web application built on AWS demonstrating cloud-native development. Utilizes Lambda functions, DynamoDB, API Gateway, and S3 for scalable book management.',
      image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/2024-09-12T07:18:42.541Z.png?w=800&h=400&fit=crop',
      technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFormation', 'React'],
      github: 'https://github.com/rupanshumukhija07',
      category: 'Cloud & Serverless'
    },

    {
      title: 'Infrastructure Automation on AWS',
      description: 'Comprehensive DevOps project implementing Infrastructure as Code (IaC) using Terraform and Ansible. Automates the deployment and management of AWS resources with CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Jenkins', 'Docker', 'GitHub Actions'],
      github: 'https://github.com/rupanshumukhija07',
      category: 'DevOps & Infrastructure'
    },
    {
      title: 'Kubernetes Microservices Platform',
      description: 'Containerized microservices architecture deployed on Kubernetes. Demonstrates service mesh, monitoring, logging, and automated scaling in a cloud-native environment.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop',
      technologies: ['Kubernetes', 'Docker', 'Istio', 'Prometheus', 'Grafana', 'Helm'],
      github: 'https://github.com/rupanshumukhija07',
      category: 'Container Orchestration'
    }
  ];

  const categories = ['All', 'Full-Stack Development', 'Cloud & Serverless', 'DevOps & Infrastructure', 'Container Orchestration'];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
              My Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work in cloud computing, DevOps automation, and full-stack development. 
              Each project demonstrates my commitment to building scalable, efficient solutions using modern technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-foreground text-xs rounded-md border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors duration-300"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core technologies and tools I work with to deliver exceptional results
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-6">
                <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">Cloud Platforms</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>AWS (EC2, Lambda, S3, RDS)</div>
                  <div>Google Cloud Platform</div>
                  <div>Microsoft Azure</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-6">
                <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">DevOps Tools</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Docker & Kubernetes</div>
                  <div>Terraform & Ansible</div>
                  <div>Jenkins & GitHub Actions</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-6">
                <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Programming</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Python & JavaScript</div>
                  <div>React & Node.js</div>
                  <div>Bash & PowerShell</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="text-center p-6">
                <h3 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">Databases</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>MongoDB & DynamoDB</div>
                  <div>PostgreSQL & MySQL</div>
                  <div>Redis & ElasticSearch</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <a href="https://github.com/rupanshumukhija07" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
