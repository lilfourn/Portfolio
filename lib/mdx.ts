import { serialize } from 'next-mdx-remote/serialize';
import { cache } from 'react';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { BlogPost } from '@/types/blog-types';

const BLOG_POSTS: Record<string, BlogPost> = {
  'deepseek-drama': {
    title: "The DeepSeek Drama: A Game-Changer in the AI Race",
    description: "Explore how DeepSeek, a Chinese AI startup, is disrupting the AI industry with its groundbreaking cost-efficiency claims and market impact.",
    date: "January 28, 2025",
    author: {
      name: "Luke Fournier",
      image: "/about-me/Luke-Cutout.png"
    },
    tags: ["AI", "Technology", "DeepSeek", "Industry News"],
    image: "/images/blog/Blog-Post-Photos/Deep-Seek-News.jpg",
    slug: "deepseek-drama",
    content: `# The DeepSeek Drama: A Game-Changer in the AI Race

In the ever-evolving world of artificial intelligence, a new player has emerged that's causing quite a stir. DeepSeek, a Chinese AI startup, has recently taken the tech world by storm, challenging the dominance of established giants like OpenAI and Google. Let's dive into the drama surrounding DeepSeek and explore why it's making waves in the AI industry.

## The Rise of DeepSeek

Founded in late 2023 by Chinese hedge fund manager Liang Wenfeng, DeepSeek burst onto the scene with its AI model DeepSeek R1. Within a week of its release, the DeepSeek app surged to the top of app store charts, surpassing even ChatGPT. This meteoric rise has caught the attention of tech enthusiasts, investors, and governments alike.

## The Cost-Efficiency Breakthrough

What sets DeepSeek apart is its claimed ability to match or even surpass the performance of leading AI models at a fraction of the cost. According to DeepSeek, their R1 model was trained using only about 2,000 specialized Nvidia chips, compared to the tens of thousands used by U.S. companies. This efficiency claim has sent shockwaves through the tech industry.

## Market Disruption

The potential implications of DeepSeek's cost-efficiency have not gone unnoticed by the market. On January 27, 2025, major U.S. tech stocks, including Nvidia, Oracle, and Broadcom, experienced significant drops. Nvidia alone reportedly lost around $600 billion in market value in a single day, marking the largest single-day drop for a company in U.S. history.

## Geopolitical Implications

DeepSeek's emergence has reignited discussions about the global AI race, particularly between the United States and China. Despite U.S. sanctions on China's access to advanced semiconductors, DeepSeek's success suggests that China may be catching up in AI development. This has led to concerns in the U.S. about maintaining its competitive edge in AI technology.

## Skepticism and Controversy

While DeepSeek's claims are impressive, they haven't been without skepticism. Some American AI researchers have questioned the veracity of DeepSeek's statements about its spending and chip usage. There are also concerns about potential censorship and bias in DeepSeek's responses, particularly regarding sensitive topics related to China.

## The Future of AI Development

DeepSeek's approach, focusing on efficiency and reasoning capabilities, could potentially shift the focus of AI development. If their claims hold true, it might lead to a reevaluation of the massive investments currently being poured into AI infrastructure by tech giants.

## Conclusion

The DeepSeek drama underscores the rapid pace of innovation in AI and the intense competition in this field. As the situation continues to unfold, it's clear that DeepSeek has already made a significant impact on the AI landscape, challenging assumptions and potentially reshaping the future of AI development.

As we move forward, it will be crucial to monitor how established players respond to this new challenger and how governments adapt their strategies in the global AI race. One thing is certain: the AI revolution is far from over, and DeepSeek's emergence is just the latest chapter in this exciting and transformative journey.`,
  },
  'building-modern-portfolio': {
    title: "Building a Modern Web Portfolio with Next.js: A Complete Guide for 2025",
    description: "Learn how to create a stunning, high-performance portfolio website using Next.js 14, React Server Components, and modern web development best practices.",
    date: "January 11, 2025",
    author: {
      name: "Luke Fournier",
      image: "/about-me/Luke-Cutout.png"
    },
    tags: ["Next.js", "React", "TypeScript", "Web Development", "Portfolio", "Performance"],
    image: "/images/blog/Blog-Post-Photos/building-portfolio.jpeg",
    slug: "building-modern-portfolio",
    content: `
# Building a Modern Web Portfolio with Next.js: A Complete Guide for 2025

In today's competitive tech landscape, having a standout portfolio isn't just an option—it's a necessity. As we move into 2025, the expectations for developer portfolios have evolved significantly. This comprehensive guide will walk you through building a modern, performant portfolio website using Next.js 14, React Server Components, and cutting-edge web development practices.

## Why Next.js for Your Portfolio?

Next.js has established itself as the premier framework for React applications, and with the release of version 14, it's more powerful than ever. Here's why it's the perfect choice for your portfolio:

### 1. Unmatched Performance
- **Server Components**: Write React components that run on the server for faster page loads
- **Streaming SSR**: Progressive rendering for improved user experience
- **Automatic Image Optimization**: Built-in handling of modern image formats and responsive sizes

### 2. Developer Experience
- **TypeScript First**: Built-in TypeScript support for type safety and better tooling
- **Hot Reload**: Instant feedback during development
- **File-System Based Routing**: Intuitive page and API route creation

### 3. SEO and Analytics
- **Metadata API**: Easy management of SEO metadata
- **Built-in Analytics**: Track performance and user behavior
- **Zero Config**: Works out of the box with major analytics platforms

## Getting Started

Let's dive into creating your portfolio. First, set up a new Next.js project with all the modern tooling:

\`\`\`bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir --import-alias "@/*"
cd portfolio
\`\`\`

## Project Structure for Scalability

A well-organized project structure is crucial for maintainability. Here's our recommended setup:

\`\`\`
portfolio/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   └── projects/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   └── sections/
│   ├── lib/
│   │   ├── hooks/
│   │   └── utils/
│   └── styles/
├── public/
└── content/
    └── projects/
\`\`\`

## Essential Features for a Modern Portfolio

### 1. Performance Optimization
Implement these crucial performance features:

\`\`\`typescript
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://yourportfolio.com'),
  title: {
    default: 'Your Name | Portfolio',
    template: '%s | Your Name'
  },
  description: 'Professional portfolio showcasing web development projects and expertise',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Your Name Portfolio'
  }
};
\`\`\`

### 2. Responsive Design
Use Tailwind CSS for a mobile-first approach:

\`\`\`typescript
// components/ui/container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
\`\`\`

### 3. Animation and Interactivity
Incorporate smooth animations with Framer Motion:

\`\`\`typescript
// components/ui/fade-in.tsx
import { motion } from 'framer-motion';

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
\`\`\`

## Best Practices for Portfolio Content

1. **Project Showcases**
   - Include detailed case studies
   - Highlight problem-solving approaches
   - Demonstrate technical decision-making

2. **Professional Branding**
   - Consistent color scheme and typography
   - Personal logo or branded elements
   - Professional photography and graphics

3. **Content Strategy**
   - Regular blog posts (like this one!)
   - Technical tutorials and insights
   - Project documentation

## Deployment and Analytics

Choose a modern deployment platform:

1. **Vercel** (Recommended)
   - Zero-config deployment
   - Automatic preview deployments
   - Built-in analytics and monitoring

2. **Cloudflare Pages**
   - Global edge network
   - Unlimited bandwidth
   - Built-in security features

## Conclusion

Building a modern portfolio with Next.js in 2025 is about more than just code—it's about creating a compelling narrative of your skills and experience. By following this guide, you'll create a portfolio that not only looks great but also performs exceptionally well.

Remember to:
- Focus on performance and user experience
- Implement proper SEO and analytics
- Regularly update content and projects
- Maintain clean, documented code

![Modern Portfolio Example](/images/blog/Blog-Post-Photos/building-portfolio.jpeg)

Ready to start building? Clone the starter template from our GitHub repository and begin customizing your portfolio today!

> **Pro Tip**: Keep your portfolio updated with new projects and blog posts. A stale portfolio can be worse than no portfolio at all.
    `,
  }
};

export function getPostBySlug(slug: string): BlogPost | null {
  const post = BLOG_POSTS[slug];
  if (!post) return null;
  return post;
}

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  // Convert the BLOG_POSTS object to an array and sort by date
  const posts = Object.values(BLOG_POSTS).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  return posts;
});

export async function serializeMDX(content: string): Promise<MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>> {
  try {
    return await serialize(content, {
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    });
  } catch (error) {
    console.error('Error serializing MDX:', error);
    throw error;
  }
}
