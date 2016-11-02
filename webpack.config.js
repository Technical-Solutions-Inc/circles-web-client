var webpack       = require('webpack');
var getConfig     = require('hjs-webpack');
var path          = require('path');

var config = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  devServer: {
    port: 4000,
    proxy: {
      context: "/api",
      options: {
        target: "http://localhost:3000"
      }
    }
  }
});

config.resolve.extensions = ['', '.js', '.jsx', '.scss', '.styl'];
config.resolve.root = [path.resolve(__dirname, 'src')];
config.sassLoader = { includePaths: [path.resolve(__dirname, 'src', 'theme')] };
//
// switch(process.env.npm_lifecycle_event) {
//   case 'build': {
//     config.devtool = 'cheap-module-source-map';
//   }
//
//   default: {
//     config.devtool = 'source-map';
//   }
// }

module.exports = config;
