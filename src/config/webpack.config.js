/* eslint-disable prettier/prettier */
const path = require('path')

module.exports = {
    resolve: {
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            components: path.resolve(__dirname, './src/')
        }
    }
}
