// next.config.js
module.exports = {
  webpack(config, { isServer }) {
    // Configuración para SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};


  