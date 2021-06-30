module.exports = {
  dev: {
    port: process.env.PORT || 3000,
    assetsPublicPath: '/',
  },
  prod: {
    assetsPublicPath: '/',
    port: process.env.PORT || 3000,
  }
}