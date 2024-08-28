import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
};
export default config;
