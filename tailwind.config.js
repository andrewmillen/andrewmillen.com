module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./lib/**/*.js",
    "./content/*.json",
  ],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        degular: ["degular", "system-ui"],
        system: "system-ui",
      },
      colors: {
        link: {
          light: {
            default: "#1867FF",
            hover: "#0400CD",
          },
          dark: {
            default: "#4081FF",
            hover: "#68A4FF",
          },
        },
        moss: {
          100: "#DAECD4",
          900: "#6C8652",
        },
      },
    },
  },
};
