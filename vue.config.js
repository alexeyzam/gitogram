module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/gitogram/dist/'
        : '/'
    ,
    lintOnSave: false
}
