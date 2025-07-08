import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Project data
const projects = [
  {
    id: 1,
    title: "Network Intrusion Detection System",
    description: "A machine learning-powered NIDS that monitors network traffic and identifies potential security threats in real-time.",
    image: "nids",
    category: "security-tools",
    tags: ["Python", "TensorFlow", "Network Security", "ML"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Web Vulnerability Scanner",
    description: "Automated tool to scan web applications for common security vulnerabilities following OWASP guidelines.",
    image: "scanner",
    category: "security-tools",
    tags: ["Go", "OWASP", "Web Security"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Security Operations Dashboard",
    description: "Real-time security monitoring dashboard for SOC operations with alert visualization and management.",
    image: "dashboard",
    category: "visualization",
    tags: ["React", "ELK Stack", "SIEM"],
    demoLink: "#",
    codeLink: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Password Strength Analyzer",
    description: "Tool that evaluates password strength against various attack vectors and provides recommendations.",
    image: "password",
    category: "security-tools",
    tags: ["JavaScript", "Cryptography"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Phishing Email Detector",
    description: "ML model that identifies phishing attempts in emails by analyzing content patterns and metadata.",
    image: "phishing",
    category: "research",
    tags: ["Python", "NLP", "Machine Learning"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Security Awareness Training",
    description: "Interactive training platform to educate users about common security threats and best practices.",
    image: "training",
    category: "education",
    tags: ["React", "Education", "Security Awareness"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Network Packet Analyzer",
    description: "Tool for deep packet inspection and network traffic analysis for security investigations.",
    image: "packet",
    category: "security-tools",
    tags: ["C++", "Networking", "Forensics"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Secure File Storage System",
    description: "End-to-end encrypted file storage solution with secure sharing capabilities.",
    image: "storage",
    category: "applications",
    tags: ["Node.js", "Cryptography", "Storage"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Vulnerability Management System",
    description: "Platform to track, prioritize, and manage security vulnerabilities across an organization.",
    image: "vuln-management",
    category: "applications",
    tags: ["Python", "Django", "Security Management"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden group transition-all">
      <CardHeader className="p-0">
        <div className={`h-48 bg-primary/10 matrix-bg flex items-center justify-center`}>
          <div className="text-primary text-4xl font-bold opacity-20 group-hover:opacity-30 transition-opacity">
            {project.title.substring(0, 2).toUpperCase()}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2 py-0 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
          <ExternalLink className="h-3.5 w-3.5" /> Demo
        </a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
          <Github className="h-3.5 w-3.5" /> Code
        </a>
        <Button size="sm" variant="ghost" className="text-sm flex items-center gap-1">
          Details <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCategory, setCurrentCategory] = useState("all");

  // Filter projects based on search term and category
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              My Security <span className="text-primary text-glow">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore my cybersecurity projects, tools, and research focused on enhancing digital security.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 pb-20">
        <div className="container px-4 md:px-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-full pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setCurrentCategory}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="security-tools">Tools</TabsTrigger>
                <TabsTrigger value="applications">Apps</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm("");
                  setCurrentCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interested in Collaboration?</h2>
            <p className="max-w-[600px] text-muted-foreground">
              I'm always open to working on innovative cybersecurity projects and research opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/contact">
                <Button>Get In Touch</Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;