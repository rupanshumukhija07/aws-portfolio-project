import { Calendar, GraduationCap, MapPin, Award, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  const experience = [
    {
      company: 'Volterra Technologies',
      position: 'Cloud Engineer Intern',
      duration: '6 months',
      location: 'Remote',
      description: 'Contributed to cloud infrastructure projects, gaining hands-on experience with cloud architecture and DevOps practices.',
      skills: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure Automation']
    },
    {
      company: 'Dell Technologies',
      position: 'Technical Sales & Customer Experience',
      duration: '2.5+ years',
      location: 'Bangalore, India',
      description: 'Managed key accounts, drove sales growth, and provided technical expertise in cloud solutions and enterprise technologies.',
      skills: ['Client Management', 'Technical Sales', 'Cloud Solutions', 'Customer Success']
    }
  ];

  const education = [
    {
      institution: 'Humber College',
      degree: 'Cloud Computing',
      status: 'Completed',
      location: 'Toronto, ON'
    },
    {
      institution: 'Algoma University',
      degree: 'Masters in Computer Science',
      status: '',
      location: 'Canada'
    },
    {
      institution: 'Manipal University Jaipur',
      degree: 'B.Tech in Information Technology',
      status: 'Completed',
      location: 'Jaipur, India'
    }
  ];

  const achievements = [
    'Successfully managed key enterprise accounts at Dell Technologies',
    'Developed full-stack cloud applications with serverless architectures',
    'Implemented DevOps automation solutions using Terraform and Ansible',
    'Active peer mentor at Humber College',
    'Continuous learner in AI/ML integration with cloud platforms'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                  About Me
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Passionate About{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Cloud Innovation
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 2.5 years of experience in technical sales and customer experience at Dell Technologies, 
                  I've developed a deep understanding of enterprise cloud solutions and customer needs. My journey 
                  from IT education to cloud engineering reflects my commitment to continuous learning and innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I thrive on solving complex problems through automation, building scalable cloud architectures, 
                  and helping businesses leverage cutting-edge technologies to achieve their goals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-3xl opacity-20" />
                <img
                  src="https://i.postimg.cc/5jdjBFb2/linkedin-pic.jpg"
                  alt="Rupanshu Mukhija"
                  className="relative z-10 w-full max-w-md mx-auto rounded-2xl border-4 border-purple-500/20"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building expertise through diverse roles in technology and cloud computing
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2 bg-purple-500/10 rounded-lg">
                            <Calendar className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span>{exp.duration}</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-r from-muted/50 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and academic excellence in technology
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          {edu.status && <span>{edu.status}</span>}
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that define my professional journey
            </p>
          </AnimatedSection>

          <div className="space-y-4 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                  <div className="p-1 bg-purple-500/10 rounded-full mt-1">
                    <Award className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10">
        <div className="container mx-auto px-4 lg:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my approach to technology and collaboration
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-6">
                <div className="inline-flex p-3 bg-purple-500/10 rounded-full mb-4">
                  <Target className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly exploring new technologies and methodologies to create better solutions
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-6">
                <div className="inline-flex p-3 bg-blue-500/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working together to achieve shared goals and mentor others in their journey
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-6">
                <div className="inline-flex p-3 bg-green-500/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering high-quality solutions with attention to detail and best practices
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
