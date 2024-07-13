import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem', 
        center: true,
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #ea9cf0, #29D8FF, #81e468, #F89ABF, #ff9147)',
      },
    },
  },
  plugins: [],
};
export default config;
