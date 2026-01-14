import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // Artık varsayılan beyaz
        primary: "#1e293b",    // Slate 800 (Kurumsal Koyu Gri)
        secondary: "#f59e0b",  // Amber 500 (İnşaat Turuncusu)
        concrete: "#f3f4f6",   // Beton Grisi (Zeminler için)
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-oswald)"],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'draw-line': 'draw-line 1.5s ease-out forwards',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [],
};

export default config;