module.exports = {
  cache: {
    cacheId: "star-wars",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "star-wars",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
