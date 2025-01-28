import { BlogPost } from "@/app/types/blog-types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Modern Web Portfolio with Next.js",
    description: "Learn how to create a stunning portfolio website using Next.js, React, and TypeScript",
    content: `
      Want to build a modern portfolio that stands out? Let's break down how to create a professional portfolio website using Next.js, React, and TypeScript in just a few steps.

      ## Tech Stack Overview
      - **Frontend**: Next.js 14 with App Router
      - **Styling**: Tailwind CSS + Shadcn/UI
      - **Animations**: Framer Motion
      - **Type Safety**: TypeScript
      - **Code Quality**: ESLint + Prettier

      ## Step 1: Project Setup (5 minutes)
      \`\`\`bash
      npx create-next-app@latest portfolio --typescript --tailwind --app
      cd portfolio
      npm install @shadcn/ui framer-motion lucide-react
      \`\`\`

      ## Step 2: Project Structure
      Create a clean, maintainable structure:
      \`\`\`
      app/
      ├── components/    # Reusable UI components
      ├── types/        # TypeScript definitions
      ├── data/         # Static data
      ├── hooks/        # Custom React hooks
      └── (routes)/     # Next.js pages
      \`\`\`

      ## Step 3: Essential Components
      1. **Navbar**: Create a responsive navigation with smooth transitions
      2. **Hero Section**: Add a compelling introduction with Framer Motion animations
      3. **About Section**: Share your story with an interactive timeline
      4. **Projects Grid**: Showcase your work with filterable categories
      5. **Blog Section**: Share your insights with a modern blog layout
      6. **Contact Form**: Add a professional contact form with validation

      ## Step 4: Key Features to Implement

      ### Animations
      Use Framer Motion for smooth page transitions and scroll animations:
      \`\`\`typescript
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        // Your content here
      </motion.div>
      \`\`\`

      ### Responsive Design
      Implement a mobile-first approach with Tailwind:
      \`\`\`typescript
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        // Your grid items
      </div>
      \`\`\`

      ### Dark Mode
      Add a sleek dark theme using Tailwind and CSS variables:
      \`\`\`css
      :root {
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
      }

      [data-theme='dark'] {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
      }
      \`\`\`

      ## Step 5: Performance Optimization
      1. **Image Optimization**: Use Next.js Image component
      2. **Code Splitting**: Leverage Next.js automatic code splitting
      3. **Font Optimization**: Implement next/font for web fonts
      4. **SEO**: Add metadata and proper semantic HTML

      ## Pro Tips
      1. **Component Organization**: Keep components small and focused
      2. **Type Safety**: Use TypeScript interfaces for all props
      3. **Reusable Styles**: Create custom Tailwind classes
      4. **Git Workflow**: Commit early and often with meaningful messages

      ## Conclusion
      Building a modern portfolio is about combining the right tools with clean code and attention to detail. Focus on creating a smooth user experience with animations, ensure your site is fully responsive, and don't forget to optimize for performance and SEO.

      Ready to start building? Clone a starter template or begin from scratch – either way, you now have the blueprint for a standout portfolio!
    `,
    publishedAt: "2024-01-11",
    readingTime: "4 min read",
    author: {
      name: "Luke Fournier",
      image: "/about-me/Luke-Cutout.png"
    },
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Portfolio", "Tutorial"],
    image: "/images/blog/Blog-Post-Photos/building-portfolio.jpeg",
    slug: "building-modern-web-portfolio-nextjs"
  },
  {
    id: "2",
    title: "The Intersection of Economics and Technology",
    description: "Exploring how economic principles can be applied to software development",
    content: `
      As an Economics major at UT Austin with a passion for software development, I've discovered fascinating parallels between economic principles and technology. Let's explore how economic thinking can enhance our approach to software development.

      ## The Economics of Code

      ### 1. Scarcity and Trade-offs
      Just as economics deals with allocating scarce resources, software development involves managing limited resources:
      - **Time**: Balancing development speed vs. code quality
      - **Processing Power**: Optimizing performance vs. feature richness
      - **Developer Attention**: Focusing on critical features vs. nice-to-haves

      ### 2. Marginal Analysis
      Economic thinking about margins applies perfectly to code optimization:
      - **Marginal Cost**: The computational cost of adding one more feature
      - **Marginal Benefit**: The user value gained from each additional feature
      - **Optimization Point**: Finding the sweet spot where marginal cost equals marginal benefit

      ## Real-World Applications

      ### Technical Debt as Economic Debt
      Similar to financial debt, technical debt requires careful management:
      - **Interest**: Accumulating complexity over time
      - **Principal**: Core issues that need addressing
      - **Investment**: Refactoring and improving code quality

      ### Market Efficiency in Code Design
      The efficient market hypothesis has parallels in software architecture:
      - **Information Flow**: Clean code practices for better maintainability
      - **Price Discovery**: Finding optimal solutions through iteration
      - **Market Corrections**: Continuous integration and testing

      ## Practical Implementation

      ### 1. Resource Allocation
      \`\`\`typescript
      // Example: Implementing lazy loading for efficient resource use
      const LazyComponent = React.lazy(() => import('./HeavyComponent'));

      function App() {
        return (
          <Suspense fallback={<Loading />}>
            <LazyComponent />
          </Suspense>
        );
      }
      \`\`\`

      ### 2. Optimization Strategies
      - **Caching**: Reducing computational costs
      - **Load Balancing**: Distributing resources efficiently
      - **Scalability**: Planning for growth and demand

      ## Economic Principles in Project Management

      ### 1. Comparative Advantage
      - Assign tasks based on team members' strengths
      - Utilize specialized skills effectively
      - Balance workload distribution

      ### 2. Opportunity Cost
      Every development decision has trade-offs:
      - Feature development vs. technical debt reduction
      - Innovation vs. stability
      - Speed vs. maintainability

      ## Future Implications

      The fusion of economics and technology will become increasingly important:
      1. **AI and Automation**: Economic models for resource allocation
      2. **Blockchain**: Decentralized economic systems
      3. **Cloud Computing**: Market-based resource pricing

      ## Conclusion
      
      Understanding economics provides valuable frameworks for making better decisions in software development. By applying economic principles to technical challenges, we can build more efficient, sustainable, and valuable software solutions.

      Whether you're a developer interested in economics or an economist exploring technology, the intersection of these fields offers rich insights for building better systems.
    `,
    publishedAt: "2024-01-10",
    readingTime: "4 min read",
    author: {
      name: "Luke Fournier",
      image: "/about-me/Luke-Cutout.png"
    },
    category: "Technology",
    tags: ["Economics", "Technology", "Software Development"],
    image: "/images/blog/Blog-Post-Photos/economics-and-compsci.jpg",
    slug: "intersection-economics-technology"
  }
];
