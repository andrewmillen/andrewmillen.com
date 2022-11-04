module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: ["./components/**/*.js", "./pages/**/*.js", "./lib/**/*.js"],
  theme: {
    typography: {
      default: {
        css: {
          color: "#333",
          p: {
            lineHeight: "1.6",
            fontFamily: "karmina",
          },
          h2: {
            fontSize: "1.8em",
          },
          ul: {
            fontFamily: "karmina",
          },
        },
      },
    },
    extend: {
      fontFamily: {
        karmina: ["karmina"],
        degular: ["degular"],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        156: "39rem",
        168: "42rem",
        180: "45rem",
        192: "48rem",
        204: "51rem",
        216: "54rem",
        228: "57rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "visited"],
  },
  plugins: [require("@tailwindcss/typography")],
};
