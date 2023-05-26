const { withModuleFederation } = require("@module-federation/nextjs-mf");

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
  webpack: (config, options) => {
    const mfConf = {
      name: "shell",
      library: {
        type: config.output.libraryTarget,
        name: "shell",
      },
      remotes: {
        app1: "app1",
        app2: "app2",
      },
      exposes: {},
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
