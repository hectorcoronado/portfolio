const path = require('path')

module.exports = (env) => {
    const isProduction = env === 'production'

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                // js
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                // s/css: the '?' catches both types of files (needed for normalize.css):
                {
                    test: /\.?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                // fonts
                {
                    test: /\.(woff(2)?|otf|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: ['url-loader?limit=100000']
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            /**
              * historyApiFallback will render the content base by default, which
              * - enables client-side routing w/ReactRouter
              */
            historyApiFallback: true
        }
    }
}