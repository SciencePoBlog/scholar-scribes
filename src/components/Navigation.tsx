import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Home } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl font-semibold">
            <BookOpen className="text-primary" size={24} />
            Academic Research Blog
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home size={16} />
                Home
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/blog">
                Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};