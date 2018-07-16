const path = require('path');
const chokidar = require('chokidar');
const execa = require('execa');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const devWebpackConfig = require('./webpack.dev.conf');
const config = require('../config')

const wikis = path.resolve(__dirname, '../wikis');

chokidar.watch(wikis).on('all', async () => {
  await execa.shell('npm run wikis');
  console.log('load wikis success');
});

devWebpackConfig.then((webpackConfig) => {
  const compiler = webpack(webpackConfig);
  const devServer = new WebpackDevServer(compiler, webpackConfig.devServer);

  devServer.listen(config.dev.port, config.dev.host, err => {
    if (err) {
      return console.log(err);
    }
    console.log(chalk.cyan('Starting the development server...\n'));
  });

  ['SIGINT', 'SIGTERM'].forEach(function(sig) {
    process.on(sig, function() {
      devServer.close();
      process.exit();
    });
  });
})
