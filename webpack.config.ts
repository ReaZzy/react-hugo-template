const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: [path.resolve('js', 'src', 'index.tsx')],
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static', 'assets'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx|\.tsx|\.ts$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.js|\.jsx|\.tsx|\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'module',
            babelrc: true,
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'static/js/src/'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
