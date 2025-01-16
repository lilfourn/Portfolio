# Luke Fournier's Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with cutting-edge web technologies. The project demonstrates proficiency in modern web development practices, including component-based architecture, server-side rendering, and responsive design principles.

## Technical Architecture

### Frontend Architecture

#### Core Technologies
- **Next.js 14**: Utilizing the latest App Router for optimized server-side rendering and client-side navigation
- **TypeScript**: Implementing strict type checking for enhanced code reliability
- **Tailwind CSS**: Employing utility-first CSS framework for responsive design
- **Shadcn/ui**: Leveraging headless UI components for consistent design patterns
- **Framer Motion**: Implementing smooth, physics-based animations

#### Key Features
- Server-Side Rendering (SSR) for optimal performance
- Static Site Generation (SSG) for blog posts
- Progressive Web App (PWA) capabilities
- Responsive design with a mobile-first approach
- Responsive design with mobile-first approach
- SEO optimization with metadata management
- Image optimization with Next.js Image component
- Custom animations and transitions

### Project Structure

```
portfolio/
├── app/                    # Next.js App Router directory
│   ├── api/               # API routes
│   ├── components/        # Shared components
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── utilities/        # Utility components
├── lib/                   # Utility functions and hooks
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

### Performance Optimizations

- Implemented route prefetching for faster navigation
- Optimized image loading with blur placeholders
- Utilized React Suspense for code splitting
- Configured metadata for enhanced SEO
- Implemented caching strategies for static assets

### Development Practices

- **Code Quality**
  - ESLint for code linting
  - Prettier for consistent code formatting
  - Husky for pre-commit hooks
  - TypeScript for type safety

- **Version Control**
  - Git for version control
  - Conventional commits for clear commit history
<<<<<<< HEAD
  - Branch protection rules for the main branch
=======
  - Branch protection rules for main branch
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/lilfourn/Portfolio.git

<<<<<<< HEAD
# Navigate to the project directory
=======
# Navigate to project directory
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)
cd Portfolio

# Install dependencies
npm install

<<<<<<< HEAD
# Start the development server
=======
# Start development server
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)
npm run dev
```

### Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

<<<<<<< HEAD
# Run type-checking
=======
# Run type checking
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)
npm run type-check
```
# Portfolio
=======
### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

The website is deployed on Vercel with the following configuration:

- Automatic deployments on push to the main branch
- Preview deployments for pull requests
- Environment variable management
- Edge Network CDN for optimal global performance

## Code Quality & Testing

- **Static Analysis**: ESLint and TypeScript for code quality
- **Format Checking**: Prettier for consistent code style
- **Git Hooks**: Husky for pre-commit checks
- **Type Safety**: Strict TypeScript configuration

## Future Enhancements

- ✅ Implement blog section with MDX
- [ ] Add light mode support
- [ ] Integrate with CMS for content management
- [ ] Add automated testing with Jest and React Testing Library
- [ ] Implement CI/CD pipeline with GitHub Actions

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Example environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Deployment

The website is deployed on Vercel with the following configuration:

- Automatic deployments on push to main branch
- Preview deployments for pull requests
- Environment variable management
- Edge Network CDN for optimal global performance

## Code Quality & Testing

- **Static Analysis**: ESLint and TypeScript for code quality
- **Format Checking**: Prettier for consistent code style
- **Git Hooks**: Husky for pre-commit checks
- **Type Safety**: Strict TypeScript configuration

## Future Enhancements

- [ ] Implement blog section with MDX
- [ ] Add dark mode support
- [ ] Integrate with CMS for content management
- [ ] Add automated testing with Jest and React Testing Library
- [ ] Implement CI/CD pipeline with GitHub Actions

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Luke Fournier**
- Portfolio: [lukefournier.com](https://lukefournier.com)
- GitHub: [@lilfourn](https://github.com/lilfourn)
<<<<<<< HEAD
- LinkedIn: [Luke Fournier]([https://www.linkedin.com/in/lukefournier711/])
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)
=======
- LinkedIn: [Luke Fournier](https://www.linkedin.com/in/luke-fournier)
>>>>>>> 5e82621 (docs: enhance README with comprehensive technical documentation)
