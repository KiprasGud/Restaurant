const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,   // cleans dist only for production builds
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/Template.html',
            filename: 'index.html',        // served in memory by dev server
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // process CSS files
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',  // tells Webpack to bundle images
            },
        ],
    },

    devServer: {
        static: false,      // 🚀 no dist/ required
        compress: true,
        port: 8080,

        headers: {
            "Content-Security-Policy":
                "default-src 'self'; " +
                "script-src 'self' 'unsafe-eval' 'unsafe-inline'; " +
                "style-src 'self' 'unsafe-inline'; " +
                "connect-src 'self' ws://localhost:8080 http://localhost:8080; " +
                "img-src 'self' data: blob:; " +
                "font-src 'self' data:; " +
                "frame-src 'none';"
        }
    }


};
