const { merge } = require('webpack-merge');
const ReactRefreshTypeScript = require('react-refresh-typescript');

const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);

  if (env === 'dev') {
    commonConfig.module.rules = commonConfig.module.rules.map((rule) => {
      // In the dev mode add the ReactRefreshTypeScript loader to the ts-loader for hot module reloading
      if (rule.test.toString() === '/\\.[jt]sx?$/') {
        rule.options = {
          getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
          }),
          transpileOnly: true,
        };
      }
      return rule;
    });
  }

  return merge(commonConfig, envConfig);
};
