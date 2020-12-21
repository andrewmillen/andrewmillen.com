const path = require("path");

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
