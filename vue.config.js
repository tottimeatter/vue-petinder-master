module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
  pwa: {
    name: 'Petinder',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    favicon32: 'assets/icon.svg',
    favicon16: 'assets/icon.svg',
    appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
    maskIcon: 'img/icons/safari-pinned-tab.svg',
    msTileImage: 'img/icons/msapplication-icon-144x144.png'
  }
};
