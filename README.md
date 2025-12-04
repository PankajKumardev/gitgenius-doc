# GitGenius Documentation

Official documentation and landing page for **GitGenius** - Transform your Git repository into an intelligent knowledge base with AI-powered analysis.

## 🚀 About GitGenius

GitGenius is a powerful CLI tool that uses AI to analyze your Git repository, generate changelogs, enable semantic search, and provide deep insights into your codebase.

**🔗 Links:**
- 📦 [NPM Package](https://www.npmjs.com/package/gitgenius)
- 💻 [GitHub Repository](https://github.com/pankajkumardev/gitgenius)
- 📖 [Documentation](https://github.com/pankajkumardev/gitgenius#readme)

## ⚙️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Smooth Scroll:** Lenis
- **Icons:** Lucide React
- **Language:** TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/pankajkumardev/gitgenius-doc.git
cd gitgenius-doc

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
gitgenius-doc/
├── app/
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Main page
│   ├── favicon.ico     # Favicon
│   ├── robots.ts       # SEO robots.txt
│   └── sitemap.ts      # Sitemap generation
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Installation.tsx # Install command
│   ├── Features.tsx    # Features showcase
│   ├── Changelog.tsx   # Changelog demo
│   ├── Footer.tsx      # Footer with links
│   └── ui/             # UI components
├── index.css          # Global styles
├── tailwind.config.js # Tailwind config
└── next.config.js     # Next.js config
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  background: "#F9F8F6",
  indigo: "#4F46E5",
  git: "#F05033",
  // ... more colors
}
```

### Fonts

Fonts are optimized via Next.js in `app/layout.tsx`:
- Instrument Serif (Headlines)
- Manrope (Body)
- JetBrains Mono (Code)

## 🌐 Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy!

### Build for Production

```bash
npm run build
npm run start
```

## 📊 Features

✅ **SEO Optimized** - Server-side rendering, meta tags, sitemap  
✅ **Fast Performance** - Turbopack bundling, optimized fonts  
✅ **Responsive Design** - Works on all devices  
✅ **Smooth Animations** - Framer Motion + Lenis scroll  
✅ **Modern UI** - Editorial design with premium aesthetics  

## 📄 License

MIT © [Pankaj Kumar](https://github.com/pankajkumardev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Made with ❤️ for the developer community** | [GitGenius v1.1.2](https://www.npmjs.com/package/gitgenius)
