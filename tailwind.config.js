module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black3: "#0f0f11",
        black2: "#19191c",
        black1: "#1f2024",
        basePurple: "#885bca",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
