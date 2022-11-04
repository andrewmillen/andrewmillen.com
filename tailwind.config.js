module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./components/**/*.js", "./pages/**/*.js", "./lib/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        degular: ["degular"],
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              lineHeight: "1.6",
            },
            h2: {
              fontSize: "1.8em",
            },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
