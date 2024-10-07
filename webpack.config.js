import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const entryFile = ['./public/js/index.js'];

export default {
  entry: entryFile,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ]
  }
}