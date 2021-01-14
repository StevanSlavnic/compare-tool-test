/* eslint-disable prettier/prettier */
import { resolve as _resolve } from 'path'

export const resolve = {
    modules: [_resolve('./src'), _resolve('./node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
        ComponentView: _resolve(__dirname, './src/'),
        ComponentContainer: _resolve(__dirname, './src/')
    }
}
