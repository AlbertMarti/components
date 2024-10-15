// config-overrides.js
module.exports = {
  webpack: function(config, env) {
    
    if (env !== "production") {
      config.output.jsonpFunction="intNavigation"
      //JS Overrides
      config.output.filename = 'static/js/[name].js';
      config.output.chunkFilename = 'static/js/[name].chunk.js';

      config.optimization.splitChunks = {
        cacheGroups: {
            default: false,
        },
    };
  }

    return config;
  }
};