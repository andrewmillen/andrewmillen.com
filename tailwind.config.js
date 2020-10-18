module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
        },
      },
    },
    extend: {
      fontFamily: {
        karmina: ["karmina"],
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
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
