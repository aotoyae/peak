// tailwind prettier 적용을 위해 확장자 ts => js 로 바꾸면서 주석처리
// import type { Config } from "tailwindcss";
// const config: Config = {

import animatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/**/*",
  ],
  theme: {
    extend: {
      dropShadow: {
        DEFAULT: "4px 4px 5px #787878",
      },
      colors: {
        "peak-50": "#f8ff2f",
        "peak-100": "#efe0ff",
        "peak-200": "#e3caff",
        "peak-300": "#cha7ha",
        "peak-400": "#b77df4",
        "peak-500": "#a2fbff",
        "peak-600": "#841af6",
        "peak-700": "#690fc9",
        "peak-800": "#4d039d",
        "peak-900": "#420c7c",
        "peak-950": "#340b60",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
