# Deployment Instructions

This academic blog is built with React/Vite and designed for easy deployment on Vercel.

## Quick Deployment to Vercel

### Method 1: Direct from Lovable (Recommended)
1. In Lovable, click the "Publish" button in the top right
2. Follow the prompts to deploy directly to Vercel
3. Your site will be live with a Vercel URL

### Method 2: GitHub → Vercel Integration
1. **Connect to GitHub** (if not already connected):
   - In Lovable, click GitHub → Connect to GitHub
   - Authorize the Lovable GitHub App
   - Create a new repository with your project code

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"

## Adding New Blog Posts

### For Non-Technical Users

Once deployed, your friend can add new blog posts by:

1. **Access the Repository**:
   - Go to your GitHub repository
   - Navigate to the `public/posts/` folder

2. **Add a New Post**:
   - Click "Add file" → "Create new file"
   - Name the file with a descriptive slug: `your-post-title.md`

3. **Format the Post**:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "Brief description for the blog listing"
   tags: ["Research", "Social Media", "Politics"]
   ---

   # Your Post Title

   Your content goes here in markdown format...

   ## Subheadings
   - Bullet points
   - **Bold text**
   - *Italic text*
   - [Links](https://example.com)
   ```

4. **Publish**:
   - Click "Commit new file"
   - Vercel will automatically rebuild and deploy the site

### Current Implementation Note

The current version uses sample data in the code. To fully implement file-based posts, you would need to:

1. Add a build-time script to read markdown files
2. Update the blog utilities to parse file content
3. Implement frontmatter parsing

## Environment Setup for Local Development

If you want to run the project locally:

```bash
# Clone the repository
git clone [your-repo-url]
cd [project-name]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Custom Domain Setup

To connect a custom domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed by Vercel

## Performance Optimization

The site is optimized for performance with:
- Static site generation (pre-rendered at build time)
- Optimized images and assets
- Minimal JavaScript bundle
- Fast CDN delivery via Vercel

## SEO Features

Built-in SEO optimizations include:
- Semantic HTML structure
- Meta tags for social sharing
- Clean, crawlable URLs
- Responsive design
- Fast loading times

## Support

For technical issues:
- Check the Vercel deployment logs
- Review the browser console for errors
- Ensure markdown frontmatter is properly formatted

The site is designed to be maintenance-free once deployed, with automatic deployments triggered by GitHub commits.