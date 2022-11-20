module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./lib/**/*.js",
    "./content/*.json",
  ],

  theme: {
    extend: {
      fontFamily: {
        degular: ["degular", "system-ui"],
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
              "&:focus": {
                background: theme("colors.blue.100"),
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
