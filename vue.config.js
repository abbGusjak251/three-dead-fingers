module.exports = {
  configureWebpack: {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://thawing-earth-16818.herokuapp.com/api',
            },
        },
    },
  },
  transpileDependencies: [
    'vuetify'
  ]
}
