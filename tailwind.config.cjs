module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#0a0e16",
          800: "#111725",
          700: "#1a2233",
        },
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#7dd3fc",
          deep: "#0ea5e9",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
