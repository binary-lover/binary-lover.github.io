import { ArrowRight, ShieldCheck, Code, Terminal, LockKeyhole, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  <span className="font-mono">Ethical Hacker | SOC Analyst | Web Penetration Tester</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Mozahidul <span className="text-primary text-glow">Islam</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Protecting digital infrastructures through ethical hacking, security analysis, and advanced penetration testing techniques.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/projects">
                  <Button size="lg" className="gap-1">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Scroll to learn more</span>
                  <ScrollLink to="services" smooth={true} duration={800} className="cursor-pointer">
                    <motion.div
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </ScrollLink>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background/50 rounded-lg neon-border matrix-bg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="h-16 w-16 text-primary" />
                    
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur-sm rounded border border-primary/20">
                    <div className="flex items-center gap-2">
                      <span className="block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-mono text-xs text-primary">
                        root@secure-system:~# <span className="animate-pulse">|</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Specialized Services</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              Expert cybersecurity services tailored to protect your digital assets and infrastructure.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col p-6 bg-background rounded-lg border neon-border">
              <ShieldCheck className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive penetration testing to identify vulnerabilities before they can be exploited.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Web Application Testing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Network Infrastructure
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Social Engineering
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/contact">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-background rounded-lg border neon-border">
              <LockKeyhole className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Security Analysis</h3>
              <p className="text-muted-foreground mb-4">
                In-depth security analysis and risk assessment for your organization's systems.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Vulnerability Scanning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Threat Modeling
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Security Architecture Review
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/contact">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
            </div>
           <div className="flex flex-col p-6 bg-background rounded-lg border neon-border">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Code Review</h3>
              <p className="text-muted-foreground mb-4">
                Expert review of your application code to identify security flaws and vulnerabilities.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Static Code Analysis
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Security Best Practices
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Dependency Auditing
                </li>
              </ul>
              <div className="mt-auto">
                <Link to="/contact">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-muted-foreground">Highlighting some of my recent cybersecurity work</p>
            </div>
            <Link to="/projects">
              <Button variant="outline" className="gap-1">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
              <div className="bg-primary/10 h-48 matrix-bg flex items-center justify-center">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Network Intrusion Detection System</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A custom NIDS using machine learning to detect anomalous network behavior.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Python</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">TensorFlow</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Network Security</span>
                </div>
                <Link to="/projects">
                  <Button size="sm" variant="ghost" className="gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
              <div className="bg-primary/10 h-48 matrix-bg flex items-center justify-center">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Vulnerability Scanner</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Automated tool to scan web applications for common security vulnerabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Go</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">OWASP</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Web Security</span>
                </div>
                <Link to="/projects">
                  <Button size="sm" variant="ghost" className="gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
              <div className="bg-primary/10 h-48 matrix-bg flex items-center justify-center">
                <Terminal className="h-12 w-12 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold">Security Dashboard</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Real-time security monitoring dashboard for SOC operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">React</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">ELK Stack</span>
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">SIEM</span>
                </div>
                <Link to="/projects">
                  <Button size="sm" variant="ghost" className="gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Secure Your Systems?</h2>
            <p className="max-w-[600px] text-muted-foreground">
              Let's work together to identify vulnerabilities, strengthen your security posture, and protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/contact">
                <Button size="lg">Get In Touch</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">Learn More About Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;