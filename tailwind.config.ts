import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          "50":  "#f2f7f2",
          "100": "#e0ede0",
          "200": "#b8d4b8",
          "300": "#85b085",
          "400": "#4e8a4e",
          "500": "#2d6a2d",
          "600": "#1f4f1f",
          "700": "#163816",
          "800": "#0e240e",
          "900": "#071207",
        },
        ivory: {
          "50":  "#fdfcf8",
          "100": "#faf8f0",
          "200": "#f3ede0",
          "300": "#e8ddc8",
          "400": "#d6c9a8",
        },
        gold: {
          "300": "#e8d08a",
          "400": "#d4b84a",
          "500": "#b8962a",
          "600": "#9a7a18",
          "700": "#7a600e",
        },
        bark: {
          "100": "#e8ddd0",
          "200": "#c8b89a",
          "300": "#a89070",
          "400": "#886848",
          "500": "#6a4e30",
          "600": "#4e3820",
        },
        stone: {
          "50":  "#fafaf9",
          "100": "#f5f5f3",
          "200": "#e8e8e4",
          "300": "#d4d4ce",
          "400": "#a8a8a0",
          "500": "#737368",
          "600": "#555550",
          "700": "#3a3a36",
          "800": "#242420",
          "900": "#141410",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", ...fontFamily.serif],
        sans:  ["var(--font-dm-sans)", ...fontFamily.sans],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem,8vw,9rem)",        { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-xl":  ["clamp(3rem,6vw,7rem)",        { lineHeight: "1",    letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(2.5rem,4vw,5rem)",      { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "heading-xl":  ["clamp(2rem,3vw,3.5rem)",      { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        "heading-lg":  ["clamp(1.5rem,2.5vw,2.5rem)",  { lineHeight: "1.2" }],
        "label-sm":    ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.18em" }],
        "label-md":    ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.15em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "128": "32rem",
        "144": "36rem",
      },
      maxWidth: {
        editorial: "72ch",
        wide: "1440px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        reveal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1200": "1200ms",
      },
      backgroundImage: {
        "gradient-bark":  "linear-gradient(180deg, transparent 0%, rgba(7,18,7,0.75) 100%)",
        "gradient-ivory": "linear-gradient(180deg, #faf8f0 0%, transparent 100%)",
        "gradient-gold":  "linear-gradient(135deg, #d4b84a 0%, #b8962a 100%)",
      },
      boxShadow: {
        luxury:       "0 4px 32px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 48px rgba(0,0,0,0.18)",
        gold:         "0 0 0 1px rgba(184,150,42,0.4)",
      },
      animation: {
        "leaf-sway":  "leafSway 6s ease-in-out infinite",
        "float-up":   "floatUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        leafSway: {
          "0%, 100%": { transform: "rotate(-3deg) translateY(0)" },
          "50%":      { transform: "rotate(3deg) translateY(-8px)" },
        },
        floatUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
