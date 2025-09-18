import { getAllPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';
import { Navigation } from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const posts = getAllPosts();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research Blog</h1>
          <p className="text-xl text-muted-foreground prose-academic max-w-2xl mx-auto">
            Exploring the intersection of social media, democratic processes, and political manipulation
            through rigorous academic research and analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <Badge variant="outline">Social Media</Badge>
            <Badge variant="outline">Electoral Politics</Badge>
            <Badge variant="outline">Digital Democracy</Badge>
            <Badge variant="outline">Information Warfare</Badge>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;