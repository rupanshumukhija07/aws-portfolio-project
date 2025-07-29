
import { ArrowRight, Cloud, Code, Server, Zap, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

const Home = () => {
  const skills = [
    { icon: Cloud, name: 'Cloud Architecture', color: 'text-blue-500' },
    { icon: Server, name: 'DevOps & Automation', color: 'text-green-500' },
    { icon: Brain, name: 'AI Agents & Literacy', color: 'text-purple-500' },
    { icon: Zap, name: 'Serverless Computing', color: 'text-yellow-500' },
    { icon: Users, name: 'Pre-Sales', color: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22rgba(147%2C%2051%2C%20234%2C%200.1)%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="text-center lg:text-left">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
                  Cloud Engineer & Innovation Enthusiast
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Rupanshu
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  I'm a dedicated cloud engineer with a passion for creating efficient, scalable solutions in the ever-evolving world of cloud computing. My expertise spans across AWS services, container orchestration, and DevOps practices.
                </p>
                <p className="text-lg text-muted-foreground">
                  Currently pursuing advanced studies while continuously expanding my knowledge in emerging technologies like AI and machine learning integration with cloud platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Link to="/portfolio">
                      Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <img
                  src="https://i.postimg.cc/5jdjBFb2/linkedin-pic.jpg"
                  alt="Rupanshu Mukhija"
                  className="relative z-10 w-80 h-80 object-cover rounded-full border-4 border-purple-500/20"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specializing in modern cloud technologies and innovative solutions
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 100}>
                <div className="text-center p-6 rounded-xl bg-card hover:bg-card/80 transition-colors duration-300 group">
                  <skill.icon className={`h-12 w-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's connect and discuss how I can help you leverage cloud technologies for your business.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link to="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
