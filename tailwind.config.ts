import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {   
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        // blue: '#277D9B',
        blue: '#278FBC',
        gray: "#F2F2F2",
        sky: '#E8F8FF',
        dark:"#2F404F",
        dark_gray:"D9D9D9",
        footerbackground:"#278FBC",
        // radiant:"#A4E7EB"
        radiant: 'rgba(164, 231, 235, 0.55)'
      },
      textColor: {
        // blue: '#277D9B', 
        blue: '#278FBC', 
        gray:"#888888", 
        black:"#000000",
        headertext:'#278FBC',
        white_hover:"#e3e6e8",
        // white:"#babfc5"
      },     
      boxShadow: {
        blue: '1px 1px 20px 4px #277D9B',
      },
      borderColor:{
        // blue: '#277D9B', 
        blue: '#278FBC', 
      }
    },
  },
  plugins: [],
};
export default config;
