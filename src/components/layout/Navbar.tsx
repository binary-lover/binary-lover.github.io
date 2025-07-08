import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { ModeToggle } from '../mode-toggle';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full border-b transition-all duration-200',
        scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center space-x-2 font-bold">
          <Terminal className="h-6 w-6 text-primary" />
          <span className="text-xl font-mono tracking-tight">SecPortfolio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-1',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b py-4 px-4 shadow-lg"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'py-2 px-4 rounded-md transition-colors font-medium',
                  location.pathname === link.path
                    ? 'bg-accent text-accent-foreground'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;