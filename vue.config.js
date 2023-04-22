module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ProductionEnv/'
  : '',
  "transpileDependencies": [
    "vuetify"
  ]
}