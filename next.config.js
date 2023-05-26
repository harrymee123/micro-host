const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  async rewrites() {
    return [
      {
        source: "/mario",
        destination: "https://micro-mario.vercel.app/mario",
      },
      {
        source: "/mario/:path*",
        destination: "https://micro-mario.vercel.app/mario/:path*",
      },
      {
        source: "/luigi",
        destination: "https://micro-luigi.vercel.app/luigi",
      },
      {
        source: "/luigi/:path*",
        destination: "https://micro-luigi.vercel.app/luigi/:path*",
      },
    ];
  },
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        library: {
          type: config.output.libraryTarget,
          name: "shell",
        },
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          marioApp:
            "marioApp@https://micro-mario.vercel.app/mario/_next/static/runtime/remoteEntry.js",
          luigiApp:
            "luigiApp@https://micro-luigi.vercel.app/luigi/_next/static/runtime/remoteEntry.js",
        },
        exposes: {},
      })
    );

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
