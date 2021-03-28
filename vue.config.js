module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/chirrup-v2/'
      : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
