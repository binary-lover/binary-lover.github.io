import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Shield, Database, Globe, Code, Server, Award } from 'lucide-react';
import { Link } from "react-router-dom";

// Skill data
const skills = {
  penetrationTesting: [
    { name: "Web Application Testing", level: 95 },
    { name: "Network Penetration Testing", level: 90 },
    { name: "Mobile Application Security", level: 75 },
    { name: "API Security Testing", level: 85 },
    { name: "Social Engineering", level: 80 },
    { name: "Wireless Security", level: 70 },
  ],
  securityAnalysis: [
    { name: "Vulnerability Assessment", level: 90 },
    { name: "Threat Modeling", level: 85 },
    { name: "Log Analysis", level: 80 },
    { name: "Incident Response", level: 75 },
    { name: "Security Architecture Review", level: 70 },
    { name: "Threat Intelligence", level: 75 },
  ],
  programmingLanguages: [
    { name: "Python", level: 90 },
    { name: "Bash Scripting", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Go", level: 65 },
    { name: "C/C++", level: 60 },
    { name: "SQL", level: 75 },
  ],
  tools: [
    { name: "Burp Suite", level: 95 },
    { name: "Metasploit", level: 90 },
    { name: "Wireshark", level: 85 },
    { name: "Nmap", level: 90 },
    { name: "OWASP ZAP", level: 80 },
    { name: "Kali Linux", level: 90 },
    { name: "Nessus", level: 75 },
    { name: "Splunk", level: 70 },
    { name: "ELK Stack", level: 75 },
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS Security", level: 65 },
  ]
};

// Certifications data
const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2022",
    icon: Shield,
    description: "Validates baseline security skills and knowledge",
  },
  {
    name: "Ethical Hacking Fundamentals",
    issuer: "EC-Council",
    date: "2022",
    icon: Terminal,
    description: "Foundations of ethical hacking and penetration testing",
  },
  {
    name: "OSCP (In Progress)",
    issuer: "Offensive Security",
    date: "Expected 2024",
    icon: Globe,
    description: "Advanced penetration testing with hands-on focus",
  }
];

// Projects demonstrating skills
const skillProjects = [
  {
    title: "Network Intrusion Detection System",
    skills: ["Python", "Machine Learning", "Network Security"],
    description: "Developed an ML-powered system to detect network intrusions in real-time.",
    icon: Server,
  },
  {
    title: "Web Vulnerability Scanner",
    skills: ["Go", "Web Security", "OWASP"],
    description: "Created a tool to automatically scan web applications for common vulnerabilities.",
    icon: Globe,
  },
  {
    title: "Security Dashboard",
    skills: ["React", "Data Visualization", "ELK Stack"],
    description: "Built a dashboard for real-time monitoring of security events and alerts.",
    icon: Database,
  },
];

// Skill level label function
const getSkillLevelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Proficient";
  if (level >= 60) return "Intermediate";
  return "Beginner";
};

const Skills = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Skills & <span className="text-primary text-glow">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive overview of my cybersecurity skillset, technical expertise, and professional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Tabs Section */}
      <section className="py-10">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="penetrationTesting" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="penetrationTesting">Penetration Testing</TabsTrigger>
                <TabsTrigger value="securityAnalysis">Security Analysis</TabsTrigger>
                <TabsTrigger value="programmingLanguages">Programming</TabsTrigger>
                <TabsTrigger value="tools">Tools & Technologies</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="penetrationTesting">
              <div className="grid gap-6">
                {skills.penetrationTesting.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {getSkillLevelLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="securityAnalysis">
              <div className="grid gap-6">
                {skills.securityAnalysis.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {getSkillLevelLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="programmingLanguages">
              <div className="grid gap-6">
                {skills.programmingLanguages.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {getSkillLevelLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {getSkillLevelLabel(skill.level)}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Professional Certifications</h2>
            <p className="text-muted-foreground mt-2">Industry-recognized certifications that validate my expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{cert.name}</CardTitle>
                    <CardDescription className="flex justify-between">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills in Action */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Skills in Action</h2>
            <p className="text-muted-foreground mt-2">Projects that demonstrate my technical abilities</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skillProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-background border rounded-lg p-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Proficiency */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-4">Technical Proficiency</h2>
              <p className="text-muted-foreground mb-6">
                My technical skills are built on a foundation of continuous learning and practical application. 
                I regularly challenge myself with complex security problems to expand my knowledge.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Experience with modern security frameworks and methodologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hands-on practice in virtualized environments and CTF competitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Regular contributions to open-source security tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Active participation in security communities and forums</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Vulnerability Assessment",
                "Exploitation Techniques",
                "Security Automation",
                "Threat Intelligence",
                "Reverse Engineering",
                "Network Security",
                "Cloud Security",
                "Mobile Security",
                "OSINT"
              ].map((item, i) => (
                <div key={i} className="p-4 border rounded-lg text-center bg-background hover:border-primary/50 transition-colors">
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want to See My Skills in Action?</h2>
            <p className="max-w-[600px] text-muted-foreground">
              Check out my portfolio of projects or get in touch to discuss how my skills can help secure your systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/projects">
                <Button className="gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;