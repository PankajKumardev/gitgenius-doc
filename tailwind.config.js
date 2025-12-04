/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F8F6", // Warm Alabaster
        surface: "#FFFFFF",    // White
        ink: "#1A1A1A",        // Deep Ink Black
        indigo: "#4F46E5",     // Brand / Gemini
        git: "#F05033",        // Git Accent
        pencil: "#666666",     // Secondary Text
        "code-bg": "#1E1E1E",  // VS Code Dark
        "wash": "#E5E5E5",     // Grey Wash
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Manrope', 'sans-serif'], // Geist Proxy
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 8px -2px rgba(0, 0, 0, 0.02)',
        'sharp': '0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05)',
      }
    }
  },
  plugins: [],
}
