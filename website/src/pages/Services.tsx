import { Cloud, Server, Code, Zap, Shield, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions Design & Architecture',
      description: 'Comprehensive cloud strategy and architecture design using AWS, Azure, and GCP. I help businesses migrate to the cloud, optimize existing infrastructures, and design scalable, cost-effective solutions.',
      features: [
        'Cloud migration strategy and planning',
        'Multi-cloud and hybrid cloud architectures',
        'Cost optimization and resource management',
        'Security and compliance implementation',
        'Performance monitoring and optimization'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Server,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices. From CI/CD pipelines to infrastructure automation, I help teams deliver faster and more reliably.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Ansible)',
        'Container orchestration with Kubernetes',
        'Automated testing and deployment',
        'Monitoring and alerting systems'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      icon: Zap,
      title: 'Serverless Computing',
      description: 'Build and deploy serverless applications that scale automatically and cost-effectively. Leverage the power of Function-as-a-Service (FaaS) and managed cloud services.',
      features: [
        'AWS Lambda and Azure Functions development',
        'API Gateway and microservices architecture',
        'Event-driven application design',
        'Serverless database integration',
        'Performance optimization and monitoring'
      ],
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20'
    },
    {
      icon: Code,
      title: 'Custom Cloud Solutions',
      description: 'Tailored cloud applications and solutions designed specifically for your business needs. From web applications to data processing pipelines, I build solutions that scale.',
      features: [
        'Full-stack web application development',
        'API development and integration',
        'Database design and optimization',
        'Real-time data processing systems',
        'Custom automation tools'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance',
      description: 'Ensure your cloud infrastructure is secure and compliant with industry standards. Implement best practices for data protection and access management.',
      features: [
        'Security assessment and audit',
        'Identity and access management (IAM)',
        'Data encryption and protection',
        'Compliance framework implementation',
        'Security monitoring and incident response'
      ],
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20'
    },
    {
      icon: BarChart3,
      title: 'Cloud Consulting & Training',
      description: 'Expert guidance and training to help your team adopt cloud technologies effectively. From strategy sessions to hands-on workshops.',
      features: [
        'Cloud strategy and roadmap development',
        'Technical training and workshops',
        'Best practices consultation',
        'Team mentoring and coaching',
        'Technology evaluation and selection'
      ],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your current infrastructure, business requirements, and goals to create a tailored solution strategy.'
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'Designing scalable, secure, and cost-effective cloud architectures with detailed implementation roadmaps.'
    },
    {
      number: '03',
      title: 'Implementation & Development',
      description: 'Building and deploying solutions using best practices, with continuous testing and quality assurance.'
    },
    {
      number: '04',
      title: 'Optimization & Support',
      description: 'Ongoing monitoring, optimization, and support to ensure peak performance and continuous improvement.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(147%2C%2051%2C%20234%2C%200.05)%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')] opacity-30" />
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <AnimatedSection className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
              What I Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive cloud solutions designed to accelerate your digital transformation. 
              From architecture design to implementation and optimization, I help businesses leverage 
              the full potential of cloud technologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className={`h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 ${service.borderColor} hover:border-opacity-50 bg-gradient-to-b from-card to-card/50`}>
                  <CardHeader className="pb-4">
                    <div className={`inline-flex p-4 ${service.bgColor} rounded-xl mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-7 w-7 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-sm text-foreground/80">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full ${service.bgColor} border ${service.borderColor} mt-2 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-muted/30 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering exceptional cloud solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="h-6 w-6 text-purple-300 mx-auto" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies I Work With</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge tools and platforms for modern cloud solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform',
              'Ansible', 'Jenkins', 'Python', 'JavaScript', 'React', 'Node.js'
            ].map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 50}>
                <div className="text-center p-4 rounded-lg bg-card hover:bg-card/80 transition-colors duration-300 group">
                  <div className="text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {tech}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(147%2C%2051%2C%20234%2C%200.1)%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')] opacity-20" />
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your cloud computing needs and how I can help you achieve your goals. 
              From initial consultation to ongoing support, I'm here to guide your cloud journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
