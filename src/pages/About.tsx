import { Award, BookOpen, Calendar, Code, FileCode, GraduationCap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm a passionate cybersecurity professional specializing in ethical hacking, 
                SOC analysis, and web penetration testing. Currently in my third year of college, 
                I'm dedicated to making the digital world a safer place through my expertise in 
                identifying and mitigating security vulnerabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button>Get in Touch</Button>
                </Link>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">Download Resume</Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background/30 matrix-bg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Code className="h-12 w-12 text-primary mb-4" />
                  <blockquote className="text-xl font-medium italic">
                    "Security is not a product, but a process."
                  </blockquote>
                  <cite className="mt-2 text-sm text-muted-foreground">― Bruce Schneier</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Education & Experience</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="rounded-lg border p-6 bg-background">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold">B.S. in Cybersecurity</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Focus on Network Security, Penetration Testing, and Digital Forensics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>GPA: 3.8/4.0</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Active member of the Cybersecurity Club</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6 bg-background">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - 2022</span>
                  </div>
                  <h4 className="text-xl font-bold">CompTIA Security+</h4>
                  <p className="text-muted-foreground">Professional Certification</p>
                </div>
              </div>
            </div>
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="rounded-lg border p-6 bg-background">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2023 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold">Security Analyst Intern</h4>
                  <p className="text-muted-foreground">SecureTech Solutions</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Conducted vulnerability assessments for enterprise clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Monitored SIEM alerts and performed incident response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Participated in red team exercises</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border p-6 bg-background">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2023</span>
                  </div>
                  <h4 className="text-xl font-bold">Freelance Web Security Tester</h4>
                  <p className="text-muted-foreground">Self-employed</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Performed website penetration testing for small businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Identified and documented security vulnerabilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Skills & Certifications</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <FileCode className="h-6 w-6 text-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border bg-background">
                  <h4 className="font-bold mb-2">Penetration Testing</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Web Application Testing</li>
                    <li>• Network Infrastructure</li>
                    <li>• Wireless Security</li>
                    <li>• Social Engineering</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border bg-background">
                  <h4 className="font-bold mb-2">SOC Analysis</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Log Analysis</li>
                    <li>• Incident Response</li>
                    <li>• Threat Intelligence</li>
                    <li>• SIEM Tools</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border bg-background">
                  <h4 className="font-bold mb-2">Programming</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Python</li>
                    <li>• Bash Scripting</li>
                    <li>• JavaScript / Node.js</li>
                    <li>• Go</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border bg-background">
                  <h4 className="font-bold mb-2">Tools & Technologies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Metasploit</li>
                    <li>• Burp Suite</li>
                    <li>• Wireshark</li>
                    <li>• Nmap</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border bg-background flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">CompTIA Security+</h4>
                    <p className="text-sm text-muted-foreground">Earned 2022</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border bg-background flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">OSCP (In Progress)</h4>
                    <p className="text-sm text-muted-foreground">Expected 2024</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg border bg-background flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Ethical Hacking Fundamentals</h4>
                    <p className="text-sm text-muted-foreground">Earned 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Answers to common questions about my services and expertise</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What ethical hacking services do you offer?</AccordionTrigger>
                <AccordionContent>
                  I offer a comprehensive range of ethical hacking services including web application penetration testing, network vulnerability assessments, API security testing, wireless network security, and social engineering simulations. Each service is customized to meet the specific security needs of your organization.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do you stay updated with the latest security threats?</AccordionTrigger>
                <AccordionContent>
                  I maintain current knowledge through continuous learning, participating in cybersecurity communities, subscribing to threat intelligence feeds, attending security conferences, and regularly practicing in virtual labs. I also follow security researchers and contribute to open-source security projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What deliverables can I expect from your security assessments?</AccordionTrigger>
                <AccordionContent>
                  My security assessments include comprehensive reports with an executive summary, detailed findings with severity ratings, proof-of-concept demonstrations, technical explanations, and actionable remediation steps. I also provide a follow-up consultation to answer questions and assist with implementing fixes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What makes you different from other security professionals?</AccordionTrigger>
                <AccordionContent>
                  My approach combines technical expertise with clear communication. I focus not just on finding vulnerabilities but explaining them in business context. My dual perspective as both a SOC analyst and penetration tester allows me to understand both offensive and defensive aspects of security.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interested in Working Together?</h2>
            <p className="max-w-[600px] text-muted-foreground">
              I'm currently available for freelance projects, internships, and collaboration opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/contact">
                <Button size="lg">Contact Me</Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg">See My Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;