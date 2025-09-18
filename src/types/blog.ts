export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
  readTime: number;
  tags?: string[];
}

export interface BlogMetadata {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
}