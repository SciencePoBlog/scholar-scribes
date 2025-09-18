# Blog Posts Folder

This folder is where your markdown blog posts should be placed for easy content management.

## Adding New Posts

To add a new blog post:

1. Create a new `.md` file in this folder
2. Use the following frontmatter format at the top of your markdown file:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post that will appear in the blog listing"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Post Title

Your markdown content goes here...
```

## Current Implementation

Currently, the blog uses sample data defined in `src/lib/blog.ts`. To switch to loading from markdown files in this folder, you would need to:

1. Implement file loading logic in the blog utilities
2. Set up a build process to read markdown files at build time
3. Update the blog functions to parse files from this directory

## File Naming Convention

Use descriptive slugs for your filenames:
- `social-media-manipulation.md`
- `algorithmic-influence-2024.md` 
- `democratic-discourse-analysis.md`

The filename (without extension) will become the URL slug for the post.

## Vercel Deployment

When deployed to Vercel, this folder structure allows non-technical users to:

1. Clone the repository
2. Add new markdown files to the `public/posts/` folder
3. Commit and push changes to trigger automatic deployment

## Future Enhancements

Consider implementing:
- Automatic markdown file loading at build time
- Image optimization for posts
- Category/tag-based filtering
- Search functionality
- RSS feed generation