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
      colors: {
        link: {
          normal: "#4081FF",
          dark: "#135CEB",
        },
        workHlpr: "#D8CAF6",
        workGardening: "#DAECD4",
        workMealplanner: "#FFDCD9",
        workOther: "#CBE9FB",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              lineHeight: "1.6",
            },
            h2: {
              fontSize: "1.8em",
            },
            a: {
              color: theme("colors.link.normal"),
              fontWeight: "400",
              textUnderlineOffset: 4,
              "&:hover": {
                color: theme("colors.link.dark"),
              },
            },
            blockquote: {
              fontStyle: "normal",
              fontWeight: "400",
              color: "#666666",
            },
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
