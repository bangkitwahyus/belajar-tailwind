module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      colors: {
        bada: "#bada55",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        shake: "shake 1s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
