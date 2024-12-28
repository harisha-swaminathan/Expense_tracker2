const historyApiFallback = require('connect-history-api-fallback');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = (env) => {
  const isProd = env.production;

  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
      }
    ]
  },
    plugins: [new MiniCssExtractPlugin()],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      static: [
        {
          directory: path.join(__dirname, 'public'), // Serve index.html and other static assets
        }
      ],
      historyApiFallback: true
    }
  };
};
