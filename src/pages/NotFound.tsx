import { Button } from "@/components/ui/button";
import { Shield, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-12 text-center">
      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Shield className="h-10 w-10 text-primary" />
      </div>
      
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
      <p className="mt-4 mb-8 text-muted-foreground max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. 
        The security perimeter has been breached!
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="gap-2" asChild>
          <Link to="/">
            <Home className="h-4 w-4" /> Return Home
          </Link>
        </Button>
        <Button variant="outline" className="gap-2" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" /> Go Back
        </Button>
      </div>
      
      <div className="mt-12 border-t pt-6 w-full max-w-md">
        <p className="text-sm text-muted-foreground">
          If you believe this is an error with the site, please contact me.
        </p>
      </div>
    </div>
  );
};

export default NotFound;