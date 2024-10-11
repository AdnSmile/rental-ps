const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Barlow"],
    },

    extend: {
      boxShadow: {
        purple:
          "0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.4), 0 0 60px rgba(255, 0, 255, 0.3)",
        cyan: "0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.3)",
        lilac:
          "0 0 20px rgba(200, 162, 200, 0.5), 0 0 40px rgba(200, 162, 200, 0.4), 0 0 60px rgba(200, 162, 200, 0.3)", // Lilac color shadow
      },
    },
  },
  plugins: [],
});
