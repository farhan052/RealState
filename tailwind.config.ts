
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        "Playfair":["Playfair Display","sans-serif"],
        "Poppins":["Poppins","sans-serif"],
        "Urbanist":["Urbanist","sans-serif"],
      },
      
         container:{

          screens:{
            DEFAULT :'1330px',
            
            sm:'540px',
            md:'992px',
            lg:'1300px',
            xl:'1600px',
          }
         },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    }
  },
  plugins: [],
} satisfies Config;
