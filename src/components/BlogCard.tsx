import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="gradient-card shadow-card hover:shadow-card-hover transition-elegant group">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <time>{formattedDate}</time>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-elegant">
          {post.title}
        </h3>
        
        <p className="prose-academic text-muted-foreground leading-relaxed">
          {post.excerpt}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      
      <CardContent className="pt-0">
        <Button variant="ghost" asChild className="group/button p-0 h-auto font-medium">
          <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
            Read More
            <ArrowRight 
              size={16} 
              className="transition-elegant group-hover/button:translate-x-1" 
            />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};