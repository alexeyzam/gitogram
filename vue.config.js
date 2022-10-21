module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/gitogram/dist/'
        : '/'
    ,
    lintOnSave: false
}
if (process.env.NODE_ENV==='production'){
    process.env.VUE_APP_CLIENT_ID='__CLIENT_ID__'
    process.env.VUE_APP_CLIENT_SECRET='__CLIENT_SECRET__'
}
