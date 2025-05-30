module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./lib/**/*.js",
    "./content/*.json",
    "./content/**/*.mdx",
  ],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  theme: {
    extend: {
      listStyleImage: {
        arrow: 'url("../public/arrow.svg")',
      },
      fontFamily: {
        degular: ["degular", "system-ui"],
        system: "system-ui",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
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
