# GitGenius Documentation Site

<div align="center">
<img width="1200" height="475" alt="GitGenius Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Overview

This is the official documentation and landing page for **GitGenius** - an AI-powered Git repository analysis tool. The site showcases GitGenius features, installation instructions, changelog generation, and comprehensive usage examples.

**Live Site:** [gitgenius.dev](https://gitgenius.dev) (update with your actual domain)

**GitGenius CLI:** [GitHub Repository](https://github.com/pankajkumardev/gitgenius) | [NPM Package](https://www.npmjs.com/package/gitgenius)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Smooth Scrolling:** Lenis
- **Icons:** Lucide React
- **Font Optimization:** Next.js Google Fonts

## Features

✨ **Modern Design**
- Editorial-style design with premium aesthetics
- Smooth scroll animations with Lenis
- Glassmorphism and modern UI patterns
- Responsive across all devices

🔍 **SEO Optimized**
- Server-side rendering (SSR)
- Automatic sitemap generation
- robots.txt configuration
- Open Graph and Twitter Card metadata
- Optimized font loading

⚡ **Performance**
- Turbopack bundling for instant updates
- Optimized images and fonts
- Minimal JavaScript bundle
- Fast page loads

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pankajkumardev/gitgenius-doc.git
   cd gitgenius-doc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
gitgenius-doc/
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Home page
│   ├── favicon.ico     # Favicon
│   ├── robots.ts       # robots.txt configuration
│   └── sitemap.ts      # Sitemap generation
├── components/
│   ├── Hero.tsx        # Hero section with animation
│   ├── Installation.tsx # Installation guide
│   ├── Features.tsx    # Features showcase
│   ├── DeepDive.tsx    # Deep dive section
│   ├── Changelog.tsx   # Changelog demo
│   ├── Integration.tsx # Integration examples
│   ├── Developer.tsx   # Developer section
│   ├── Footer.tsx      # Footer with links
│   └── ui/
│       └── Button.tsx  # Reusable button component
├── index.css          # Global styles & Tailwind
├── tailwind.config.js # Tailwind configuration
├── next.config.js     # Next.js configuration
└── tsconfig.json      # TypeScript configuration
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  background: "#F9F8F6", // Warm Alabaster
  surface: "#FFFFFF",    // White
  ink: "#1A1A1A",        // Deep Ink Black
  indigo: "#4F46E5",     // Brand / Gemini
  git: "#F05033",        // Git Accent
  pencil: "#666666",     // Secondary Text
}
```

### Fonts

Fonts are configured in `app/layout.tsx` using Next.js font optimization:
- **Serif:** Instrument Serif (for headlines)
- **Sans:** Manrope (for body text)
- **Mono:** JetBrains Mono (for code)

### SEO Metadata

Update SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // ... other metadata
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms

Build the production bundle:

```bash
npm run build
```

The optimized build will be in the `.next` folder. You can deploy it to any platform that supports Node.js.

## Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** Optimized with Turbopack

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Pankaj Kumar](https://github.com/pankajkumardev)

## Links

- **GitGenius CLI:** [GitHub](https://github.com/pankajkumardev/gitgenius)
- **NPM Package:** [gitgenius](https://www.npmjs.com/package/gitgenius)
- **Documentation:** [gitgenius.dev](https://gitgenius.dev)
- **Report Issues:** [GitHub Issues](https://github.com/pankajkumardev/gitgenius/issues)

## Acknowledgments

Built with ❤️ using:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.studiofreight.com/)
- [Lucide Icons](https://lucide.dev/)

---

Made with passion by [Pankaj Kumar](https://github.com/pankajkumardev) for the developer community 🚀
