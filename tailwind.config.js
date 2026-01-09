/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aspekta: ["Aspekta", "sans-serif"],
      },
      colors: {
        primary: "#eb2eab",
        "primary-dark": "#be2391",
        "primary-light": "#f5c1e5",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #eb2eab 0%, #9b00ff 100%)",
      },
      animation: {
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "slide-in-up": "slideInUp 0.6s ease forwards",
      },
      keyframes: {
        slideInRight: {
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
