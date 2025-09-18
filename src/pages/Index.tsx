import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRecentPosts } from '@/lib/blog';
import { BlogCard } from '@/components/BlogCard';
import { ArrowRight, BookOpen, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const recentPosts = getRecentPosts(2);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Academic research visualization showing social media networks and election data" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Digital Democracy &
              <br />
              <span className="text-accent">Information Warfare</span>
            </h1>
            
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Research exploring how social media manipulation and algorithmic amplification 
              are reshaping democratic processes in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="shadow-hero">
                <Link to="/blog" className="flex items-center gap-2">
                  <BookOpen size={20} />
                  Explore Research
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/blog/social-media-manipulation-framework">
                  Latest Findings
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Research Questions</h2>
            <p className="text-xl text-muted-foreground prose-academic max-w-2xl mx-auto">
              Our work investigates the fundamental challenges facing democratic societies 
              in the age of social media and algorithmic information distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Search className="text-primary" size={20} />
                  </div>
                  Algorithmic Manipulation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="prose-academic text-muted-foreground leading-relaxed">
                  How do political actors leverage social media algorithms to manipulate electoral 
                  behavior through targeted messaging and amplification strategies?
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Users className="text-accent" size={20} />
                  </div>
                  Virality vs. Truth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="prose-academic text-muted-foreground leading-relaxed">
                  What aspects of social media algorithmic behavior prioritize engagement and 
                  virality over accuracy and democratic stability?
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="outline" className="text-sm">Social Media Analysis</Badge>
              <Badge variant="outline" className="text-sm">Electoral Behavior</Badge>
              <Badge variant="outline" className="text-sm">Computational Propaganda</Badge>
              <Badge variant="outline" className="text-sm">Democratic Theory</Badge>
              <Badge variant="outline" className="text-sm">Information Warfare</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {recentPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest Research</h2>
                <p className="text-xl text-muted-foreground">
                  Recent findings and analysis from our ongoing research
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  View All Posts
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            <div className="grid gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Contributing to Democratic Discourse
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Our research aims to understand and address the challenges facing democratic 
            societies in the digital age. Join the conversation.
          </p>
          <Button size="lg" variant="secondary" asChild className="shadow-hero">
            <Link to="/blog" className="flex items-center gap-2">
              <BookOpen size={20} />
              Read Our Research
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
