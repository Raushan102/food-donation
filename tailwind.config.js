module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx}", // Adjust based on your actual file types and paths
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F74F22",
        "secondary-color": "#FFAC00",
        "dark-gray": "#1A1A1A",
      },

      fontWeight: {
        "light-bold": 600,
      },

      fontFamily: {
        kalam: ['"Kalam"', "cursive"],
      },
    },
  },
  plugins: [],
};
