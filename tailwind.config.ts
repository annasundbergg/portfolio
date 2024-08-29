import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: [`var(--font-sans)`],
      mono: [`var(--font-mono)`],
      serif: [`var(--font-serif)`]
    },
    extend: {
      backgroundImage: {
        'my_bg_image': "url('/Pink-bg-profile.png')",
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
        "popup": {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0px, 100px, 0px) scale3d(0.5, 0.5, 0.5) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          },
        },
      },
      animation: {
        popup: 'popup 0.5s ease-in-out',
      },
    },


  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config