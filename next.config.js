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
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "place-hold.it",
      },
    ],
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
