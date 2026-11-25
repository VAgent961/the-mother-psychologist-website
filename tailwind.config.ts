import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#2563EB",
  "secondary": "#F59E0B",
  "accent": "#10B981",
  "background": "#FFFFFF",
  "surface": "#FFFFFF",
  "ink": "#111827",
  "muted": "#6B7280",
  "dark": "#111827"
},
      fontFamily: {
  "heading": [
    "Inter",
    "sans-serif"
  ],
  "body": [
    "Inter",
    "sans-serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
