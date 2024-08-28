import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: '#D6D6D6',
        accent: '#FD7B03',
        mild_orange: '#FFF4E0',
        light_green: '#EBFFF5',
        rare_green: '#017A591A',
  
        secondary: '#1D1D1F',
        company_red: '#EB7070',
        brand_yellow: '#D8AE2E',
        primary: '#F5F5F7',
        primary_info: '#5094FF'
      },
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
        Vietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      boxShadow: {
        '4xl': '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
        'special': '0px 4px 16px 0px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;


