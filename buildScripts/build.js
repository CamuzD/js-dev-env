// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/*eslint-disable no-console */

import webpack from 'webpack';
import webpackCongif from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('generating minified bundle for production !'))

webpack(webpackCongif).run((err,stats) => {
  if(err){
    console.log(chalk.red(err));
    return 1;
  }

const jsonStats = stats.toJson();


if(jsonStats.hasErrors){
  return jsonStats.errors.map(error => console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings){
  console.log(chalk.yellow('Webpack generated with the following errors'));
  return jsonStats.errors.map(warning => console.log(chalk.red(warning)));
}

  console.log(`webpack stats: ${stats}`);

  //if we got this far the build succeed

  console.log(chalk.green('your app has been built for production and written to /dist'));

  return 0;
});
