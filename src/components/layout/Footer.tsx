import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Github, Linkedin, Twitter, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-background/70 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h3 className="font-mono text-lg font-bold">b1n4ryl0v3r</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Ethical hacking and cybersecurity professional specializing in penetration testing,
              security analysis, and defensive operations.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-muted-foreground uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary">About Me</Link></li>
              <li><Link to="/projects" className="text-sm hover:text-primary">Projects</Link></li>
              <li><Link to="/skills" className="text-sm hover:text-primary">Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-muted-foreground uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Security Blog</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Tools</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Research</a></li>
              <li><a href="#" className="text-sm hover:text-primary">CVE Database</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-muted-foreground uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" asChild>
                <a href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="#" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mozahidul Islam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;